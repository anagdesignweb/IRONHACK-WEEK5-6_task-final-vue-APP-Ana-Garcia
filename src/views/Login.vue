<template>

    <h1 class="title is-3">Login</h1>
    <p class="description m-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit</p>
    <form @submit.prevent="onSubmit()">
        <div class="field">
            <div class="control">
                <input v-model="form.email.content" class="input is-medium" type="email" placeholder="Email">
            </div>
        </div>

        <div class="field">
            <div class="control">
                <input v-model="form.password.content" class="input is-medium" type="password" placeholder="******"
                    required>
            </div>
        </div>
        <button class="button is-block is-primary is-fullwidth is-medium" type="submit">Submit</button>
        <br />
        <p>¿Aun no estas registrado? <router-link :to="{ name: 'register' }">Register
            </router-link>
            <font-awesome-icon class="ml-1" icon="fa-solid fa-user-secret" />
        </p>
    </form>


</template>


<script setup>

import { ref } from 'vue';
import { login } from '../api';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth'

const router = useRouter();
const authStore = useAuthStore();



const form = ref({
    email: {
        content: '',
        error: false
    },
    password: {
        content: '',
        error: false
    },
});

const onSubmit = async () => {
    console.log('login enviado');

    console.log(form.value.email.content)
    console.log(form.value.password.content)

    const id = await login(form.value.email.content, form.value.password.content);

    console.log(id);
    authStore.login(id, form.value.email.content);
    // Nos redirige al home
    console.log(authStore.user.name)
    router.push({ name: 'home' })
};




</script>


<style scoped>

</style>