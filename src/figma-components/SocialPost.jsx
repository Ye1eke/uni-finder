import React from 'react';
import { Flex, Image, Text, View } from '@aws-amplify/ui-react';
import {
  getOverrideProps,
  useNavigateAction,
} from '@aws-amplify/ui-react/internal';

export default function SocialPost(props) {
  const { article, overrides, ...rest } = props;
  const readmoreTwoNineSevenSixSixEightSixEightOnClick = useNavigateAction({
    type: 'url',
    url: `/article/${article?.id}`,
  });

  return ( 
    <Flex
      direction="column"
      width="100%"
      justifyContent="flex-start"
      alignItems="flex-start"
      padding="24px"
      backgroundColor="rgba(255, 255, 255, 1)"
      {...getOverrideProps(overrides, 'SocialPost')}
      {...rest}
    >
      <Flex
        direction={['column', 'row', 'row']}
        gap={['16px', '40px', '40px']}
        width="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        {...getOverrideProps(overrides, 'Body')}
      >
        <Flex
          direction="column"
          gap="16px"
          width="100%"
          justifyContent="flex-start"
          alignItems="flex-start"
          {...getOverrideProps(overrides, 'Text')}
        >
          <Flex
            direction="column"
            gap="16px"
            width="100%"
            justifyContent="flex-start"
            alignItems="flex-start"
            {...getOverrideProps(overrides, 'Headline')}
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13, 26, 38, 1)"
              lineHeight="25px"
              textAlign="left"
              children={article?.title}
              {...getOverrideProps(overrides, 'New Amplify Studio gives designers the ability to export UI to React code')}
            />
            <Flex
              direction="row"
              gap="16px"
              width="100%"
              justifyContent="flex-start"
              alignItems="center"
              {...getOverrideProps(overrides, 'Frame')}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92, 102, 112, 1)"
                lineHeight="24px"
                textAlign="left"
                children={article?.author}
                {...getOverrideProps(overrides, 'Nikhil S')}
              />
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(92, 102, 112, 1)"
                lineHeight="24px"
                textAlign="left"
                children={article?.date}
                {...getOverrideProps(overrides, '2nd December 2021')}
              />
            </Flex>
          </Flex>
          <Flex
            direction="row"
            gap="16px"
            width="100%"
            justifyContent="flex-start"
            alignItems="flex-start"
            {...getOverrideProps(overrides, 'Article')}
          >
            <View
              width="24px"
              height="24px"
              {...getOverrideProps(overrides, 'MyIcon29766860')}
            />
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13, 26, 38, 1)"
              lineHeight="24px"
              textAlign="left"
              flexGrow="1"
              children={article?.description}
              {...getOverrideProps(
                overrides,
                'AWS Amplify Studio is a visual development environment for building full-stack web and mobile apps that grows with your business. Studio builds on existing backend building capabilities in AWS Amplify, allowing you to build your UI faster with a set of ready-to-use UI components that are editable in Figma. With Studio, you can quickly build an entire web app, front-to-back, with minimal coding, while still maintaining full control over your app design and behavior through code. Ship faster, scale effortlessly, and delight every user.'
              )}
            />
          </Flex>
        </Flex>
        <Image
          width={['100%', '160px', '160px']}
          height="160px"
          display="block"
          borderRadius="16px"
          objectFit="cover"
          src={article?.image}
          {...getOverrideProps(overrides, 'image')}
        />
      </Flex>
      <Flex
        direction="row"
        gap="16px"
        width="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
        onClick={readmoreTwoNineSevenSixSixEightSixEightOnClick}
        {...getOverrideProps(overrides, 'Read more29766868')}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, 'MyIcon29766869')}
        />
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13, 26, 38, 1)"
          lineHeight="24px"
          textAlign="left"
          textDecoration="underline"
          flexGrow="1"
          children="Read more"
          {...getOverrideProps(overrides, 'Read more29766870')}
        />
      </Flex>
    </Flex>
  );
}
