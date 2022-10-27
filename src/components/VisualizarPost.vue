<template>
    <div>
        <div class="post" v-if="mostrar">
        <!-- <header v-if="props.task.completed === true" class="has-text-danger">
            <div class="has-text-weight-bold">{{ props.task.title }} {{props.task.id}}</div>
        </header> -->
        <header :class="props.task.completed ? 'has-text-danger' : ''">
            <div class="has-text-weight-bold">{{ props.task.title }} {{props.task.id}}</div>
        </header>
        <div>
            {{ props.task.description }}
        </div>
        <div>
            <button @click="onCompleted(props.task.completed)">completada</button>
            <button @click="onDelete(props.task.id)">Borrar</button>
            <button @click="modificarTarea">modificar</button>
        </div>
    </div>

    <div v-else>
        <h2>hola</h2>
        <form @submit.prevent="onUpdate(props.task.id)">
            <input type="text" name="" id="" v-model="tituloInput">
            <input type="text" v-model="descripcionInput">
            <button>modificar la tarea</button>
        </form>
    </div>
    </div>


</template>
    
    
<script setup>

    import { ref } from 'vue';
    import { defineProps } from 'vue';
    import { defineEmits } from 'vue';
    import { getTasks, deleteTask, updateCompleteTask, updateTask } from '../api'

    const tituloInput = ref();
    const descripcionInput = ref();
    const mostrar = ref(true);

    const props = defineProps(
        {
            task: Object,
        }
        // {
        //     title: {
        //         type: String
        //     },
        //     description: {
        //         type: String
        //     },
        //     completed: {
        //         type: Boolean
        //     },
        //     id: {
        //         type: Number
        //     },
        //     mostrar: {
        //         type: Boolean
        //     }

        // }
    );

    // Con defineEmits define los eventos que puede emitir el componente
    const emits = defineEmits(['borrar', 'cambiar', 'completada'])
        
    const onDelete = async (id) => {
        alert('evento de props BORRAR')
        const response = await deleteTask(id);
        console.log(id);
        return response;
    };


    const onCompleted = async (completed) => {

        alert('evento de props')
        completed = !completed;
        const response = await updateCompleteTask(props.task.id, completed);
        console.log(completed)
    };


    const onUpdate = async (id) => {
        // emits('cambiar');
        console.log(id)
        modificarTarea();
        console.log(id)
        const response = await updateTask(id, {
        title:tituloInput.value,
        description: descripcionInput.value,
        });
    };

    const modificarTarea = () => {
        mostrar.value = !mostrar.value;
    };



</script>
    
    
<style scoped>
.post {
    margin-top: 10px;
    border: solid 1px rgb(255, 255, 255);
    padding: 1rem;
}

header {
    display: flex;
    justify-content: space-between;
}
</style>
    
    
    