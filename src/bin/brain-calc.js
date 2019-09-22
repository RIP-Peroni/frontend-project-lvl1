#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../games/ind-brain-calc';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
