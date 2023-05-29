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
export declare type PointCreateFormInputValues = {
    userSub?: string;
    points?: number;
};
export declare type PointCreateFormValidationValues = {
    userSub?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PointCreateFormOverridesProps = {
    PointCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PointCreateFormProps = React.PropsWithChildren<{
    overrides?: PointCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PointCreateFormInputValues) => PointCreateFormInputValues;
    onSuccess?: (fields: PointCreateFormInputValues) => void;
    onError?: (fields: PointCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PointCreateFormInputValues) => PointCreateFormInputValues;
    onValidate?: PointCreateFormValidationValues;
} & React.CSSProperties>;
export default function PointCreateForm(props: PointCreateFormProps): React.ReactElement;
