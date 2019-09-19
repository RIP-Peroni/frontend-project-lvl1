#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../ind-brain-gcd';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
