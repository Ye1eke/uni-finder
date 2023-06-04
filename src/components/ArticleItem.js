import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataStore, Auth } from 'aws-amplify';
import { Article, Comment, Reply} from '../models';
import Banner from './Banner';
import './ArticleItem.css';

function ArticleItem() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newReply, setNewReply] = useState('');
  const [replies, setReplies] = useState([]);
  const [showReplyForm, setShowReplyForm] = useState({});
  const [currentDate, setCurrentDate] = useState(new Date());
  useEffect(() => {
    async function fetchArticleAndComments() {
      const articleFromBackend = await DataStore.query(Article, id);
      const commentsFromBackend = await DataStore.query(Comment, (c) => c.articleID.eq(id));
      const repliesFromBackend = await DataStore.query(Reply);
      setArticle(articleFromBackend);
      setComments(commentsFromBackend);
      setReplies(
        repliesFromBackend.filter((reply) =>
          commentsFromBackend.some((comment) => comment.id === reply.commentID)
        )
      );
    }

    fetchArticleAndComments();
  }, [id]);

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = async (event) => {
    event.preventDefault();

    const user = await Auth.currentAuthenticatedUser();

    const comment = {
      text: newComment,
      articleID: id,
      username: user.attributes['custom:username'],
      date: currentDate.toISOString().substring(0, 10),
    };

    const newCommentObject = await DataStore.save(new Comment(comment));
    setNewComment('');
    setComments((prevComments) => [...prevComments, newCommentObject]);
  };

  const handleReplySubmit = async (event, commentID) => {
    // window.location.reload()
    event.preventDefault();
  
    // Get the current user's username
    const user = await Auth.currentAuthenticatedUser();
    const username = user.attributes['custom:username'];
  
    // Create a new reply associated with the specified comment
    const reply = await DataStore.save(
      new Reply({
        text: newReply,
        username: username,
        commentID: commentID,
        date: currentDate.toISOString().substring(0, 10),
      })
    );
  
    // Find the parent comment and add the reply to its Replies array
    setComments((prevComments) => {
      const updatedComments = prevComments.map((c) => {
        if (c.id === commentID) {
          const updatedReplies = replies.filter((reply) => reply.commentID === commentID);
          return { ...c, Replies: updatedReplies };
        }
        return c;
      });
      return updatedComments;
    });

    
  
    setNewReply('');
    
  };
  const toggleReplyForm = (commentID) => {
    setShowReplyForm((prevShowReplyForm) => ({
      ...prevShowReplyForm,
      [commentID]: !prevShowReplyForm[commentID]
    }));
  };
  if (!article) {
    return <div>loading</div>;
  }

  return (
    <div className="article">
      <Banner img={article.image} title={article.title} />
      <div className="container article__box">
        <div className="article__info">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <span id="article_author">{article.date}</span>
          </p>
          <p>
            <span className="article__spans">By</span> <span id="article_author">{article.author}</span>
          </p>
        </div>
        <p id="article__text">{article.description}</p>
      </div>

      <div className="container">
        <div className='article__comment'>
          <h2 className='article__add'>Add Comment</h2>
          <form className='form__comment' onSubmit={handleCommentSubmit}>
            <textarea className='form__comment__input' type="text" value={newComment} onChange={handleCommentChange} placeholder="Leave a comment" />
            <button className='btn form__comment__btn' type="submit">Send</button>
          </form>
        </div>
        <ul className='comment__list'>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p className='comment__username'>{comment.username} <span className='comment__date'>{comment.date}</span></p>
              <p>➡{comment.text}</p>
              <p className='' onClick={() => toggleReplyForm(comment.id)}>Reply</p>
              {showReplyForm[comment.id] && (
              <form className='form__comment' onSubmit={(event) => handleReplySubmit(event, comment.id)}>
                <textarea className='form__comment__input'
                  placeholder="Write a reply..."
                  value={newReply}
                  onChange={(event) => setNewReply(event.target.value)}
                  required
                ></textarea>
                <button className='btn form__comment__btn' type="submit">Submit Reply</button>
              </form>
              )}
              {replies
      .filter((reply) => reply.commentID === comment.id)
      .map((reply) => (
                <div key={reply.id} className="reply">
                  <p>
                    - <strong>{reply.username}</strong> <span className='comment__date'>{reply.date}</span>
                  </p>
                  <p>{reply.text}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ArticleItem;
