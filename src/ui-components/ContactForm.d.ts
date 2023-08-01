/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormInputValues = {
    name?: string;
    phoneNumber?: string;
    emailAddress?: string;
    requestType?: string;
    requestMessage?: string;
};
export declare type ContactFormValidationValues = {
    name?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    requestType?: ValidationFunction<string>;
    requestMessage?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormOverridesProps = {
    ContactFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    requestType?: PrimitiveOverrideProps<SelectFieldProps>;
    requestMessage?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormProps = React.PropsWithChildren<{
    overrides?: ContactFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactFormInputValues) => ContactFormInputValues;
    onSuccess?: (fields: ContactFormInputValues) => void;
    onError?: (fields: ContactFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormInputValues) => ContactFormInputValues;
    onValidate?: ContactFormValidationValues;
} & React.CSSProperties>;
export default function ContactForm(props: ContactFormProps): React.ReactElement;
