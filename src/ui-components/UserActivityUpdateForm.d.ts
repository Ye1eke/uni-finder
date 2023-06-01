/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserActivity } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserActivityUpdateFormInputValues = {
    userSub?: string;
    answeredQ?: string[];
};
export declare type UserActivityUpdateFormValidationValues = {
    userSub?: ValidationFunction<string>;
    answeredQ?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserActivityUpdateFormOverridesProps = {
    UserActivityUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
    answeredQ?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserActivityUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserActivityUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userActivity?: UserActivity;
    onSubmit?: (fields: UserActivityUpdateFormInputValues) => UserActivityUpdateFormInputValues;
    onSuccess?: (fields: UserActivityUpdateFormInputValues) => void;
    onError?: (fields: UserActivityUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserActivityUpdateFormInputValues) => UserActivityUpdateFormInputValues;
    onValidate?: UserActivityUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserActivityUpdateForm(props: UserActivityUpdateFormProps): React.ReactElement;
