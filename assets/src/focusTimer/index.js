import * as event from './events.js';
import * as act from './actions.js';
import { state } from './state.js';

act.timeDisplay(state.minutes, state.seconds);
