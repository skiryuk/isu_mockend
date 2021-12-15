import { Module } from '@nestjs/common';
import { AgentsV1Controller } from './agents-v1.controller';

@Module({
  controllers: [AgentsV1Controller],
})
export class AgentsV1Module {}
