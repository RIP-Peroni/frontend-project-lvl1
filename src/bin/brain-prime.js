#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../ind-brain-prime';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
