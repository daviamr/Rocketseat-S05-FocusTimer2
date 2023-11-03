import { state } from './state.js';
import { timeDisplay } from './actions.js';
import * as events from './events.js';


timeDisplay(state.minutes, state.seconds);