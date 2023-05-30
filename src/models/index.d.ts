import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Departments {
  BIOLOGY = "BIOLOGY",
  COMPUTER_SCIENCE = "COMPUTER_SCIENCE",
  CHEMISTRY = "CHEMISTRY",
  PHYSICS = "PHYSICS",
  MATHEMATICS = "MATHEMATICS",
  PSYCHOLOGY = "PSYCHOLOGY",
  ENGLISH = "ENGLISH",
  ECONOMICS = "ECONOMICS",
  HISTORY = "HISTORY",
  POLITICAL_SCIENCE = "POLITICAL_SCIENCE",
  SOCIOLOGY = "SOCIOLOGY",
  ANTHROPOLOGY = "ANTHROPOLOGY",
  BUSINESS_ADMINISTRATION = "BUSINESS_ADMINISTRATION",
  EDUCATION = "EDUCATION",
  ENGINEERING = "ENGINEERING",
  FINE_ARTS = "FINE_ARTS",
  MUSIC = "MUSIC",
  ARCHITECTURE = "ARCHITECTURE",
  HEALTH_SCIENCES = "HEALTH_SCIENCES",
  LINGUISTICS = "LINGUISTICS",
  COMMUNICATION = "COMMUNICATION",
  SOCIAL_WORK = "SOCIAL_WORK",
  PUBLIC_HEALTH = "PUBLIC_HEALTH",
  INTERNATIONAL_RELATIONS = "INTERNATIONAL_RELATIONS",
  CULTURAL_STUDIES = "CULTURAL_STUDIES",
  RELIGIOUS_STUDIES = "RELIGIOUS_STUDIES",
  FILM_STUDIES = "FILM_STUDIES",
  PHILOSOPHY = "PHILOSOPHY"
}

export enum Region {
  EUROPE = "EUROPE",
  ASIA = "ASIA",
  AFRICA = "AFRICA",
  OCEANIA = "OCEANIA",
  SOUTHAMERICA = "SOUTHAMERICA",
  NORTHAMERICA = "NORTHAMERICA"
}



type EagerPoint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Point, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub?: string | null;
  readonly points?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPoint = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Point, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userSub?: string | null;
  readonly points?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Point = LazyLoading extends LazyLoadingDisabled ? EagerPoint : LazyPoint

export declare const Point: (new (init: ModelInit<Point>) => Point) & {
  copyOf(source: Point, mutator: (draft: MutableModel<Point>) => MutableModel<Point> | void): Point;
}

type EagerRecommendUni = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecommendUni, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weather?: string | null;
  readonly region?: Region | keyof typeof Region | null;
  readonly country?: string | null;
  readonly degree?: string | null;
  readonly interest?: string | null;
  readonly userSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRecommendUni = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RecommendUni, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly weather?: string | null;
  readonly region?: Region | keyof typeof Region | null;
  readonly country?: string | null;
  readonly degree?: string | null;
  readonly interest?: string | null;
  readonly userSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RecommendUni = LazyLoading extends LazyLoadingDisabled ? EagerRecommendUni : LazyRecommendUni

export declare const RecommendUni: (new (init: ModelInit<RecommendUni>) => RecommendUni) & {
  copyOf(source: RecommendUni, mutator: (draft: MutableModel<RecommendUni>) => MutableModel<RecommendUni> | void): RecommendUni;
}

type EagerFavoriteUni = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteUni, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uniId?: string | null;
  readonly userSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFavoriteUni = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FavoriteUni, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly uniId?: string | null;
  readonly userSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FavoriteUni = LazyLoading extends LazyLoadingDisabled ? EagerFavoriteUni : LazyFavoriteUni

export declare const FavoriteUni: (new (init: ModelInit<FavoriteUni>) => FavoriteUni) & {
  copyOf(source: FavoriteUni, mutator: (draft: MutableModel<FavoriteUni>) => MutableModel<FavoriteUni> | void): FavoriteUni;
}

type EagerContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyContactUs = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ContactUs, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Email?: string | null;
  readonly Text?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ContactUs = LazyLoading extends LazyLoadingDisabled ? EagerContactUs : LazyContactUs

export declare const ContactUs: (new (init: ModelInit<ContactUs>) => ContactUs) & {
  copyOf(source: ContactUs, mutator: (draft: MutableModel<ContactUs>) => MutableModel<ContactUs> | void): ContactUs;
}

type EagerArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly author?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyArticle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Article, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly date?: string | null;
  readonly author?: string | null;
  readonly image?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Article = LazyLoading extends LazyLoadingDisabled ? EagerArticle : LazyArticle

export declare const Article: (new (init: ModelInit<Article>) => Article) & {
  copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

type EagerBadgeUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BadgeUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly badgeID?: string | null;
  readonly userEmail?: string | null;
  readonly Badges?: (BadgeUserBadge | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBadgeUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BadgeUser, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly badgeID?: string | null;
  readonly userEmail?: string | null;
  readonly Badges: AsyncCollection<BadgeUserBadge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BadgeUser = LazyLoading extends LazyLoadingDisabled ? EagerBadgeUser : LazyBadgeUser

export declare const BadgeUser: (new (init: ModelInit<BadgeUser>) => BadgeUser) & {
  copyOf(source: BadgeUser, mutator: (draft: MutableModel<BadgeUser>) => MutableModel<BadgeUser> | void): BadgeUser;
}

type EagerBadge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Badge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly badgeusers?: (BadgeUserBadge | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBadge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Badge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly badgeusers: AsyncCollection<BadgeUserBadge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Badge = LazyLoading extends LazyLoadingDisabled ? EagerBadge : LazyBadge

export declare const Badge: (new (init: ModelInit<Badge>) => Badge) & {
  copyOf(source: Badge, mutator: (draft: MutableModel<Badge>) => MutableModel<Badge> | void): Badge;
}

type EagerUniItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UniItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ranking?: number | null;
  readonly name?: string | null;
  readonly region?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly photo?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly type?: string | null;
  readonly accreditation?: string | null;
  readonly weather?: string | null;
  readonly departments?: (string | null)[] | null;
  readonly price?: number | null;
  readonly enrollment?: number | null;
  readonly scholarships?: (string | null)[] | null;
  readonly requirements?: (string | null)[] | null;
  readonly stuff?: number | null;
  readonly facilities?: (string | null)[] | null;
  readonly programs?: (string | null)[] | null;
  readonly acceptance_rate?: number | null;
  readonly graduation_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUniItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UniItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ranking?: number | null;
  readonly name?: string | null;
  readonly region?: string | null;
  readonly city?: string | null;
  readonly country?: string | null;
  readonly photo?: string | null;
  readonly description?: string | null;
  readonly address?: string | null;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly type?: string | null;
  readonly accreditation?: string | null;
  readonly weather?: string | null;
  readonly departments?: (string | null)[] | null;
  readonly price?: number | null;
  readonly enrollment?: number | null;
  readonly scholarships?: (string | null)[] | null;
  readonly requirements?: (string | null)[] | null;
  readonly stuff?: number | null;
  readonly facilities?: (string | null)[] | null;
  readonly programs?: (string | null)[] | null;
  readonly acceptance_rate?: number | null;
  readonly graduation_rate?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UniItem = LazyLoading extends LazyLoadingDisabled ? EagerUniItem : LazyUniItem

export declare const UniItem: (new (init: ModelInit<UniItem>) => UniItem) & {
  copyOf(source: UniItem, mutator: (draft: MutableModel<UniItem>) => MutableModel<UniItem> | void): UniItem;
}

type EagerBadgeUserBadge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BadgeUserBadge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly badgeUserId?: string | null;
  readonly badgeId?: string | null;
  readonly badgeUser: BadgeUser;
  readonly badge: Badge;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBadgeUserBadge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BadgeUserBadge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly badgeUserId?: string | null;
  readonly badgeId?: string | null;
  readonly badgeUser: AsyncItem<BadgeUser>;
  readonly badge: AsyncItem<Badge>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BadgeUserBadge = LazyLoading extends LazyLoadingDisabled ? EagerBadgeUserBadge : LazyBadgeUserBadge

export declare const BadgeUserBadge: (new (init: ModelInit<BadgeUserBadge>) => BadgeUserBadge) & {
  copyOf(source: BadgeUserBadge, mutator: (draft: MutableModel<BadgeUserBadge>) => MutableModel<BadgeUserBadge> | void): BadgeUserBadge;
}