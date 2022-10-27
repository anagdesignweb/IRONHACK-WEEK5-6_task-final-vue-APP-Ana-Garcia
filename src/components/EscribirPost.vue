<template>

    <div>
        <form @submit.prevent="onSubmit()">
            <div class="field">
                <label class="label">Agrega una nueva tarea:</label>
                <div class="control">
                    <input v-model="title" class="input" type="text" placeholder="Tarea">
                </div>
            </div>
            <div class="control">
                <textarea v-model="description" class="textarea" placeholder="Escribe un post"></textarea>
            </div>
            <div class="control">
                <button type="submit" class="mt-2 button is-info">Añadir</button>
            </div>
        </form>
    </div>
</template>


<script setup>

import { ref } from 'vue';
import { useAuthStore } from '../store/auth'
import { newTask } from '../api'

const authStore = useAuthStore();


const title = ref('');
const description = ref('');


const onSubmit = () => {

    console.log(title.value, description.value, authStore.user.name)

    newTask({
     user_id: authStore.user.name,
     title:title.value,
     description: description.value,
    });
    limpiar();
};

// const taska = {
//      user_id: authStore.user.name,
//      title:title.value,
//      description: description.value,
//     }


const limpiar = () => {

    title.value = '';
    description.value = '';

};



</script>


<style scoped>

</style>