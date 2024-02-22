import axios from 'axios';

export default {
    install: (app, options) => {

        const api = axios.create({
            baseURL: options.baseURL,
            headers: {
                "Content-type": "application/json",
            }
        });

        app.config.globalProperties.$api = api;
    },
};