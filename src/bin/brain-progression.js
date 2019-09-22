#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../ind-brain-progression';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
