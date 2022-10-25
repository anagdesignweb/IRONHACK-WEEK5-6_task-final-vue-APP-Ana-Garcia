<template>

    <div class="container m-3">
        <nav class=" is-flex is-justify-content-space-between">
            <div>
                <div>
                    <router-link :to="{ name: 'login' }" class="button is-secundary mr-2">Login</router-link>
                    <router-link :to="{ name: 'register' }" class="button is-secundary mr-2">Register</router-link>
                    <router-link :to="{ name: 'home'}" class="button is-secundary mr-2">Home</router-link>
                </div>
            </div>
            <div>
                <div class="buttons">
                    <div class="mr-4">Hola {{ authStore.user.email }}</div>
                    <button @click="authStore.logout()" class="button is-secundary is-danger">
                        <strong>Cerrar sesion</strong>
                    </button>
                </div>
            </div>
        </nav>
    </div>

</template>


<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();


</script>


<style scoped>

</style>