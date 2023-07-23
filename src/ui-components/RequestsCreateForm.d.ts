/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestsCreateFormInputValues = {
    name?: string;
    phoneNumber?: string;
    emailAddress?: string;
    requestType?: string;
    requestMessage?: string;
};
export declare type RequestsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    requestType?: ValidationFunction<string>;
    requestMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestsCreateFormOverridesProps = {
    RequestsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    requestType?: PrimitiveOverrideProps<TextFieldProps>;
    requestMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestsCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestsCreateFormInputValues) => RequestsCreateFormInputValues;
    onSuccess?: (fields: RequestsCreateFormInputValues) => void;
    onError?: (fields: RequestsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestsCreateFormInputValues) => RequestsCreateFormInputValues;
    onValidate?: RequestsCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestsCreateForm(props: RequestsCreateFormProps): React.ReactElement;
