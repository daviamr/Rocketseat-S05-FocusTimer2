import * as focusTimer from './focusTimer/index.js';
import * as card from './focusTimer/cards/actions.js';
import { toggleMode, handlerMode } from "./lightmode.js";

//light-mode
toggleMode.addEventListener('click', handlerMode);
