#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../games/ind-brain-progression';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
