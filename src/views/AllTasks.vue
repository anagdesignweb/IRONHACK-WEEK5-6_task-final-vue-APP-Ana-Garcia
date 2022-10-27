<template>

    <div class="tabs">
                    <ul>
                        <li class="is-active">
                            <router-link :to="{ name: 'allTasks' }">All</router-link>
                        </li>
                        <li>
                            <button @click="cambiarVista('to-do')">to-do</button>
                        </li>
                        <li>
                            <router-link :to="{ name: 'completedTasks' }">Completadas</router-link>
                        </li>
                    </ul>
                </div>
                <H1>{{cambiarMenu}}</H1>
    <VisualizarPost v-if="cambiarMenu == 'all'" v-for="task in tasksSupabase" :key="task.id" :title="task.title" :description="task.description"
        :id="task.id" :completed="task.completed" :mostrar="mostrar" @borrar="onDelete(task.id)"
        @cambiar="onUpdate(task.id, task.title, task.description)" @completada="onCompleted(task.id, task.completed)" />
    <TodoTask v-if="cambiarMenu == 'to-do'"/>
</template>


<script setup>
import VisualizarPost from '../components/VisualizarPost.vue';
import TodoTask from '../components/TodoTask.vue';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useAuthStore } from '../store/auth'
import { getTasks, deleteTask, updateCompleteTask, updateTask } from '../api'

const authStore = useAuthStore();
const tasksSupabase = ref([]);
const mostrar = ref(true);
const cambiarMenu = ref('all');



const cambiarVista = (vista) => {
    cambiarMenu.value = vista;
}


const onDelete = async (id) => {
    alert('Evento del hijo recibido borrar');
    const response = await deleteTask(id);
    console.log(id);
    return response;
}

const onCompleted = async (id, taskCompleted) => {
    alert('Evento del hijo recibido TAREA COMPLETADA')
    // console.log(taskCompleted)
    // if (taskCompleted == true) {
    //     taskCompleted = !taskCompleted;
    // } else if (taskCompleted == false) {
    //     taskCompleted = !taskCompleted;
    // }
    taskCompleted = !taskCompleted;
    // console.log(taskCompleted)

    const response = await updateCompleteTask(id, taskCompleted);

};


const onUpdate = async (id) => {
    alert('Evento del hijo recibido MODIFICADA')


};


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