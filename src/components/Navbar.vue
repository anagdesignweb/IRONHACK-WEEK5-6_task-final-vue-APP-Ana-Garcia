<template>

    <div class="container m-3">
        <nav class=" is-flex is-justify-content-space-between">
            <div>
                <div>
                    <div class="mr-4">Hola,  {{ authStore.user.email }}</div>
                </div>
            </div>
            <div>
                <div class="buttons">
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