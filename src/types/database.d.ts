// The TypeScript definitions below are automatically generated.
// Do not touch them, or risk, your modifications being lost.

export enum BridgeStatus {
  Pending = "PENDING",
  Active = "ACTIVE",
  Paused = "PAUSED",
}

export enum CountingType {
  Normal = "NORMAL",
  Hardcore = "HARDCORE",
  Token = "TOKEN",
}

export enum DrugCategoryType {
  Common = "COMMON",
  Psychoactive = "PSYCHOACTIVE",
  Chemical = "CHEMICAL",
}

export enum DrugMassUnit {
  Mg = "MG",
  Ml = "ML",
  G = "µG",
  G = "G",
  Oz = "OZ",
  Floz = "FLOZ",
}

export enum DrugNameType {
  Brand = "BRAND",
  Common = "COMMON",
  Substitutive = "SUBSTITUTIVE",
  Systematic = "SYSTEMATIC",
}

export enum DrugRoa {
  Oral = "ORAL",
  Insufflated = "INSUFFLATED",
  Inhaled = "INHALED",
  Topical = "TOPICAL",
  Sublingual = "SUBLINGUAL",
  Buccal = "BUCCAL",
  Rectal = "RECTAL",
  Intramuscular = "INTRAMUSCULAR",
  Intravenous = "INTRAVENOUS",
  Subcutanious = "SUBCUTANIOUS",
  Transdermal = "TRANSDERMAL",
}

export enum ExperienceCategory {
  Total = "TOTAL",
  General = "GENERAL",
  Tripsitter = "TRIPSITTER",
  Developer = "DEVELOPER",
  Team = "TEAM",
  Ignored = "IGNORED",
}

export enum ExperienceType {
  Text = "TEXT",
  Voice = "VOICE",
}

export enum ReactionRoleType {
  Color = "COLOR",
  PremiumColor = "PREMIUM_COLOR",
  Mindset = "MINDSET",
  Pronoun = "PRONOUN",
  Notification = "NOTIFICATION",
  Custom = "CUSTOM",
}

export enum TicketStatus {
  Open = "OPEN",
  Owned = "OWNED",
  Blocked = "BLOCKED",
  Paused = "PAUSED",
  Closed = "CLOSED",
  Resolved = "RESOLVED",
  Archived = "ARCHIVED",
  Deleted = "DELETED",
}

export enum TicketType {
  Appeal = "APPEAL",
  Tripsit = "TRIPSIT",
  Tech = "TECH",
  Feedback = "FEEDBACK",
}

export enum UserActionType {
  Note = "NOTE",
  Warning = "WARNING",
  FullBan = "FULL_BAN",
  TicketBan = "TICKET_BAN",
  DiscordBotBan = "DISCORD_BOT_BAN",
  BanEvasion = "BAN_EVASION",
  Underban = "UNDERBAN",
  Timeout = "TIMEOUT",
  Report = "REPORT",
  Kick = "KICK",
  HelperBan = "HELPER_BAN",
  ContributorBan = "CONTRIBUTOR_BAN",
}

export enum Table {
  Bridges = "bridges",
  Counting = "counting",
  DiscordGuilds = "discordGuilds",
  DrugArticles = "drugArticles",
  DrugCategories = "drugCategories",
  DrugCategoryDrugs = "drugCategoryDrugs",
  DrugNames = "drugNames",
  DrugVariantRoas = "drugVariantRoas",
  DrugVariants = "drugVariants",
  Drugs = "drugs",
  KnexMigrations = "knex_migrations",
  KnexMigrationsLock = "knex_migrations_lock",
  Personas = "personas",
  ReactionRoles = "reactionRoles",
  ReactionRoles = "reaction_roles",
  RpgInventory = "rpgInventory",
  Rss = "rss",
  UserActions = "userActions",
  UserDrugDoses = "userDrugDoses",
  UserExperience = "userExperience",
  UserReminders = "userReminders",
  UserTickets = "userTickets",
  Users = "users",
}

