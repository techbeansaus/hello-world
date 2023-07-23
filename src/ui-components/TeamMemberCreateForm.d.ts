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
export declare type TeamMemberCreateFormInputValues = {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    photo?: string;
    position?: string;
    departmentId?: string;
};
export declare type TeamMemberCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    departmentId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamMemberCreateFormOverridesProps = {
    TeamMemberCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    departmentId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamMemberCreateFormProps = React.PropsWithChildren<{
    overrides?: TeamMemberCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TeamMemberCreateFormInputValues) => TeamMemberCreateFormInputValues;
    onSuccess?: (fields: TeamMemberCreateFormInputValues) => void;
    onError?: (fields: TeamMemberCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamMemberCreateFormInputValues) => TeamMemberCreateFormInputValues;
    onValidate?: TeamMemberCreateFormValidationValues;
} & React.CSSProperties>;
export default function TeamMemberCreateForm(props: TeamMemberCreateFormProps): React.ReactElement;
