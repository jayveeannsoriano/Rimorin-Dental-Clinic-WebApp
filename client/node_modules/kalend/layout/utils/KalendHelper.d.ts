import { CALENDAR_VIEW, CalendarEvent, Config } from '../index';
export declare const getDaysNum: (calendarView: CALENDAR_VIEW) => number;
export declare const getCorrectWidth: (width: number, isMobile: boolean, selectedView: CALENDAR_VIEW) => number;
export declare const getEventDateTime: (event: CalendarEvent, config: Config) => {
    dateTimeStart: import("luxon").DateTime;
    dateTimeEnd: import("luxon").DateTime;
};
