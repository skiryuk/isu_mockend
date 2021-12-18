import { Module } from '@nestjs/common';
import { AgentsV1Module } from './agents-v1/agents-v1.module';
import { AuthV1Module } from './auth-v1/auth-v1.module';
import { SyncV1Module } from './sync-v1/sync-v1.module';
import { WorkActionsV1Module } from './work-actions-v1/work-actions-v1.module';

@Module({
  imports: [AgentsV1Module, AuthV1Module, SyncV1Module, WorkActionsV1Module],
  controllers: [],
})
export class AppModule {}
