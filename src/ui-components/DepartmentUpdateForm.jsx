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
export default function DepartmentUpdateForm(props) {
  const {
    id: idProp,
    department: departmentModelProp,
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
    const cleanValues = departmentRecord
      ? { ...initialValues, ...departmentRecord }
      : initialValues;
    setDepartmentName(cleanValues.departmentName);
    setRequestType(cleanValues.requestType);
    setErrors({});
  };
  const [departmentRecord, setDepartmentRecord] =
    React.useState(departmentModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Department, idProp)
        : departmentModelProp;
      setDepartmentRecord(record);
    };
    queryData();
  }, [idProp, departmentModelProp]);
  React.useEffect(resetStateValues, [departmentRecord]);
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
          await DataStore.save(
            Department.copyOf(departmentRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "DepartmentUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || departmentModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || departmentModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
