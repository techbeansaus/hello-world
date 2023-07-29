/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RequestType } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RequestTypeUpdateFormInputValues = {
    requestType?: string;
    routeEmail?: string;
};
export declare type RequestTypeUpdateFormValidationValues = {
    requestType?: ValidationFunction<string>;
    routeEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestTypeUpdateFormOverridesProps = {
    RequestTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    requestType?: PrimitiveOverrideProps<TextFieldProps>;
    routeEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    requestType?: RequestType;
    onSubmit?: (fields: RequestTypeUpdateFormInputValues) => RequestTypeUpdateFormInputValues;
    onSuccess?: (fields: RequestTypeUpdateFormInputValues) => void;
    onError?: (fields: RequestTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestTypeUpdateFormInputValues) => RequestTypeUpdateFormInputValues;
    onValidate?: RequestTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestTypeUpdateForm(props: RequestTypeUpdateFormProps): React.ReactElement;
