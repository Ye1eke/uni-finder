/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UniItem } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UniItemUpdateFormInputValues = {
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
    acceptance_rate?: number;
    isBolashakPartner?: boolean;
};
export declare type UniItemUpdateFormValidationValues = {
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
    acceptance_rate?: ValidationFunction<number>;
    isBolashakPartner?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UniItemUpdateFormOverridesProps = {
    UniItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
    departments?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    enrollment?: PrimitiveOverrideProps<TextFieldProps>;
    scholarships?: PrimitiveOverrideProps<TextFieldProps>;
    requirements?: PrimitiveOverrideProps<TextFieldProps>;
    stuff?: PrimitiveOverrideProps<TextFieldProps>;
    acceptance_rate?: PrimitiveOverrideProps<TextFieldProps>;
    isBolashakPartner?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UniItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: UniItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uniItem?: UniItem;
    onSubmit?: (fields: UniItemUpdateFormInputValues) => UniItemUpdateFormInputValues;
    onSuccess?: (fields: UniItemUpdateFormInputValues) => void;
    onError?: (fields: UniItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UniItemUpdateFormInputValues) => UniItemUpdateFormInputValues;
    onValidate?: UniItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UniItemUpdateForm(props: UniItemUpdateFormProps): React.ReactElement;
