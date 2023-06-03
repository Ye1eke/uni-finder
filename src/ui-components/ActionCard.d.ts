/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { UniItem } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionCardOverridesProps = {
    ActionCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text29766754"?: PrimitiveOverrideProps<FlexProps>;
    "Uni name"?: PrimitiveOverrideProps<TextProps>;
    "Frame 409"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text36852479"?: PrimitiveOverrideProps<FlexProps>;
    Ranking36852480?: PrimitiveOverrideProps<TextProps>;
    "Main Text37192484"?: PrimitiveOverrideProps<FlexProps>;
    Ranking37192485?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ActionCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    uniItem?: UniItem;
} & {
    overrides?: ActionCardOverridesProps | undefined | null;
}>;
export default function ActionCard(props: ActionCardProps): React.ReactElement;
