#!/usr/bin/env node
import
{ gameRules, gameLogic }
  from '../games/ind-brain-gcd';
import engine from '../gameEngine';

engine(gameRules, gameLogic);
