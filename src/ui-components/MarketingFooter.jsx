/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MarketingFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="114px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "MarketingFooter")}
      {...rest}
    >
      <View
        width="1440px"
        height="114px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="40px"
        left="38px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Privacy Policy&#xA;Terms and Conditions"
        {...getOverrideProps(overrides, "Privacy Policy Terms and Conditions")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="40px"
        right="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Copyright @2023"
        {...getOverrideProps(overrides, "Copyright @2023")}
      ></Text>
    </View>
  );
}
