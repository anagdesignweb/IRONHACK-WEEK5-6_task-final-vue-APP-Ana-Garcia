<template>

<div class="section">
        <div class="container">

                <div class="title">Hola {{authStore.user.name}}</div>
                <button @click="authStore.logout()" class="button is-danger">Cerrar sesion</button>
                <!-- Poner un formulario con un textarea que nos permita poner mensajes al enviar el formulario -->
                <!-- Crear otro store de posts -->

        </div>

    <div class="container backg-color-blue">
        <div>
            <div class="column is-one-quarter">
                <h1>Hola {{route.params.id}}</h1>
            </div>
            <div class="column backg-color-yellow">
                Aqui iran las cards 
            </div>
        </div>
    </div>
</div>
</template>


<script setup>
import { useRoute } from 'vue-router'
import { useAuthStore } from '../store/auth'

const route = useRoute();
const authStore = useAuthStore();


</script>


<style scoped>

</style>