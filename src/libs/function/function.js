const nameDirection = {
    'n': {
        ru: 'C',
        en: 'N'
    },
    'ne': {
        ru: 'СВ',
        en: 'NE'
    },
    'e': {
        ru: 'В',
        en: 'E'
    },
    'se': {
        ru: 'ЮВ',
        en: 'SE'
    },
    's': {
        ru: 'Ю',
        en: 'S'
    },
    'sw': {
        ru: 'ЮЗ',
        en: 'SW'
    },
    'w': {
        ru: 'З',
        en: 'W'
    },
    'nw': {
        ru: 'СЗ',
        en: 'NW'
    }
}
export const degToDirection = (deg, language = 'ru') => {
    if (deg > 337.5 || deg <= 22.5) {
        return nameDirection['n'][language]
    }
    if (deg > 22.5 || deg <= 67.5) {
        return nameDirection['ne'][language]
    }
    if (deg > 67.5 || deg <= 112.5) {
        return nameDirection['e'][language]
    }
    if (deg > 112.5 || deg <= 157.5) {
        return nameDirection['se'][language]
    }
    if (deg > 157.5 || deg <= 202.5) {
        return nameDirection['s'][language]
    }
    if (deg > 202.5 || deg <= 247.5) {
        return nameDirection['sw'][language]
    }
    if (deg > 247.5 || deg <= 292.5) {
        return nameDirection['w'][language]
    }
    if (deg > 292.5 || deg <= 337.5) {
        return nameDirection['nw'][language]
    }
}