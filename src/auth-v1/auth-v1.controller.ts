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
import * as AUTH_LOGON_400_ERR_MOCK from './data/auth_logon_400_err.json';
import * as AUTH_LOGON_401_ERR_MOCK from './data/auth_logon_401_err.json';
import * as AUTH_LOGON_403_ERR_MOCK from './data/auth_logon_403_err.json';
import * as AUTH_LOGON_404_ERR_MOCK from './data/auth_logon_404_err.json';
import * as AUTH_LOGON_422_ERR_MOCK from './data/auth_logon_422_err.json';
import * as AUTH_LOGON_500_ERR_MOCK from './data/auth_logon_500_err.json';
import * as AUTH_USER_INFO_MOCK from './data/auth-user-info.json';

@Controller('v1/auth')
export class AuthV1Controller {
  @Post('logon')
  public async logon(@Body() req: IAuthLogonRequest, @Res() res: Response) {
    if (req.login === '500@beeline.ru') {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(AUTH_LOGON_500_ERR_MOCK);
    } else if (req.login === '400@beeline.ru') {
      return res.status(HttpStatus.BAD_REQUEST).json(AUTH_LOGON_400_ERR_MOCK);
    } else if (req.login === '403@beeline.ru') {
      return res.status(HttpStatus.FORBIDDEN).json(AUTH_LOGON_403_ERR_MOCK);
    } else if (req.login === '404@beeline.ru') {
      return res.status(HttpStatus.NOT_FOUND).json(AUTH_LOGON_404_ERR_MOCK);
    } else if (req.login === '422@beeline.ru') {
      return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json(AUTH_LOGON_422_ERR_MOCK);
    } else {
      return res.status(HttpStatus.OK).json(AUTH_LOGON_MOCK);
    }
  }

  @Get('user-info')
  public async loadUserInfo(@Headers() headers, @Res() res: Response) {
    return res.status(HttpStatus.OK).json(AUTH_USER_INFO_MOCK);
  }
}
