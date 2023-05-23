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
export declare type UniItemCreateFormInputValues = {
    name?: string;
    photo?: string;
    location?: string;
    price?: number;
    weather?: string;
    description?: string;
    address?: string;
    website?: string;
    phone?: string;
    email?: string;
    type?: string;
    accreditation?: string;
    ranking?: number;
    programs?: string[];
    departments?: string[];
    requirements?: string[];
    enrollment?: number;
    scholarships?: string[];
    facilities?: string[];
    stuff?: number;
};
export declare type UniItemCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    weather?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    accreditation?: ValidationFunction<string>;
    ranking?: ValidationFunction<number>;
    programs?: ValidationFunction<string>;
    departments?: ValidationFunction<string>;
    requirements?: ValidationFunction<string>;
    enrollment?: ValidationFunction<number>;
    scholarships?: ValidationFunction<string>;
    facilities?: ValidationFunction<string>;
    stuff?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniItemCreateFormOverridesProps = {
    UniItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    accreditation?: PrimitiveOverrideProps<TextFieldProps>;
    ranking?: PrimitiveOverrideProps<TextFieldProps>;
    programs?: PrimitiveOverrideProps<TextFieldProps>;
    departments?: PrimitiveOverrideProps<TextFieldProps>;
    requirements?: PrimitiveOverrideProps<TextFieldProps>;
    enrollment?: PrimitiveOverrideProps<TextFieldProps>;
    scholarships?: PrimitiveOverrideProps<TextFieldProps>;
    facilities?: PrimitiveOverrideProps<TextFieldProps>;
    stuff?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UniItemCreateFormProps = React.PropsWithChildren<{
    overrides?: UniItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UniItemCreateFormInputValues) => UniItemCreateFormInputValues;
    onSuccess?: (fields: UniItemCreateFormInputValues) => void;
    onError?: (fields: UniItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniItemCreateFormInputValues) => UniItemCreateFormInputValues;
    onValidate?: UniItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function UniItemCreateForm(props: UniItemCreateFormProps): React.ReactElement;
