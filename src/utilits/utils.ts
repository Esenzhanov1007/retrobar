const convertedDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleString('ru', {day: 'numeric', month: 'long', year: 'numeric'});
};

export default convertedDate;