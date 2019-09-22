#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../games/ind-brain-even';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
