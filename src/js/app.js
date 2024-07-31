import * as functions from "./files/functions.js";

import "../scss/style.scss";
import spoller from "./files/spoller.js";
import burger from "./files/burger.js";
import sliders from "./files/sliders.js";
import inputmask from "./files/inputmask.js";
import filters from "./files/filters.js";
import tab from "./files/tab.js";
import popup from "./files/popup.js";

functions.isWebp();
functions.mediaAdaptive();

burger();
spoller();
sliders();
inputmask();
filters();
tab();
popup();