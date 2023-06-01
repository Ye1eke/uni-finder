// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Region = {
  "EUROPE": "EUROPE",
  "ASIA": "ASIA",
  "AFRICA": "AFRICA",
  "OCEANIA": "OCEANIA",
  "SOUTHAMERICA": "SOUTHAMERICA",
  "NORTHAMERICA": "NORTHAMERICA"
};

const { UserActivity, Question, Point, RecommendUni, FavoriteUni, ContactUs, Article, BadgeUser, Badge, UniItem, UserActivityQuestion, BadgeUserBadge } = initSchema(schema);

export {
  UserActivity,
  Question,
  Point,
  RecommendUni,
  FavoriteUni,
  ContactUs,
  Article,
  BadgeUser,
  Badge,
  UniItem,
  UserActivityQuestion,
  BadgeUserBadge,
  Region
};