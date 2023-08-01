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
import { Image, View } from "@aws-amplify/ui-react";
export default function HeroLayout2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { image: {}, HeroLayout2: {} },
      variantValues: { property1: "Default" },
    },
    {
      overrides: { image: {}, HeroLayout2: {} },
      variantValues: { property1: "Variant2" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1373px"
      height="858px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,1)"
      {...getOverrideProps(overrides, "HeroLayout2")}
      {...rest}
    >
      <Image
        width="561px"
        height="858px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 429px - 0px)"
        left="-119px"
        padding="0px 0px 0px 0px"
        objectFit="contain"
        src="https://m.media-amazon.com/images/I/91EJjIfB5mL._SY879_.jpg"
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
