/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FavoriteUni } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FavoriteUniUpdateFormInputValues = {
    uniId?: string;
    userSub?: string;
};
export declare type FavoriteUniUpdateFormValidationValues = {
    uniId?: ValidationFunction<string>;
    userSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FavoriteUniUpdateFormOverridesProps = {
    FavoriteUniUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    uniId?: PrimitiveOverrideProps<TextFieldProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FavoriteUniUpdateFormProps = React.PropsWithChildren<{
    overrides?: FavoriteUniUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    favoriteUni?: FavoriteUni;
    onSubmit?: (fields: FavoriteUniUpdateFormInputValues) => FavoriteUniUpdateFormInputValues;
    onSuccess?: (fields: FavoriteUniUpdateFormInputValues) => void;
    onError?: (fields: FavoriteUniUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FavoriteUniUpdateFormInputValues) => FavoriteUniUpdateFormInputValues;
    onValidate?: FavoriteUniUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FavoriteUniUpdateForm(props: FavoriteUniUpdateFormProps): React.ReactElement;
