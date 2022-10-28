<template>

    <div>
        <div class="card my-4" v-if="mostrar">
            <div class="card-content">
                <p class="title my-2">
                <header :class="props.task.completed ? 'has-text-danger' : ''">
                    <div class="has-text-weight-bold">{{ props.task.title }}</div>
                </header>
                </p>
                <p class="subtitle my-5">
                    {{ props.task.description }}
                </p>
            </div>
            <footer class="card-footer ">
                    <button class="card-footer-item button is-success is-light" @click="onCompleted(props.task.completed)">completada</button>
                    <button class="card-footer-item button is-warning is-light" @click="modificarTarea">modificar</button>
                    <button class="card-footer-item button is-danger is-light" @click="onDelete(props.task.id)">Borrar</button>
            </footer>
        </div>


        <div class="card my-4" v-else>

            <form @submit="onUpdate(props.task.id)">
                <div class="card-content field">
                    <label class="label">Modifica la tarea:</label>
                <div class="control field">
                    <input class="input" type="text" :placeholder="props.task.title" v-model="tituloInput">
                </div>
                <div class="control">
                    <textarea class="textarea" :placeholder="props.task.description" v-model="descripcionInput"></textarea>
                </div>
            </div>
            <footer class="card-footer ">
                    <button class="card-footer-item button is-white" @click="modificarTarea">atras</button>
                   <button class="card-footer-item button is-primary is-light">modificar</button>     
            </footer>
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
        title: tituloInput.value,
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
    
    
    