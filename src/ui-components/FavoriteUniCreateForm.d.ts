/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FavoriteUniCreateFormInputValues = {
    uniId?: string;
    userSub?: string;
};
export declare type FavoriteUniCreateFormValidationValues = {
    uniId?: ValidationFunction<string>;
    userSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteUniCreateFormOverridesProps = {
    FavoriteUniCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uniId?: PrimitiveOverrideProps<TextFieldProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavoriteUniCreateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteUniCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FavoriteUniCreateFormInputValues) => FavoriteUniCreateFormInputValues;
    onSuccess?: (fields: FavoriteUniCreateFormInputValues) => void;
    onError?: (fields: FavoriteUniCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteUniCreateFormInputValues) => FavoriteUniCreateFormInputValues;
    onValidate?: FavoriteUniCreateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteUniCreateForm(props: FavoriteUniCreateFormProps): React.ReactElement;
