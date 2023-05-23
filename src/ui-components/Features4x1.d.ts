/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Features4x1OverridesProps = {
    Features4x1?: PrimitiveOverrideProps<FlexProps>;
    "Frame 136"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 139"?: PrimitiveOverrideProps<FlexProps>;
    "Why choose us? \uD83E\uDD14"?: PrimitiveOverrideProps<TextProps>;
    "We help students to find postgraduate programs that align with their career goals and academic achievements and to enhance their university search experience."?: PrimitiveOverrideProps<TextProps>;
    "Frame 140"?: PrimitiveOverrideProps<FlexProps>;
    "What sets us apart? \uD83D\uDC9B"?: PrimitiveOverrideProps<TextProps>;
    "Our unique algorithm matches students with postgraduate programs based on their preferences and qualifications, ensuring personalized recommendations."?: PrimitiveOverrideProps<TextProps>;
    "Frame 141"?: PrimitiveOverrideProps<FlexProps>;
    "What will you get? \uD83D\uDC23"?: PrimitiveOverrideProps<TextProps>;
    "You will gain access to a wide range of postgraduate programs, also receive reliable information to make informed decisions about your future education."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Features4x1Props = React.PropsWithChildren<Partial<FlexProps> & {
    feature?: React.ReactNode;
} & {
    overrides?: Features4x1OverridesProps | undefined | null;
}>;
export default function Features4x1(props: Features4x1Props): React.ReactElement;
