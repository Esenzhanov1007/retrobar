import { ReportVideo } from '../types/types';

export const convertedDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'});
};

export const groupVideoReportByDate = (reports: ReportVideo[]) => {
    const result = reports.reduce((acc, report) => {
        const date = report.date;
        //@ts-ignore
        const dateReports = acc[date] || [];
        return {
            ...acc,
            [date]: [...dateReports, report]
        }
    }, {});
    return Object.entries(result);
}
