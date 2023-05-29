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
export declare type RecUniInputValues = {
    weather?: string;
    region?: string;
    country?: string;
    degree?: string;
    interest?: string;
    userSub?: string;
};
export declare type RecUniValidationValues = {
    weather?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    degree?: ValidationFunction<string>;
    interest?: ValidationFunction<string>;
    userSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RecUniOverridesProps = {
    RecUniGrid?: PrimitiveOverrideProps<GridProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<SelectFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    degree?: PrimitiveOverrideProps<TextFieldProps>;
    interest?: PrimitiveOverrideProps<TextFieldProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RecUniProps = React.PropsWithChildren<{
    overrides?: RecUniOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RecUniInputValues) => RecUniInputValues;
    onSuccess?: (fields: RecUniInputValues) => void;
    onError?: (fields: RecUniInputValues, errorMessage: string) => void;
    onChange?: (fields: RecUniInputValues) => RecUniInputValues;
    onValidate?: RecUniValidationValues;
} & React.CSSProperties>;
export default function RecUni(props: RecUniProps): React.ReactElement;
