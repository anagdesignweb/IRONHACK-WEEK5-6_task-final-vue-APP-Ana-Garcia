<template>
    <H1>TODAS</H1>
   
    <VisualizarPost v-for="task in tasksSupabase" :key="task.id" :title="task.title" :description="task.description" :id="task.id" :completed="task.completed" :mostrar="mostrar" @borrar="onDelete(task.id)" @cambiar="onUpdate" @completada="onCompleted(task.id, task.completed)"/>
    
</template>


<script setup>
    import VisualizarPost from '../components/VisualizarPost.vue';
    import { ref } from 'vue';
    import { onMounted } from 'vue';
    import { useAuthStore } from '../store/auth'
    import { getTasks, deleteTask, updateCompleteTask } from '../api'

    const authStore = useAuthStore();
    const tasksSupabase = ref([]);
    const completado = ref(true);
    const mostrar = ref(true);



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

    const onUpdate = () => {
        alert('Evento del hijo recibido MODIFICADA')
    }; 

    const modificar = () => {
        alert('funcion modificar')
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