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
// import { newTask } from '../api'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
// console.log(supabase);

const authStore = useAuthStore();



const title = ref('');
const description = ref('');


const onSubmit = () => {

    console.log(title.value, description.value, authStore.user.name)

    nuevoTask(authStore.user.name);
    limpiar();
};

const nuevoTask = async (id) => {
    const response = await supabase.from('task').insert({
     user_id: id,
     title:title.value,
     description: description.value,
    })
    console.log(response);
}


const limpiar = () => {

    title.value = '';
    description.value = '';

};



</script>


<style scoped>

</style>