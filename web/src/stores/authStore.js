import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state() {
        return {
            is_loggedin: false,
        }
    },
    actions: {
        login() {
            this.is_loggedin = true;
        },
        logout() {
            this.is_loggedin = false;
            },
    },
    persist: {
        enabled: true,
        strategies: [
            {storage: localStorage, paths:['is_loggedin']}
        ]
    }
})