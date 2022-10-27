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
                    <div class="tabs">
                    <ul>
                        <li class="is-active">
                            <button @click="cambiarVista('all')">All</button>
                        </li>
                        <li>
                            <button @click="cambiarVista('to-do')">to-do</button>
                        </li>
                        <li>
                            <button @click="cambiarVista('completadas')">Completadas</button>
                        </li>
                    </ul>
                </div>
                <H1>{{cambiarMenu}}</H1>
                
    <!-- <VisualizarPost v-if="cambiarMenu == 'all'" v-for="task in tasksSupabase" :key="task.id" :title="task.title" :description="task.description"
        :id="task.id" :completed="task.completed" :mostrar="mostrar" /> -->


    <AllTasksComponent v-if="cambiarMenu == 'all'" v-for="task in tasksSupabase" :tarea="task"/>

    <TodoTask v-if="cambiarMenu == 'to-do'" v-for="task in tasksSupabase" :tarea="task"/>

    <CompletedTaskComponent v-if="cambiarMenu == 'completadas'" v-for="task in tasksSupabase" :tarea="task"/>
                </div>
            </div>
        </div>
    </div>

</template>


<script setup>
import { useRoute } from 'vue-router'
import EscribirPost from '../components/EscribirPost.vue';
import { useAuthStore } from '../store/auth';

import VisualizarPost from '../components/VisualizarPost.vue';
import TodoTask from '../components/TodoTask.vue';
import CompletedTaskComponent from '../components/CompletedTaskComponent.vue';
import AllTasksComponent from '../components/AllTasksComponent.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { getTasks, deleteTask, updateCompleteTask, updateTask } from '../api'


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

// const onDelete = async (id) => {
//     alert('Evento del hijo recibido borrar');
//     // const response = await deleteTask(id);
//     // console.log(id);
//     // return response;
// }

// const onCompleted = async (id, taskCompleted) => {
//     alert('Evento del hijo recibido TAREA COMPLETADA')

// };


// const onUpdate = async (id) => {
//     alert('Evento del hijo recibido MODIFICADA')

// };


</script>


<style scoped>

</style>