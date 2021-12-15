import {
  Body,
  Controller,
  Get,
  Headers,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { IAuthLogonRequest } from './auth.models';

import * as AUTH_LOGON_MOCK from './data/auth-logon.json';
import * as AUTH_LOGON2_MOCK from './data/auth-logon2.json';
import * as AUTH_USER_INFO_MOCK from './data/auth-user-info.json';
import * as AUTH_USER_INFO2_MOCK from './data/auth-user-info2.json';

@Controller('v1/auth')
export class AuthV1Controller {
  @Post('logon')
  public async logon(@Body() req: IAuthLogonRequest, @Res() res: Response) {
    if (req.login == 'vasya@beeline.ru') {
      return res.status(HttpStatus.OK).json(AUTH_LOGON_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(AUTH_LOGON2_MOCK);
    }
  }

  @Get('user-info')
  public async loadUserInfo(@Headers() headers, @Res() res: Response) {
    if (
      (headers['authorization'] as string) ==
      'Bearer ahsdfhshdfhadshfhashfashdfhashdfasdfhh'
    ) {
      return res.status(HttpStatus.OK).json(AUTH_USER_INFO_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(AUTH_USER_INFO2_MOCK);
    }
  }
}
