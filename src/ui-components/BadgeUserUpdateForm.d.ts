/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeUser } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BadgeUserUpdateFormInputValues = {
    badgeID?: string;
    userEmail?: string;
};
export declare type BadgeUserUpdateFormValidationValues = {
    badgeID?: ValidationFunction<string>;
    userEmail?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BadgeUserUpdateFormOverridesProps = {
    BadgeUserUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    badgeID?: PrimitiveOverrideProps<TextFieldProps>;
    userEmail?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BadgeUserUpdateFormProps = React.PropsWithChildren<{
    overrides?: BadgeUserUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    badgeUser?: BadgeUser;
    onSubmit?: (fields: BadgeUserUpdateFormInputValues) => BadgeUserUpdateFormInputValues;
    onSuccess?: (fields: BadgeUserUpdateFormInputValues) => void;
    onError?: (fields: BadgeUserUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BadgeUserUpdateFormInputValues) => BadgeUserUpdateFormInputValues;
    onValidate?: BadgeUserUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BadgeUserUpdateForm(props: BadgeUserUpdateFormProps): React.ReactElement;
