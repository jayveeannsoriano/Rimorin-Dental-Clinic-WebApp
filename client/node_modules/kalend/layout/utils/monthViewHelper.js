"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthRows = exports.getMaxEventsVisible = void 0;
/**
 * Get how many events can fit in one day column in month view
 * @param height
 */
const getMaxEventsVisible = (height) => {
    const baseHeight = parseInt((height / 6 - 22).toString());
    // number of events
    const baseFit = (baseHeight - 15) / 17;
    // number of events with offset top
    const baseFitWithOffset = (baseHeight - 15) / (17 + baseFit);
    const result = parseInt(baseFitWithOffset.toString());
    return result;
};
exports.getMaxEventsVisible = getMaxEventsVisible;
/**
 * Get row of days in month view
 * @param calendarDays
 */
const getMonthRows = (calendarDays) => {
    const calendarDaysRows = [];
    let tempArray = [];
    calendarDays.forEach((item, i) => {
        const index = i + 1;
        if (index % 7 === 0) {
            tempArray.push(item); // TODO REMOVE
            calendarDaysRows.push(tempArray);
            tempArray = [];
        }
        else {
            tempArray.push(item);
        }
    });
    return calendarDaysRows;
};
exports.getMonthRows = getMonthRows;
