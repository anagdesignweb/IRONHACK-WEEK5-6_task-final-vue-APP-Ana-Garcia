import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        isAuth: false,
        user: {
            name: '',
            email: ''
        }
    }),
    actions: {
       login(name, email){
        this.isAuth = true;
        this.user.name = name;
        this.user.email = email;
       },
       logout(){
        this.isAuth = false;
        this.user.name = '';
        this.user.email = '';
       }
    },
    persist: {
        // Nos activa la persistencia del store
        enabled: true,
        strategies: [
          {
            // Key del store
            key: 'auth',
            // donde guarda el store
            storage: localStorage,
          },
        ],
      },
})