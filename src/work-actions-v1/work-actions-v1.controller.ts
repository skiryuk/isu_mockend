import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { ISendDataRequest } from './work-actions-v1.models';

@Controller('v1/work-actions')
export class WorkActionsV1Controller {
  @Post('send')
  public async send(@Body() req: ISendDataRequest, @Res() res: Response) {
    return res.status(HttpStatus.NO_CONTENT).json();
  }
}
