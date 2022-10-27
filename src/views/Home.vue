<template>
    <div>
        <div class="container">
            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{ name: 'login' }">
                        Ir a Login
                    </router-link>
                </div>
            </article>
            <div v-else>

                <div class="section container backg-color-blue">
                    <EscribirPost />
                </div>
                <div class="section container backg-color-yellow">
                    <router-view></router-view>
                </div>

            </div>
        </div>
    </div>

</template>


<script setup>
import { useRoute } from 'vue-router'
import EscribirPost from '../components/EscribirPost.vue';
import { useAuthStore } from '../store/auth';


const route = useRoute();
const authStore = useAuthStore();



</script>


<style scoped>

</style>