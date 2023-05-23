// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { FavoriteUni, ContactUs, Article, BadgeUser, Badge, UniItem, BadgeUserBadge } = initSchema(schema);

export {
  FavoriteUni,
  ContactUs,
  Article,
  BadgeUser,
  Badge,
  UniItem,
  BadgeUserBadge
};