import { Module } from '@nestjs/common';
import { WorkActionsV1Controller } from './work-actions-v1.controller';

@Module({
  controllers: [WorkActionsV1Controller]
})
export class WorkActionsV1Module {}
