import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info, ctx, status) {
    if (info instanceof TokenExpiredError) {
      throw new ForbiddenException('Token is expired');
    }

    if (info instanceof JsonWebTokenError) {
      throw new UnauthorizedException('Invalid token');
    }

    return super.handleRequest(err, user, info, ctx, status);
  }
}

export const UseJwtGuard = () => UseGuards(JwtAuthGuard);
