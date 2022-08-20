import React, { useEffect, useState } from 'react';
import { Datepicker } from '../components';
export default {
    title: 'Example/Datepicker',
    component: Datepicker,
};
const PlaygroundContent = args => {
    const [data, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [endDates, setEndDates] = useState(new Date());
    useEffect(() => {
        const dataEnd = new Date(data);
        setEndDates(dataEnd);
        setEndDate(dataEnd.setDate(dataEnd.getDate() + 7));
    }, [data]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Datepicker, { label: "Data de in\u00EDcio", minDate: data, startDate: data, selected: data, onChange: (data) => {
                setDate(data);
            } }),
        React.createElement(Datepicker, { label: "Data de fim", loading: true, startDate: data, minDate: data, selected: endDates, maxDate: endDate, onChange: (data) => {
                setEndDates(data);
            } })));
};
export const Playground = PlaygroundContent.bind({});
//# sourceMappingURL=Datepicker.stories.js.map