/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TeamMember } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TeamMemberUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    emailAddress?: string;
    photo?: string;
    position?: string;
    departmentId?: string;
};
export declare type TeamMemberUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<string>;
    emailAddress?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    position?: ValidationFunction<string>;
    departmentId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TeamMemberUpdateFormOverridesProps = {
    TeamMemberUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNumber?: PrimitiveOverrideProps<TextFieldProps>;
    emailAddress?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    position?: PrimitiveOverrideProps<TextFieldProps>;
    departmentId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TeamMemberUpdateFormProps = React.PropsWithChildren<{
    overrides?: TeamMemberUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    teamMember?: TeamMember;
    onSubmit?: (fields: TeamMemberUpdateFormInputValues) => TeamMemberUpdateFormInputValues;
    onSuccess?: (fields: TeamMemberUpdateFormInputValues) => void;
    onError?: (fields: TeamMemberUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TeamMemberUpdateFormInputValues) => TeamMemberUpdateFormInputValues;
    onValidate?: TeamMemberUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TeamMemberUpdateForm(props: TeamMemberUpdateFormProps): React.ReactElement;
