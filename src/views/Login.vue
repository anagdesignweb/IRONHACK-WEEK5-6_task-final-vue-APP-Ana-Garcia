<template>

    <section class="hero is-fullheight backg-color-pink">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form class="box" @submit.prevent="onSubmit">
                            <div class="field has-text-centered">
                            <h1>Login</h1> 
                            </div>
                            <div class="field">
                                <label class="label">Email</label>
                                <div class="control">
                                    <input v-model="email" class="input" type="email" placeholder="yourname@gmail.com">
                                </div>
                            </div>
                            <div class="field">
                                <label class="label">Password</label>
                                <div class="control">
                                    <input v-model="password" class="input" type="password" placeholder="******" required>
                                </div>
                            </div>
                            <div class="field">
                                <button class="button is-inline-block is-success" type="submit">Login</button>
                            </div>
                            <div class="field">
                                <p>¿Aun no estas registrado? <router-link :to="{name: 'register'}">Register
                                    </router-link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>


<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();
const name = ref('');
const email = ref('');
const password = ref('');

const onSubmit = () => {
    console.log('formulario enviado', name.value, email.value, password.value)
    authStore.login(name.value, email.value);
    // Nos redirige al home
    router.push({name: 'user', params:{id:name.value}})

};

</script>


<style scoped>

</style>