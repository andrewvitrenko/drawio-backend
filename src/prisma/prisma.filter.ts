import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ConflictException,
  HttpException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Prisma } from '@prisma/client';

@Catch(Prisma?.PrismaClientKnownRequestError)
export class PrismaFilter extends BaseExceptionFilter {
  private errorCodeMapper: Record<string, HttpException> = {
    P2000: new BadRequestException(),
    P2002: new ConflictException(),
    P2003: new BadRequestException('Relation item does not exist'),
    P2006: new BadRequestException('Invalid field value'),
    P2020: new BadRequestException('Value out of range for type'),
    P2022: new BadRequestException('Field does not exist'),
    P2025: new NotFoundException(),
  };

  catch(error: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
    const Exception =
      this.errorCodeMapper[error.code] || new InternalServerErrorException();

    super.catch(Exception, host);
  }
}
