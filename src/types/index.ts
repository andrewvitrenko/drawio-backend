import { User as DbUser } from '@prisma/client';

export type SecurityFields = 'password' | 'refreshTokens';

export type User = Omit<DbUser, SecurityFields>;
