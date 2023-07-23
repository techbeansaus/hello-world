/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Requests } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestsUpdateFormInputValues = {
    name?: string;
    phoneNumber?: string;
    emailAddress?: string;
    requestType?: string;
    requestMessage?: string;
};
export declare type RequestsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    requestType?: ValidationFunction<string>;
    requestMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestsUpdateFormOverridesProps = {
    RequestsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    requestType?: PrimitiveOverrideProps<TextFieldProps>;
    requestMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestsUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    requests?: Requests;
    onSubmit?: (fields: RequestsUpdateFormInputValues) => RequestsUpdateFormInputValues;
    onSuccess?: (fields: RequestsUpdateFormInputValues) => void;
    onError?: (fields: RequestsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestsUpdateFormInputValues) => RequestsUpdateFormInputValues;
    onValidate?: RequestsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestsUpdateForm(props: RequestsUpdateFormProps): React.ReactElement;
