/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Badge } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BadgeUpdateFormInputValues = {
    name?: string;
    description?: string;
    image?: string;
};
export declare type BadgeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BadgeUpdateFormOverridesProps = {
    BadgeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BadgeUpdateFormProps = React.PropsWithChildren<{
    overrides?: BadgeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    badge?: Badge;
    onSubmit?: (fields: BadgeUpdateFormInputValues) => BadgeUpdateFormInputValues;
    onSuccess?: (fields: BadgeUpdateFormInputValues) => void;
    onError?: (fields: BadgeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BadgeUpdateFormInputValues) => BadgeUpdateFormInputValues;
    onValidate?: BadgeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BadgeUpdateForm(props: BadgeUpdateFormProps): React.ReactElement;
