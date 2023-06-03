/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SocialPostProps } from "./SocialPost";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialPostCollectionOverridesProps = {
    SocialPostCollection?: PrimitiveOverrideProps<CollectionProps>;
    SocialPost?: SocialPostProps;
} & EscapeHatchProps;
export declare type SocialPostCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SocialPostProps;
} & {
    overrides?: SocialPostCollectionOverridesProps | undefined | null;
}>;
export default function SocialPostCollection(props: SocialPostCollectionProps): React.ReactElement;
