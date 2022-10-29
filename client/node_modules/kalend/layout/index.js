"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME_FORMAT = exports.WEEKDAY_START = exports.CALENDAR_NAVIGATION_DIRECTION = exports.EVENT_TYPE = exports.CALENDAR_VIEW = void 0;
const main_1 = __importDefault(require("./views/main"));
var CALENDAR_VIEW;
(function (CALENDAR_VIEW) {
    CALENDAR_VIEW["AGENDA"] = "agenda";
    CALENDAR_VIEW["WEEK"] = "week";
    CALENDAR_VIEW["DAY"] = "day";
    CALENDAR_VIEW["THREE_DAYS"] = "threeDays";
    CALENDAR_VIEW["MONTH"] = "month";
})(CALENDAR_VIEW = exports.CALENDAR_VIEW || (exports.CALENDAR_VIEW = {}));
var EVENT_TYPE;
(function (EVENT_TYPE) {
    EVENT_TYPE["NORMAL"] = "normal";
    EVENT_TYPE["MONTH"] = "month";
    EVENT_TYPE["AGENDA"] = "agenda";
    EVENT_TYPE["HEADER"] = "header";
    EVENT_TYPE["SHOW_MORE_MONTH"] = "showMoreMonth";
})(EVENT_TYPE = exports.EVENT_TYPE || (exports.EVENT_TYPE = {}));
var CALENDAR_NAVIGATION_DIRECTION;
(function (CALENDAR_NAVIGATION_DIRECTION) {
    CALENDAR_NAVIGATION_DIRECTION["FORWARD"] = "forward";
    CALENDAR_NAVIGATION_DIRECTION["BACKWARDS"] = "backwards";
    CALENDAR_NAVIGATION_DIRECTION["TODAY"] = "today";
})(CALENDAR_NAVIGATION_DIRECTION = exports.CALENDAR_NAVIGATION_DIRECTION || (exports.CALENDAR_NAVIGATION_DIRECTION = {}));
var WEEKDAY_START;
(function (WEEKDAY_START) {
    WEEKDAY_START["MONDAY"] = "MONDAY";
    WEEKDAY_START["SUNDAY"] = "SUNDAY";
    WEEKDAY_START["UNKNOWN"] = "UNKNOWN";
})(WEEKDAY_START = exports.WEEKDAY_START || (exports.WEEKDAY_START = {}));
var TIME_FORMAT;
(function (TIME_FORMAT) {
    TIME_FORMAT["H_24"] = "24";
    TIME_FORMAT["H_12"] = "12";
})(TIME_FORMAT = exports.TIME_FORMAT || (exports.TIME_FORMAT = {}));
exports.default = main_1.default;
