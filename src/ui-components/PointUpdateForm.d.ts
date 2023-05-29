/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Point } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PointUpdateFormInputValues = {
    userSub?: string;
    points?: number;
};
export declare type PointUpdateFormValidationValues = {
    userSub?: ValidationFunction<string>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PointUpdateFormOverridesProps = {
    PointUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PointUpdateFormProps = React.PropsWithChildren<{
    overrides?: PointUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    point?: Point;
    onSubmit?: (fields: PointUpdateFormInputValues) => PointUpdateFormInputValues;
    onSuccess?: (fields: PointUpdateFormInputValues) => void;
    onError?: (fields: PointUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PointUpdateFormInputValues) => PointUpdateFormInputValues;
    onValidate?: PointUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PointUpdateForm(props: PointUpdateFormProps): React.ReactElement;
