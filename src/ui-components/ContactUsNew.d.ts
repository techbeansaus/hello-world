/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsNewOverridesProps = {
    ContactUsNew?: PrimitiveOverrideProps<FlexProps>;
    "Frame 31"?: PrimitiveOverrideProps<FlexProps>;
    "Need assistance?"?: PrimitiveOverrideProps<TextProps>;
    "If you have any questions, suggestions, or would like to know more about our programs, please feel free to reach out to us using the contact us form below. We are always here to support and guide you on your spiritual journey and ensure that you feel connected to the Sikh principles and community."?: PrimitiveOverrideProps<TextProps>;
    "Frame 24"?: PrimitiveOverrideProps<FlexProps>;
    "SUBMIT A REQUEST"?: PrimitiveOverrideProps<TextProps>;
    TextField29766936?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766938?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36732842?: PrimitiveOverrideProps<TextFieldProps>;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField29766939?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ContactUsNewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactUsNewOverridesProps | undefined | null;
}>;
export default function ContactUsNew(props: ContactUsNewProps): React.ReactElement;
