import {imgWeather} from './imgWeather'

const listCodeWeather = {
    200: {
        img: '27',
        ru: 'гроза с небольшим дождем',
        en: 'thunderstorm with light rain'
    },
    201: {
        img: '36',
        ru: 'гроза с дождем',
        en: 'thunderstorm with rain\t'
    },
    202: {
        img: '8',
        ru: 'гроза с проливным дождем',
        en: 'thunderstorm with heavy rain\t'
    },
    210: {
        img: '26',
        ru: 'легкая гроза',
        en: 'light thunderstorm\t'
    },
    211: {
        img: '26',
        ru: 'гроза',
        en: 'thunderstorm'
    },
    212: {
        img: '8',
        ru: 'сильная гроза',
        en: 'heavy thunderstorm'
    },
    221: {
        img: '8',
        ru: 'рваная гроза',
        en: 'ragged thunderstorm'
    },
    230: {
        img: '27',
        ru: 'гроза с легкой моросью',
        en: 'thunderstorm with light drizzle'
    },
    231: {
        img: '27',
        ru: 'гроза с моросящим дождем',
        en: 'thunderstorm with drizzle'
    },
    232: {
        img: '36',
        ru: 'гроза с сильным моросящим дождем',
        en: 'thunderstorm with heavy drizzle'
    },

    300: {
        img: '32',
        ru: 'легкая изморось',
        en: 'light intensity drizzle'
    },
    301: {
        img: '32',
        ru: 'изморось',
        en: 'drizzle'
    },
    302: {
        img: '29',
        ru: 'сильная морось',
        en: 'heavy intensity drizzle'
    },
    310: {
        img: '14',
        ru: 'легкий моросящий дождь',
        en: 'light intensity drizzle rain'
    },
    311: {
        img: '28',
        ru: 'моросящий дождь',
        en: 'drizzle rain'
    },
    312: {
        img: '29',
        ru: 'сильный моросящий дождь',
        en: 'heavy intensity drizzle rain'
    },
    313: {
        img: '34',
        ru: 'дождь и изморось',
        en: 'shower rain and drizzle'
    },
    314: {
        img: '34',
        ru: 'сильный ливень и изморось',
        en: 'heavy shower rain and drizzle'
    },
    321: {
        img: '32',
        ru: 'моросящий дождь',
        en: 'shower drizzle'
    },

    500: {
        img: '14',
        ru: 'легкий дождь',
        en: 'light rain'
    },
    501: {
        img: '15',
        ru: 'умеренный дождь',
        en: 'moderate rain'
    },
    502: {
        img: '16',
        ru: 'сильный дождь',
        en: 'heavy intensity rain'
    },
    503: {
        img: '1',
        ru: 'очень сильный дождь',
        en: 'very heavy rain'
    },
    504: {
        img: '1',
        ru: 'очень сильный дождь',
        en: 'extreme rain'
    },
    511: {
        img: '23',
        ru: 'ледяной дождь',
        en: 'freezing rain'
    },
    520: {
        img: '14',
        ru: 'интенсивный дождь',
        en: 'light intensity shower rain'
    },
    521: {
        img: '15',
        ru: 'дождь',
        en: 'shower rain'
    },
    522: {
        img: '9',
        ru: 'сильный дождь',
        en: 'heavy intensity shower rain'
    },
    531: {
        img: '1',
        ru: 'рваный дождь',
        en: 'ragged shower rain'
    },

    600: {
        img: '12',
        ru: 'небольшой снег',
        en: 'light snow'
    },
    601: {
        img: '35',
        ru: 'снег',
        en: 'snow'
    },
    602: {
        img: '17',
        ru: 'снегопад',
        en: 'heavy snow'
    },
    611: {
        img: '3',
        ru: 'мокрый снег',
        en: 'sleet'
    },
    612: {
        img: '33',
        ru: 'небольшой мокрый снег',
        en: 'light shower sleet'
    },
    613: {
        img: '24',
        ru: 'мокрый снег',
        en: 'shower sleet'
    },
    615: {
        img: '24',
        ru: 'небольшой дождь и снег',
        en: 'light rain and snow'
    },
    616: {
        img: '24',
        ru: 'дождь и снег',
        en: 'rain and snow'
    },
    620: {
        img: '32',
        ru: 'легкий мокрый снег',
        en: 'light shower snow'
    },
    621: {
        img: '33',
        ru: 'мокрый снег',
        en: 'shower snow'
    },
    622: {
        img: '2',
        ru: 'сильный снегопад',
        en: 'heavy shower snow'
    },

    701: {
        img: '37',
        ru: 'легкое задымление',
        en: 'mist'
    },
    711: {
        img: '37',
        ru: 'смог',
        en: 'smoke'
    },
    721: {
        img: '37',
        ru: 'мгла',
        en: 'haze'
    },
    731: {
        img: '37',
        ru: 'Легкая пыльная буря',
        en: 'dust whirls'
    },
    741: {
        img: '20',
        ru: 'туман',
        en: 'fog'
    },
    751: {
        img: '37',
        ru: 'песок буря',
        en: 'sand'
    },
    761: {
        img: '37',
        ru: 'пыльная буря',
        en: 'dust'
    },
    762: {
        img: '37',
        ru: 'осадки вулканический пепел',
        en: 'volcanic ash'
    },
    771: {
        img: '21',
        ru: 'шквалы ветра',
        en: 'squalls'
    },
    781: {
        img: '37',
        ru: 'торнадо',
        en: 'tornado'
    },

    800: {
        img: '7',
        ru: 'ясное небо',
        en: 'clear sky'
    },
    801: {
        img: '30',
        ru: 'легкая облачность',
        en: 'few clouds: 11-25%'
    },
    802: {
        img: '19',
        ru: 'средняя облачность',
        en: 'scattered clouds: 25-50%'
    },
    803: {
        img: '31',
        ru: 'сильная облачность',
        en: 'broken clouds: 51-84%'
    },
    804: {
        img: '5',
        ru: 'очень сильная облачность',
        en: 'overcast clouds: 85-100%'
    },
};


export const getInfoWeather = (code, date, language = 'ru') => {
    let d = new Date(date * 1000).getUTCHours();
    if (code){
        return {
            img: d >= 6 && d < 21 ? imgWeather['d']['d' + listCodeWeather[code]['img']] : imgWeather['n']['n' + listCodeWeather[code]['img']],
            description: listCodeWeather[code][language]
        }
    }else {
        return {
            img: imgWeather['d']['d7'],
            description: ''
        }
    }

};


