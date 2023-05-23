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
export declare type BadgeUserCreateFormInputValues = {
    badgeID?: string;
    userEmail?: string;
};
export declare type BadgeUserCreateFormValidationValues = {
    badgeID?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BadgeUserCreateFormOverridesProps = {
    BadgeUserCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    badgeID?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BadgeUserCreateFormProps = React.PropsWithChildren<{
    overrides?: BadgeUserCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BadgeUserCreateFormInputValues) => BadgeUserCreateFormInputValues;
    onSuccess?: (fields: BadgeUserCreateFormInputValues) => void;
    onError?: (fields: BadgeUserCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BadgeUserCreateFormInputValues) => BadgeUserCreateFormInputValues;
    onValidate?: BadgeUserCreateFormValidationValues;
} & React.CSSProperties>;
export default function BadgeUserCreateForm(props: BadgeUserCreateFormProps): React.ReactElement;
