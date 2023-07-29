/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Requests } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Flex,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function ContactUsNew(props) {
  const { requests, requestType, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineThreeSixValue,
    setTextFieldTwoNineSevenSixSixNineThreeSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineThreeEightValue,
    setTextFieldTwoNineSevenSixSixNineThreeEightValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenThreeTwoEightFourTwoValue,
    setTextFieldThreeSixSevenThreeTwoEightFourTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineThreeNineValue,
    setTextFieldTwoNineSevenSixSixNineThreeNineValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      name: textFieldTwoNineSevenSixSixNineThreeSixValue,
      phoneNumber: textFieldTwoNineSevenSixSixNineThreeEightValue,
      emailAddress: textFieldThreeSixSevenThreeTwoEightFourTwoValue,
      requestMessage: textFieldTwoNineSevenSixSixNineThreeNineValue,
    },
    model: Requests,
    schema: schema,
  });
  return (
    <Flex
      gap="24px"
      direction="column"
      width="488px"
      height="887px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ContactUsNew")}
      {...rest}
    >
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
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 31")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          lineHeight="25px"
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
          children="Need assistance?"
          {...getOverrideProps(overrides, "Need assistance?")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(92,102,112,1)"
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
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="If you have any questions, suggestions, or would like to know more about our programs, please feel free to reach out to us using the contact us form below. We are always here to support and guide you on your spiritual journey and ensure that you feel connected to the Sikh principles and community."
          {...getOverrideProps(
            overrides,
            "If you have any questions, suggestions, or would like to know more about our programs, please feel free to reach out to us using the contact us form below. We are always here to support and guide you on your spiritual journey and ensure that you feel connected to the Sikh principles and community."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 24")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(92,102,112,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="SUBMIT A REQUEST"
          {...getOverrideProps(overrides, "SUBMIT A REQUEST")}
        ></Text>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="Name"
        placeholder="name"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldTwoNineSevenSixSixNineThreeSixValue}
        onChange={(event) => {
          setTextFieldTwoNineSevenSixSixNineThreeSixValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField29766936")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Phone"
        placeholder="phone number"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldTwoNineSevenSixSixNineThreeEightValue}
        onChange={(event) => {
          setTextFieldTwoNineSevenSixSixNineThreeEightValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField29766938")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Email"
        placeholder="email address"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldThreeSixSevenThreeTwoEightFourTwoValue}
        onChange={(event) => {
          setTextFieldThreeSixSevenThreeTwoEightFourTwoValue(
            event.target.value
          );
        }}
        {...getOverrideProps(overrides, "TextField36732842")}
      ></TextField>
      <SelectField
        width="unset"
        height="unset"
        label="Request Type"
        placeholder="request type"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={requestType?.requestType}
        {...getOverrideProps(overrides, "SelectField")}
      ></SelectField>
      <TextField
        width="unset"
        height="unset"
        label="Request Message"
        placeholder="message"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        value={textFieldTwoNineSevenSixSixNineThreeNineValue}
        onChange={(event) => {
          setTextFieldTwoNineSevenSixSixNineThreeNineValue(event.target.value);
        }}
        {...getOverrideProps(overrides, "TextField29766939")}
      ></TextField>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Primary Button"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
