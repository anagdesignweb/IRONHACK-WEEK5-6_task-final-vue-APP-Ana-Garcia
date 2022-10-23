<template>
    <div class="section">
        <div class="container">

            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{name: 'login'}">
                        Ir a Login
                    </router-link>
                </div>
            </article>
            <div v-else>

                <router-view></router-view>

            </div>
        </div>

    </div>

</template>


<script setup>

import { useAuthStore } from '../store/auth'

const authStore = useAuthStore();

</script>


<style scoped>

</style>