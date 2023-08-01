/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Flex,
  Image,
  Text,
  View,
  useBreakpointValue,
} from "@aws-amplify/ui-react";
export default function HeroLayout1responsive(props) {
  const { overrides: overridesProp, ...restProp } = props;
  const variants = [
    {
      overrides: {
        image37862812: {},
        "Frame 418": {},
        "LOREM IPSUM": {},
        "Ut enim ad minim veniam quis nostrud": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.":
          {},
        Message: {},
        HeroMessage: {},
        Left: {},
        image29766557: {},
        HeroLayout1responsive: {},
      },
      variantValues: { breakpoint: "large" },
    },
    {
      overrides: {
        image37862812: {
          width: "475px",
          height: "516px",
          top: "1px",
          left: "0.5px",
        },
        "Frame 418": {
          width: "475px",
          height: "517px",
          display: "block",
          backgroundColor: "rgba(0,0,0,1)",
        },
        "LOREM IPSUM": {},
        "Ut enim ad minim veniam quis nostrud": { height: "60px" },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.":
          { height: "685px" },
        Message: {
          width: "440px",
          height: "764px",
          padding: "0px 20px 0px 20px",
        },
        HeroMessage: { width: "479px", padding: "0px 20px 0px 20px" },
        Left: {
          gap: "38px",
          width: "470px",
          height: "1372px",
          justifyContent: "flex-start",
          padding: "0px 120px 0px 120px",
          overflow: "hidden",
        },
        image29766557: { width: "684px", display: "none", objectFit: "cover" },
        HeroLayout1responsive: {
          width: "unset",
          height: "1372px",
          padding: "0px 0px 0px 0px",
        },
      },
      variantValues: { breakpoint: "small" },
    },
    {
      overrides: {
        image37862812: {
          width: "725px",
          height: "638px",
          top: "1px",
          left: "-0.5px",
          objectFit: "contain",
        },
        "Frame 418": {
          width: "725px",
          height: "639px",
          display: "block",
          backgroundColor: "rgba(255,255,255,1)",
        },
        "LOREM IPSUM": {},
        "Ut enim ad minim veniam quis nostrud": { height: "unset" },
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.":
          { height: "587px" },
        Message: {
          width: "unset",
          height: "677px",
          padding: "0px 0px 0px 0px",
          alignSelf: "stretch",
        },
        HeroMessage: { width: "479px", height: "698px" },
        Left: {
          gap: "38px",
          width: "725px",
          height: "1425px",
          justifyContent: "flex-start",
          padding: "0px 120px 0px 120px",
          overflow: "hidden",
        },
        image29766557: { width: "684px", display: "none", objectFit: "cover" },
        HeroLayout1responsive: {
          width: "710px",
          height: "1427px",
          padding: "0px 0px 0px 0px",
        },
      },
      variantValues: { breakpoint: "medium" },
    },
  ];
  const breakpointHook = useBreakpointValue({
    base: "small",
    small: "small",
    medium: "medium",
    large: "large",
  });
  const rest = { style: { transition: "all 0.25s" }, ...restProp };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, {
      breakpoint: breakpointHook,
      ...props,
    }),
    overridesProp || {}
  );
  return (
    <Flex
      gap="0"
      direction="row"
      width="1541px"
      height="728px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 120px 0px 120px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1responsive")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="1008px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(255,255,255,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <View
          width="975px"
          height="490px"
          display="none"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(196,196,196,1)"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <Image
            width="684px"
            height="930px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="25px"
            left="193.5px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://www.sikhheros.com/wp-content/uploads/2021/08/baba-ji.jpg"
            {...getOverrideProps(overrides, "image37862812")}
          ></Image>
        </View>
        <Flex
          gap="24px"
          direction="column"
          width="1002px"
          height="804px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
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
            children="Baba Deep Singh Ji Shaheed"
            {...getOverrideProps(overrides, "LOREM IPSUM")}
          ></Text>
          <Flex
            gap="16px"
            direction="column"
            width="948px"
            height="664px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 120px 0px 120px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(0,0,0,1)"
              lineHeight="30px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="28px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="A Tale of Courage, Sacrifice, and Unyielding Devotion"
              {...getOverrideProps(
                overrides,
                "Ut enim ad minim veniam quis nostrud"
              )}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(0,0,0,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="561px"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Baba Deep Singh Ji Shaheed, born in 1682 in Pahuwind, Punjab, was a highly respected figure in Sikh history. He exemplified the qualities of a warrior, scholar, and martyr, leaving a profound impact on Sikhism. Deeply devoted to Guru Gobind Singh, the tenth Guru of Sikhism, Baba Deep Singh Ji joined the Sikh army and actively participated in several battles against the oppressive Mughal forces. He fearlessly fought to protect the rights and freedom of the Sikh community and other oppressed groups. One of the most defining moments in Baba Deep Singh Ji's life came during the defense of Sri Harmandir Sahib, the holiest Sikh shrine in Amritsar. In 1757, when the Afghan forces attacked the sacred complex and desecrated it, Baba Deep Singh Ji led a group of Sikh soldiers in a daring confrontation. During the intense battle, Baba Deep Singh Ji exhibited unparalleled bravery and unwavering determination. Even after sustaining a fatal injury, he continued fighting with undying resolve. Legend has it that he held his severed head in his left hand while wielding a sword with his right, leading his fellow warriors until he reached the vicinity where he ultimately fell. The martyrdom of Baba Deep Singh Ji is revered as a supreme act of sacrifice and devotion within the Sikh faith. His gallant example continues to inspire Sikhs worldwide, serving as a testament to the unwavering commitment to Sikh principles, fearlessness in the face of adversity, and the eternal spirit of standing up against injustice. To this day, Baba Deep Singh Ji is honored through various Sikh ceremonies, processions, and religious events. His legacy remains an indelible part of Sikh heritage, teaching future generations about the significance of bravery, sacrifice, and unwavering faith in the pursuit of righteousness."
              {...getOverrideProps(
                overrides,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
              )}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <Image
        width="544px"
        height="unset"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        src="https://www.sikhheros.com/wp-content/uploads/2021/08/baba-ji.jpg"
        {...getOverrideProps(overrides, "image29766557")}
      ></Image>
    </Flex>
  );
}
