import {store} from 'react-notifications-component';

const settings = {
    insert: 'top',
    container: 'top-right',
    animationIn: ['animated', 'fadeIn'],
    animationOut: ['animated', 'fadeOut'],
    dismiss: {
        duration: 3000,
        pauseOnHover: true,
        onScreen: true
    },
};
export const type_notification = {
    success: 'success',
    danger: 'danger',
    info: 'info',
    default: 'default',
    warning: 'warning'
};

export const addNotification = (title, message, type) => {
    store.addNotification({
        ...settings,
        title: title,
        message: message,
        type: type,
    });
};