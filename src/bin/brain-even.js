#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../ind-brain-even';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
