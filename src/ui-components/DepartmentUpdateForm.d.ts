/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Department } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DepartmentUpdateFormInputValues = {
    departmentName?: string;
    requestType?: string;
};
export declare type DepartmentUpdateFormValidationValues = {
    departmentName?: ValidationFunction<string>;
    requestType?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DepartmentUpdateFormOverridesProps = {
    DepartmentUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    departmentName?: PrimitiveOverrideProps<TextFieldProps>;
    requestType?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DepartmentUpdateFormProps = React.PropsWithChildren<{
    overrides?: DepartmentUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    department?: Department;
    onSubmit?: (fields: DepartmentUpdateFormInputValues) => DepartmentUpdateFormInputValues;
    onSuccess?: (fields: DepartmentUpdateFormInputValues) => void;
    onError?: (fields: DepartmentUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DepartmentUpdateFormInputValues) => DepartmentUpdateFormInputValues;
    onValidate?: DepartmentUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DepartmentUpdateForm(props: DepartmentUpdateFormProps): React.ReactElement;