export type Tables = {
  "bridges": Bridges,
  "counting": Counting,
  "discordGuilds": DiscordGuilds,
  "drugArticles": DrugArticles,
  "drugCategories": DrugCategories,
  "drugCategoryDrugs": DrugCategoryDrugs,
  "drugNames": DrugNames,
  "drugVariantRoas": DrugVariantRoas,
  "drugVariants": DrugVariants,
  "drugs": Drugs,
  "knex_migrations": KnexMigrations,
  "knex_migrations_lock": KnexMigrationsLock,
  "personas": Personas,
  "reactionRoles": ReactionRoles,
  "reaction_roles": ReactionRoles,
  "rpgInventory": RpgInventory,
  "rss": Rss,
  "userActions": UserActions,
  "userDrugDoses": UserDrugDoses,
  "userExperience": UserExperience,
  "userReminders": UserReminders,
  "userTickets": UserTickets,
  "users": Users,
};

export type Bridges = {
  id: string;
  internal_channel: string;
  status: BridgeStatus;
  external_channel: string;
};

export type Counting = {
  id: string;
  guildId: string;
  channelId: string;
  type: CountingType;
  currentNumber: number;
  currentStakeholders: string | null;
  currentNumberMessageID: string;
  currentNumberMessageDate: Date;
  currentNumberMessageAuthor: string;
  lastNumber: number | null;
  lastNumberMessageID: string | null;
  lastNumberMessageDate: Date | null;
  lastNumberMessageAuthor: string | null;
  lastNumberBrokenBy: string | null;
  lastNumberBrokenDate: Date | null;
  recordNumber: number;
  recordNumberMessageID: string | null;
  recordNumberMessageDate: Date | null;
  recordNumberMessageAuthor: string | null;
  recordNumberBrokenBy: string | null;
  recordNumberBrokenDate: Date | null;
};

export type DiscordGuilds = {
  id: string;
  isBanned: boolean;
  lastDramaAt: Date | null;
  dramaReason: string | null;
  maxOnlineMembers: number | null;
  channelSanctuary: string | null;
  channelGeneral: string | null;
  channelTripsit: string | null;
  channelTripsitmeta: string | null;
  channelApplications: string | null;
  roleNeedshelp: string | null;
  roleTripsitter: string | null;
  roleHelper: string | null;
  roleTechhelp: string | null;
  removedAt: Date | null;
  joinedAt: Date;
  createdAt: Date;
  partner: boolean;
  supporter: boolean;
  premium_role_ids: string | null;
};

export type DrugArticles = {
  id: string;
  drugId: string;
  url: string;
  title: string;
  description: string | null;
  publishedAt: Date | null;
  lastModifiedBy: string;
  lastModifiedAt: Date;
  postedBy: string;
  createdAt: Date;
};

export type DrugCategories = {
  id: string;
  name: string;
  type: DrugCategoryType;
  createdAt: Date;
};

export type DrugCategoryDrugs = {
  id: string;
  drugId: string;
  drugCategoryId: string;
};

export type DrugNames = {
  id: string;
  drugId: string;
  name: string;
  isDefault: boolean;
  type: DrugNameType;
};

export type DrugVariantRoas = {
  id: string;
  drugVariantId: string;
  route: DrugRoa;
  doseThreshold: number | null;
  doseLight: number | null;
  doseCommon: number | null;
  doseStrong: number | null;
  doseHeavy: number | null;
  doseWarning: string | null;
  durationTotalMin: number | null;
  durationTotalMax: number | null;
  durationOnsetMin: number | null;
  durationOnsetMax: number | null;
  durationComeupMin: number | null;
  durationComeupMax: number | null;
  durationPeakMin: number | null;
  durationPeakMax: number | null;
  durationOffsetMin: number | null;
  durationOffsetMax: number | null;
  durationAfterEffectsMin: number | null;
  durationAfterEffectsMax: number | null;
};

