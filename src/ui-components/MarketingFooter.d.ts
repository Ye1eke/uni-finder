/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterOverridesProps = {
    MarketingFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 738"?: PrimitiveOverrideProps<ViewProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna"?: PrimitiveOverrideProps<TextProps>;
    "Frame 405"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 403"?: PrimitiveOverrideProps<FlexProps>;
    "Lorem ipsum dolor sit amet"?: PrimitiveOverrideProps<TextProps>;
    "Consectetur adipiscing37182484"?: PrimitiveOverrideProps<TextProps>;
    "Elit sed do eiusmod37182485"?: PrimitiveOverrideProps<TextProps>;
    "Tempor incididunt ut labore"?: PrimitiveOverrideProps<TextProps>;
    "Et dolore magna"?: PrimitiveOverrideProps<TextProps>;
    "Frame 404"?: PrimitiveOverrideProps<FlexProps>;
    "We are in Social Media"?: PrimitiveOverrideProps<TextProps>;
    "Consectetur adipiscing37182490"?: PrimitiveOverrideProps<TextProps>;
    "Elit sed do eiusmod37182491"?: PrimitiveOverrideProps<TextProps>;
    "\u00A9 2023 Yeddies"?: PrimitiveOverrideProps<TextProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    Articles?: PrimitiveOverrideProps<TextProps>;
    "Frame 406"?: PrimitiveOverrideProps<FlexProps>;
    Universities?: PrimitiveOverrideProps<TextProps>;
    "Frame 407"?: PrimitiveOverrideProps<FlexProps>;
    Profile?: PrimitiveOverrideProps<TextProps>;
    "Frame 408"?: PrimitiveOverrideProps<FlexProps>;
    Leaderboard?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MarketingFooterOverridesProps | undefined | null;
}>;
export default function MarketingFooter(props: MarketingFooterProps): React.ReactElement;
