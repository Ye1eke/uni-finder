/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function ActionCard(props) {
  const { uniItem, overrides, ...rest } = props;
  const actionCardOnClick = useNavigateAction({
    type: "url",
    url: `${"/uni/"}${uniItem?.id}`,
  });
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: `${"/uni/"}${uniItem?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="320px"
      height="450px"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        actionCardOnClick();
      }}
      {...getOverrideProps(overrides, "ActionCard")}
      {...rest}
    >
      <Image
        width="unset"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={uniItem?.photo}
        loading="lazy"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="16px 16px 20px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="20px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text29766754")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="40px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={uniItem?.name}
            {...getOverrideProps(overrides, "Uni name")}
          ></Text>
        </Flex>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 409")}
        >
          <Flex
            gap="20px"
            direction="column"
            width="139px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Main Text36852479")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={`${"#"}${uniItem?.ranking}`}
              {...getOverrideProps(overrides, "Ranking36852480")}
            ></Text>
          </Flex>
          <Flex
            gap="20px"
            direction="column"
            width="139px"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Main Text37192484")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="right"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={uniItem?.acceptance_rate}
              {...getOverrideProps(overrides, "Ranking37192485")}
            ></Text>
          </Flex>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          backgroundColor="rgba(252,222,103,1)"
          size="large"
          isDisabled={false}
          variation="primary"
          children="More"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
