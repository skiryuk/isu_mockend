import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';

import * as SYNC_EMPTY_RESULT from './data/sync_empty_result.json';
import * as SYNC_COWORKERS from './data/sync_coworkers.json';
import * as SYNC_COWORKER_POWERS from './data/sync_coworker_powers.json';
import * as SYNC_VIOLATION_GROUPS from './data/sync_violation_groups.json';
import * as SYNC_VIOLATIONS from './data/sync_violations.json';
import * as SYNC_WORK_ACTIONS from './data/sync_work_actions.json';
import * as SYNC_VIOLATION_FACTS from './data/sync_violation_facts.json';
import * as SYNC_WORK_ACTION_FACTS from './data/sync_work_action_facts.json';

@Controller('v1/syncs')
export class SyncV1Controller {
  @Get(':revNum/coworkers')
  public async syncCoworkers(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_COWORKERS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }

  @Get(':revNum/coworker-powers')
  public async syncCoworkerPowers(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_COWORKER_POWERS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }

  @Get(':revNum/violation-groups')
  public async syncViolationGroups(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_VIOLATION_GROUPS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }

  @Get(':revNum/violations')
  public async syncViolations(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_VIOLATIONS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }

  @Get(':revNum/work-actions')
  public async syncWorkActions(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_WORK_ACTIONS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }

  @Get(':revNum/violation-facts')
  public async syncViolationFacts(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_VIOLATION_FACTS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }

  @Get(':revNum/work-action-facts')
  public async syncWorkActionFacts(
    @Param('revNum') revNum: number,
    @Res() res: Response,
  ) {
    if (revNum == 0) {
      return res.status(HttpStatus.OK).json(SYNC_WORK_ACTION_FACTS);
    } else {
      return res.status(HttpStatus.OK).json(SYNC_EMPTY_RESULT);
    }
  }
}
