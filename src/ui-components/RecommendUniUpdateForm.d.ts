/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { RecommendUni } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecommendUniUpdateFormInputValues = {
    weather?: string;
    region?: string;
    country?: string;
    degree?: string;
    interest?: string;
    userSub?: string;
};
export declare type RecommendUniUpdateFormValidationValues = {
    weather?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    degree?: ValidationFunction<string>;
    interest?: ValidationFunction<string>;
    userSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendUniUpdateFormOverridesProps = {
    RecommendUniUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<SelectFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    degree?: PrimitiveOverrideProps<TextFieldProps>;
    interest?: PrimitiveOverrideProps<TextFieldProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecommendUniUpdateFormProps = React.PropsWithChildren<{
    overrides?: RecommendUniUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    recommendUni?: RecommendUni;
    onSubmit?: (fields: RecommendUniUpdateFormInputValues) => RecommendUniUpdateFormInputValues;
    onSuccess?: (fields: RecommendUniUpdateFormInputValues) => void;
    onError?: (fields: RecommendUniUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecommendUniUpdateFormInputValues) => RecommendUniUpdateFormInputValues;
    onValidate?: RecommendUniUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RecommendUniUpdateForm(props: RecommendUniUpdateFormProps): React.ReactElement;
