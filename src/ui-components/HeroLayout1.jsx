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
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function HeroLayout1(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        image: {},
        "LOREM IPSUM": {},
        "Ut enim ad minim veniam quis nostrud": {},
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.":
          {},
        Message: {},
        HeroMessage: {},
        Left: {},
        HeroLayout1: {},
      },
      variantValues: { mode: "Dark" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="-3px"
      direction="row"
      width="1173px"
      height="802px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      display="flex"
      {...getOverrideProps(overrides, "HeroLayout1")}
      {...rest}
    >
      <Image
        width="400px"
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
        src="https://helloworld-storage-731cb94133723-staging.s3.ap-southeast-2.amazonaws.com/public/babadeepsinghjishaheed.jpg?AWSAccessKeyId=ASIARVBGRUEA3JCWTW7B&Expires=1690107486&Signature=ihmh%2FcwSmvK1bOkrauRIhI%2BcVN0%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEGIaDmFwLXNvdXRoZWFzdC0yIkcwRQIhAPltm%2BXgZ6xlb%2FQzUb%2BR7YGqmKS%2FOIUAQAnkTLnNFaf2AiBTIOVBg5Pc9BH3iBjza%2Bp6jS0FIl5oJkIfb%2B4U84vOryrrBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAEaDDExMzg5NzQ4MDQ0OSIMS1DwdrpNSSP%2BQkG0Kr8Ea57oGACc9ulHFOzuA7x9xVustfh19YL%2BB46TShJJJoMAxgLbjaHZQOO%2BfY%2BbXwSv69dMcLkeMkOnIDjyN7s2Q8llRLrTIhJn7aJvxR6Z5am8QEhf79iHAp6mnIyzB%2F8gg9YwecFUJwTk1c1nrhC53FXtEoFCVkDpQjfwoNRcPvycLuWidkez1v%2Bnyt8R2Sx4DDV6cS08qV34fSBV%2Fvv4TEs9A7UxnXf3t1w0vH1KqSKxl%2BlpvRrg6YOWOA5SjCLQRPLJDukgn1TsbIuqn2hUwkqd4PvDkw2oiYuUuH5mS%2FTPfxatwst7wTCBesoCvYyl5BkCTuHUiS9AjCYFmD1Ov4i%2FT3cHtB%2FyFwiGKKeJpyq%2BOtcIfFkcT4Ej3pAdWGt2bJoTJGdD76sOZo2kjnW5UZ%2BDoJQPEePOrCw8Ew1Cu0AuAr4vz3sDPDBxBFZBrAZBCnjKCTMnKhicpThQ2nOBOcUQSp8sTFPDqxbaLYW2lG8K8wahnQdUgOMqNsKcrZ3MVLy4Uugo1kHelaUGKBH1F0igrMJ9c80LPN0C5zJFYcI2LmweCGIta%2FqgJAVQ32ztgr%2F%2FAqbciT8BqA9MfRWfNFBBnNQJKNTmXdiGp7Tt%2BM9IUiZDiuh5%2FBphlMBhGJ6jjRg37TzxBmVSXYo2xWO0WUUFcztMGYHEmmD32qJtaDKbMCW%2FrxhoWqD2dsWu%2F6vLIwpJVnbasybcjVGKxS4RyHc%2FtWsn7wZztVQNEjW59zo1CIiSAzIzqz4YwSOvFvgw%2FfnzpQY6hQIm4YtN2VbizoK09H%2B8V%2B4TFRI6lkkT7fqKgdOZ%2Bi1AP6uYw61DVhd0qFVgM%2BLLyDLST2B8rcivRCGNISJRy67Deo8MIY6SSUguRI8FrSa2lpb7Mbv95KZLFvZbUG%2FO1HcHYsdeyxXJBdBUU1NQ%2Ftvp5DD4lUmawdoszQlhj4PSEg43jqvMnMkRzRenKDX8BlPtBdkqmLFMfo7jxue4Atd0qwUDh3Sp7nVZblJl59lVqjMi8UofiW5SBmslJDs6VefNYfw2KvyUU9SVtrajlugkdxF4rVQTLNROxk3Ap0yAoq7TCcCE93CXk%2FypK2mICDoPmxY%2BxaEcNidG682Cur%2F7KkhehoM%3D"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        width="847px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="120px 120px 120px 120px"
        backgroundColor="rgba(0,0,0,1)"
        display="flex"
        {...getOverrideProps(overrides, "Left")}
      >
        <Flex
          gap="24px"
          direction="column"
          width="unset"
          height="408px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "HeroMessage")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
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
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            display="flex"
            {...getOverrideProps(overrides, "Message")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(255,255,255,1)"
              lineHeight="30px"
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
              color="rgba(255,255,255,1)"
              lineHeight="24px"
              textAlign="center"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="366px"
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
    </Flex>
  );
}
