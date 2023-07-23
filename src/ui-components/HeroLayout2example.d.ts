/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout2exampleOverridesProps = {
    HeroLayout2example?: PrimitiveOverrideProps<ViewProps>;
    HeroLayout2?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type HeroLayout2exampleProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroLayout2exampleOverridesProps | undefined | null;
}>;
export default function HeroLayout2example(props: HeroLayout2exampleProps): React.ReactElement;
