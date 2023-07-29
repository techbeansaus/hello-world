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
export declare type RequestTypeCreateFormInputValues = {
    requestType?: string;
    routeEmail?: string;
};
export declare type RequestTypeCreateFormValidationValues = {
    requestType?: ValidationFunction<string>;
    routeEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestTypeCreateFormOverridesProps = {
    RequestTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requestType?: PrimitiveOverrideProps<TextFieldProps>;
    routeEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: RequestTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RequestTypeCreateFormInputValues) => RequestTypeCreateFormInputValues;
    onSuccess?: (fields: RequestTypeCreateFormInputValues) => void;
    onError?: (fields: RequestTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestTypeCreateFormInputValues) => RequestTypeCreateFormInputValues;
    onValidate?: RequestTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function RequestTypeCreateForm(props: RequestTypeCreateFormProps): React.ReactElement;
