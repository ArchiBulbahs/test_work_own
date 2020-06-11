const nameDay = {
    0: {
        short: {
            ru: 'ВС',
            en: 'Sun'
        },
        full: {
            ru: 'Воскресенье',
            en: 'Sunday'
        }
    },
    1: {
        short: {
            ru: 'ПН',
            en: 'Mon'
        },
        full: {
            ru: 'Понедельник',
            en: 'Monday'
        }
    },
    2: {
        short: {
            ru: 'ВТ',
            en: 'Tue'
        },
        full: {
            ru: 'Вторник',
            en: 'Tuesday'
        }
    },
    3: {
        short: {
            ru: 'СР',
            en: 'Wed'
        },
        full: {
            ru: 'Среда',
            en: 'Wednesday'
        }
    },
    4: {
        short: {
            ru: 'ЧТ',
            en: 'Thu'
        },
        full: {
            ru: 'Четверг',
            en: 'Thursday'
        }
    },
    5: {
        short: {
            ru: 'ПТ',
            en: 'Fri'
        },
        full: {
            ru: 'Пятница',
            en: 'Friday'
        }
    },
    6: {
        short: {
            ru: 'СБ',
            en: 'Sat'
        },
        full: {
            ru: 'Суббота',
            en: 'Saturday'
        }
    },

};

const nameMonth = {
    0: {
        ru: 'Января',
        en: 'January'
    },
    1: {
        ru: 'Февраля',
        en: 'February'
    },
    2: {
        ru: 'Марта',
        en: 'March'
    },
    3: {
        ru: 'Апреля',
        en: 'April'
    },
    4: {
        ru: 'Мая',
        en: 'May'
    },
    5: {
        ru: 'Июня',
        en: 'June'
    },
    6: {
        ru: 'Июля',
        en: 'July'
    },
    7: {
        ru: 'Августа',
        en: 'August'
    },
    8: {
        ru: 'Сентября',
        en: 'September'
    },
    9: {
        ru: 'Октября',
        en: 'October'
    },
    10: {
        ru: 'Ноября',
        en: 'November'
    },
    11: {
        ru: 'Декабря',
        en: 'December'
    }
};

export const nameTimeDay = {
    0: {
        ru: 'Сейчас',
        en: 'Now'
    },
    6: {
        ru: 'Утром', // 6
        en: 'In the morning'
    },
    12: {
        ru: 'Днем', // 12
        en: 'In the afternoon'
    },
    18: {
        ru: 'Вечером', // 18
        en: 'In the evening'
    },
    24: {
        ru: 'Ночью', //0
        en: 'At night'
    },
    30: {
        ru: 'Завтра утром', // 6
        en: 'Tomorrow morning'
    },
    36: {
        ru: 'Завтра днем', // 12
        en: 'Tomorrow afternoon'
    },
    42: {
        ru: 'Завтра вечером', // 12
        en: 'Tomorrow night'
    },

};

export const getNameDay = (day, language = 'ru', format = 'short') => {
    return nameDay[day][format][language];
};
export const getNameMonth = (month, language = 'ru') => {
    return nameMonth[month][language];
};
export const getFormatDate = (date, language = 'ru') => {
    if (language === 'ru') {
        return `${date.getUTCDate()} ${getNameMonth(date.getUTCMonth(), language)}`
    } else {
        return `${getNameMonth(date.getUTCMonth(), language)} ${date.getUTCDate()}th`
    }
};
export const getFormatTime = (date) => {
    let hours = date.getUTCHours() < 10 ? `0${date.getUTCHours()}` : date.getUTCHours();
    let minutes = date.getUTCMinutes() < 10 ? `0${date.getUTCMinutes()}` : date.getUTCMinutes();

    return `${hours}:${minutes}`;
};
export const getNameTimeDay = (timeDay, language = 'ru') => {
    return nameTimeDay[timeDay][language];
};