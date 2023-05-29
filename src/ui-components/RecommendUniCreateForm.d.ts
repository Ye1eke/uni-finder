/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RecommendUniCreateFormInputValues = {
    weather?: string;
    region?: string;
    country?: string;
    degree?: string;
    interest?: string;
    userSub?: string;
};
export declare type RecommendUniCreateFormValidationValues = {
    weather?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    degree?: ValidationFunction<string>;
    interest?: ValidationFunction<string>;
    userSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecommendUniCreateFormOverridesProps = {
    RecommendUniCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<SelectFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    degree?: PrimitiveOverrideProps<TextFieldProps>;
    interest?: PrimitiveOverrideProps<TextFieldProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecommendUniCreateFormProps = React.PropsWithChildren<{
    overrides?: RecommendUniCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecommendUniCreateFormInputValues) => RecommendUniCreateFormInputValues;
    onSuccess?: (fields: RecommendUniCreateFormInputValues) => void;
    onError?: (fields: RecommendUniCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RecommendUniCreateFormInputValues) => RecommendUniCreateFormInputValues;
    onValidate?: RecommendUniCreateFormValidationValues;
} & React.CSSProperties>;
export default function RecommendUniCreateForm(props: RecommendUniCreateFormProps): React.ReactElement;
