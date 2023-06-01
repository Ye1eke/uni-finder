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
export declare type UserActivityCreateFormInputValues = {
    userSub?: string;
    answeredQ?: string[];
};
export declare type UserActivityCreateFormValidationValues = {
    userSub?: ValidationFunction<string>;
    answeredQ?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserActivityCreateFormOverridesProps = {
    UserActivityCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
    answeredQ?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UserActivityCreateFormProps = React.PropsWithChildren<{
    overrides?: UserActivityCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserActivityCreateFormInputValues) => UserActivityCreateFormInputValues;
    onSuccess?: (fields: UserActivityCreateFormInputValues) => void;
    onError?: (fields: UserActivityCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserActivityCreateFormInputValues) => UserActivityCreateFormInputValues;
    onValidate?: UserActivityCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserActivityCreateForm(props: UserActivityCreateFormProps): React.ReactElement;
