"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEventHeight = exports.HEADER_EVENT_HEIGHT = exports.MONTH_EVENT_HEIGHT = exports.SEVEN_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.SHOW_TIME_THRESHOLD = exports.SCROLLBAR_WIDTH = exports.EVENT_MIN_HEIGHT = exports.CALENDAR_OFFSET_LEFT = exports.UTC_TIMEZONE = exports.FLOATING_DATETIME = exports.EVENT_TABLE_DELIMITER_SPACE = void 0;
// constants
exports.EVENT_TABLE_DELIMITER_SPACE = 8;
exports.FLOATING_DATETIME = 'floating'; // fixed datetime without timezone
exports.UTC_TIMEZONE = 'UTC';
exports.CALENDAR_OFFSET_LEFT = 40;
exports.EVENT_MIN_HEIGHT = 8;
exports.SCROLLBAR_WIDTH = 15;
exports.SHOW_TIME_THRESHOLD = 60;
exports.ONE_DAY = 1;
exports.THREE_DAYS = 3;
exports.SEVEN_DAYS = 7;
exports.MONTH_EVENT_HEIGHT = 17;
exports.HEADER_EVENT_HEIGHT = 20;
const getEventHeight = (isHeaderEvents) => {
    if (isHeaderEvents) {
        return exports.HEADER_EVENT_HEIGHT;
    }
    return exports.MONTH_EVENT_HEIGHT;
};
exports.getEventHeight = getEventHeight;
