import { Module } from '@nestjs/common';
import { SyncV1Controller } from './sync-v1.controller';

@Module({
  controllers: [SyncV1Controller]
})
export class SyncV1Module {}
