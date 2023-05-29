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
export declare type UniItemCreateFormInputValues = {
    ranking?: number;
    name?: string;
    region?: string;
    city?: string;
    country?: string;
    photo?: string;
    description?: string;
    address?: string;
    website?: string;
    phone?: string;
    email?: string;
    type?: string;
    accreditation?: string;
    weather?: string;
    departments?: string[];
    price?: number;
    enrollment?: number;
    scholarships?: string[];
    requirements?: string[];
    stuff?: number;
    facilities?: string[];
    programs?: string[];
    acceptance_rate?: number;
    graduation_rate?: number;
};
export declare type UniItemCreateFormValidationValues = {
    ranking?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    photo?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    website?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    accreditation?: ValidationFunction<string>;
    weather?: ValidationFunction<string>;
    departments?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    enrollment?: ValidationFunction<number>;
    scholarships?: ValidationFunction<string>;
    requirements?: ValidationFunction<string>;
    stuff?: ValidationFunction<number>;
    facilities?: ValidationFunction<string>;
    programs?: ValidationFunction<string>;
    acceptance_rate?: ValidationFunction<number>;
    graduation_rate?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniItemCreateFormOverridesProps = {
    UniItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    ranking?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    photo?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    website?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    accreditation?: PrimitiveOverrideProps<TextFieldProps>;
    weather?: PrimitiveOverrideProps<TextFieldProps>;
    departments?: PrimitiveOverrideProps<SelectFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    enrollment?: PrimitiveOverrideProps<TextFieldProps>;
    scholarships?: PrimitiveOverrideProps<TextFieldProps>;
    requirements?: PrimitiveOverrideProps<TextFieldProps>;
    stuff?: PrimitiveOverrideProps<TextFieldProps>;
    facilities?: PrimitiveOverrideProps<TextFieldProps>;
    programs?: PrimitiveOverrideProps<TextFieldProps>;
    acceptance_rate?: PrimitiveOverrideProps<TextFieldProps>;
    graduation_rate?: PrimitiveOverrideProps<TextFieldProps>;
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
