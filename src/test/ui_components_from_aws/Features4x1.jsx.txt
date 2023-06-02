import React from 'react';
import { Flex, Text } from '@aws-amplify/ui-react';

export default function Features4x1(props) {
  return (
    <Flex
      direction={['column', 'column', 'row']}
      width="100%"
      justifyContent="center"
      alignItems="center"
      padding="40px 20px"
      backgroundColor="rgba(239, 239, 143, 1)"
      {...props}
    >
      <Flex direction="column" gap="24px" alignItems="center" textAlign="center">
        <Text fontSize="20px" fontWeight="700" color="rgba(13, 26, 38, 1)">
          Why choose us? 🤔
        </Text>
        <Text fontSize="14px" fontWeight="400" color="rgba(48, 64, 80, 1)">
          We help students to find postgraduate programs that align with their career goals and academic achievements and to enhance their university search experience.
        </Text>
      </Flex>
      <Flex direction="column" gap="24px" alignItems="center" textAlign="center">
        <Text fontSize="20px" fontWeight="700" color="rgba(13, 26, 38, 1)">
          What sets us apart? 🍍
        </Text>
        <Text fontSize="14px" fontWeight="400" color="rgba(48, 64, 80, 1)">
          Our unique algorithm matches students with postgraduate programs based on their preferences and qualifications, ensuring personalized recommendations.
        </Text>
      </Flex>
      <Flex direction="column" gap="24px" alignItems="center" textAlign="center">
        <Text fontSize="20px" fontWeight="700" color="rgba(13, 26, 38, 1)">
          What will you get? 🐣
        </Text>
        <Text fontSize="14px" fontWeight="400" color="rgba(48, 64, 80, 1)">
          You will gain access to a wide range of postgraduate programs, also receive reliable information to make informed decisions about your future education.
        </Text>
      </Flex>
    </Flex>
  );
}
