import React from 'react'
import {SocialPostCollection} from '../figma-components';
import Banner from './Banner';
import './Article.css'
function Article() {
  console.log('hi')
  return (<div>
    <Banner img='https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80' title='Articles' subTitle='All the 💎 is here!!!'/>
    <div className='container article__collection'>
      <SocialPostCollection  type="list" justifyContent="space-between" wrap="wrap" alignItems="center" isPaginated="" gap="2rem"/>
    </div>
    </div>
  )
}

export default Article
