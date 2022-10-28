<template>
    <div class="has-background-white">
        <div class="container">
            <Navbar />
        </div>

    </div>

    <section class="section">
        <div class="container">
            <article v-if="!authStore.isAuth" class="message is-danger">
                <div class="message-body">
                    Debes iniciar sesion para utilizar la aplicacion
                    <router-link :to="{ name: 'login' }">
                        Ir a Login
                    </router-link>
                </div>
            </article>

            <div class="columns" v-else>
                <div class="column is-4">
                    <EscribirPost />
                    <aside class="is-medium menu">
                        <p class="menu-label mt-4">categories</p>
                        <ul class="menu-list">
                            <li class="is-right">
                                <button class="button is-block is-white is-fullwidth is-medium mb-4"
                                    @click="cambiarVista('all')">All</button>
                            </li>
                            <li>
                                <button class="button is-block is-white is-fullwidth is-medium mb-4"
                                    @click="cambiarVista('to-do')">to-do</button>
                            </li>
                            <li>
                                <button class="button is-block is-white is-fullwidth is-medium mb-4"
                                    @click="cambiarVista('completadas')">Completed</button>
                            </li>
                        </ul>
                    </aside>
                </div>
                <div class="column is-8">
                    <div class="content is_medium">
                        <h3 class="title is-3">Tareas</h3>
                        <AllTasksComponent v-if="cambiarMenu == 'all'" v-for="task in tasksSupabase" :tarea="task" />

                        <TodoTask v-if="cambiarMenu == 'to-do'" v-for="task in tasksSupabase" :tarea="task" />

                        <CompletedTaskComponent v-if="cambiarMenu == 'completadas'" v-for="task in tasksSupabase"
                            :tarea="task" />
                    </div>                   
                </div>
            </div>
        </div>
    </section>



</template>


<script setup>

import EscribirPost from '../components/EscribirPost.vue';
import { useAuthStore } from '../store/auth';
import Navbar from '../components/Navbar.vue';
import TodoTask from '../components/TodoTask.vue';
import CompletedTaskComponent from '../components/CompletedTaskComponent.vue';
import AllTasksComponent from '../components/AllTasksComponent.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getTasks } from '../api'


const authStore = useAuthStore();

const tasksSupabase = ref([]);
const mostrar = ref(true);
const cambiarMenu = ref('all');


const cambiarVista = (vista) => {
    cambiarMenu.value = vista;
}


onMounted(async () => {
    const response = await getTasks();
    // console.log(response)
    // console.log(response.data[0])
    tasksSupabase.value = await response.data;
    // console.log(tasksSupabase.value)
});




</script>


<style scoped>

</style>