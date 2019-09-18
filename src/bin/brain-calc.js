#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../ind-brain-calc';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
