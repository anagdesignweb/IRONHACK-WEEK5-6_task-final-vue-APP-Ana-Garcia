<template>
    <div class="p-3 is-flex is-justify-content-space-between">
        <div>
            <div class="mr-4 mt-2">Hola, <span class="color-pink-text">{{ authStore.user.email }}</span></div>
        </div>
        <button @click="authStore.logout()" class="button is-secundary">
            <strong>Cerrar sesion</strong>
        </button>
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