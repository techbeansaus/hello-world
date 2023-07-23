/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Department } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function DepartmentCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    departmentName: "",
    requestType: "",
  };
  const [departmentName, setDepartmentName] = React.useState(
    initialValues.departmentName
  );
  const [requestType, setRequestType] = React.useState(
    initialValues.requestType
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setDepartmentName(initialValues.departmentName);
    setRequestType(initialValues.requestType);
    setErrors({});
  };
  const validations = {
    departmentName: [],
    requestType: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          departmentName,
          requestType,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Department(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DepartmentCreateForm")}
      {...rest}
    >
      <TextField
        label="Department name"
        isRequired={false}
        isReadOnly={false}
        value={departmentName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              departmentName: value,
              requestType,
            };
            const result = onChange(modelFields);
            value = result?.departmentName ?? value;
          }
          if (errors.departmentName?.hasError) {
            runValidationTasks("departmentName", value);
          }
          setDepartmentName(value);
        }}
        onBlur={() => runValidationTasks("departmentName", departmentName)}
        errorMessage={errors.departmentName?.errorMessage}
        hasError={errors.departmentName?.hasError}
        {...getOverrideProps(overrides, "departmentName")}
      ></TextField>
      <TextField
        label="Request type"
        isRequired={false}
        isReadOnly={false}
        value={requestType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              departmentName,
              requestType: value,
            };
            const result = onChange(modelFields);
            value = result?.requestType ?? value;
          }
          if (errors.requestType?.hasError) {
            runValidationTasks("requestType", value);
          }
          setRequestType(value);
        }}
        onBlur={() => runValidationTasks("requestType", requestType)}
        errorMessage={errors.requestType?.errorMessage}
        hasError={errors.requestType?.hasError}
        {...getOverrideProps(overrides, "requestType")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
