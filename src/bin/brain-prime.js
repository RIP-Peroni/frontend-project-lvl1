#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../games/ind-brain-prime';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
