export interface TokenPayload {
  userId: number;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export interface RefreshTokenPayload extends TokenPayload {
  refreshToken: string;
}