export type DrugVariants = {
  id: string;
  drugId: string;
  name: string | null;
  description: string | null;
  default: boolean;
  lastUpdatedBy: string;
  updatedAt: Date;
  createdAt: Date;
};

export type Drugs = {
  id: string;
  summary: string | null;
  psychonautWikiUrl: string | null;
  errowidExperiencesUrl: string | null;
  lastUpdatedBy: string;
  updatedAt: Date;
  createdAt: Date;
};

export type KnexMigrations = {
  id: number;
  name: string | null;
  batch: number | null;
  migration_time: Date | null;
};

export type KnexMigrationsLock = {
  index: number;
  is_locked: number | null;
};

export type Personas = {
  id: string;
  userId: string;
  name: string;
  class: string;
  species: string;
  guild: string;
  tokens: number;
  tripTokenMultiplier: number;
  lastQuest: Date | null;
  lastDungeon: Date | null;
  lastRaid: Date | null;
  createdAt: Date;
};

export type ReactionRoles = {
  id: string;
  guildId: string;
  channelId: string;
  messageId: string;
  reactionId: string;
  roleId: string;
  createdAt: Date;
};

export type ReactionRoles = {
  id: string;
  type: ReactionRoleType;
  name: string;
  guildId: string;
  reaction_id: string | null;
  message_id: string | null;
};

export type RpgInventory = {
  id: string;
  personaId: string;
  label: string;
  value: string;
  description: string;
  quantity: number;
  weight: number;
  cost: number;
  equipped: boolean;
  consumable: boolean;
  effect: string;
  effectValue: string;
  emoji: string;
  createdAt: Date;
};

export type Rss = {
  id: string;
  guildId: string;
  url: string;
  lastPostId: string;
  destination: string;
};

export type UserActions = {
  id: string;
  userId: string;
  type: UserActionType;
  banEvasionRelatedUser: string | null;
  description: string | null;
  internalNote: string;
  expiresAt: Date | null;
  repealedBy: string | null;
  repealedAt: Date | null;
  createdBy: string;
  createdAt: Date;
};

export type UserDrugDoses = {
  id: string;
  userId: string;
  drugId: string;
  route: DrugRoa;
  dose: number;
  units: DrugMassUnit;
  createdAt: Date;
};

export type UserExperience = {
  id: string;
  userId: string;
  category: ExperienceCategory;
  level: number;
  levelPoints: number;
  totalPoints: number;
  lastMessageAt: Date;
  lastMessageChannel: string;
  createdAt: Date;
  type: ExperienceType;
};

export type UserReminders = {
  id: string;
  userId: string;
  reminderText: string | null;
  triggerAt: Date;
  createdAt: Date;
};

export type UserTickets = {
  id: string;
  userId: string;
  description: string;
  threadId: string;
  metaThreadId: string | null;
  firstMessageId: string;
  type: TicketType;
  status: TicketStatus;
  closedBy: string | null;
  closedAt: Date | null;
  reopenedBy: string | null;
  reopenedAt: Date | null;
  archivedAt: Date;
  deletedAt: Date;
  createdAt: Date;
};

export type Users = {
  id: string;
  email: string | null;
  username: string | null;
  passwordHash: string | null;
  discordId: string | null;
  ircId: string | null;
  matrixId: string | null;
  timezone: string | null;
  birthday: Date | null;
  roles: string | null;
  mindsetRole: string | null;
  mindsetRoleExpiresAt: Date | null;
  karmaGiven: number;
  karmaReceived: number;
  sparklePoints: number;
  movePoints: number;
  empathyPoints: number;
  discordBotBan: boolean;
  ticketBan: boolean;
  lastSeenAt: Date;
  lastSeenIn: string | null;
  joinedAt: Date;
  removedAt: Date | null;
  modThreadId: string | null;
  helperRoleBan: boolean;
  contributorRoleBan: boolean;
  lastfmUsername: string | null;
  partner: boolean | null;
  supporter: boolean | null;
  moodleId: string | null;
};

