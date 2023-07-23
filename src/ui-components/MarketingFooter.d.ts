/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 738"?: PrimitiveOverrideProps<ViewProps>;
    "Privacy Policy Terms and Conditions"?: PrimitiveOverrideProps<TextProps>;
    "Copyright @2023"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
