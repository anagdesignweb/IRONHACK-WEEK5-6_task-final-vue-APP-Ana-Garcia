<template>
    <div>
        <div class="post" v-if="mostrar">
        <!-- <header v-if="props.completed === true" class="has-text-danger">
            <div class="has-text-weight-bold">{{ props.title }} {{props.id}}</div>
        </header> -->
        <header :class="props.completed ? 'has-text-danger' : ''">
            <div class="has-text-weight-bold">{{ props.title }} {{props.id}}</div>
        </header>
        <div>
            {{ props.description }}
        </div>
        <div>
            <button @click="onCompleted">completada</button>
            <button @click="onDelete">Borrar</button>
            <button @click="modificarTarea">modificar</button>
        </div>
    </div>

    <div v-else>
        <h2>hola</h2>
        <form @submit.prevent="onUpdate">
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
    import { updateTask } from '../api'

    const tituloInput = ref();
    const descripcionInput = ref();
    const mostrar = ref(true);

    const props = defineProps(
        {
            title: {
                type: String
            },
            description: {
                type: String
            },
            completed: {
                type: Boolean
            },
            id: {
                type: Number
            },
            mostrar: {
                type: Boolean
            }
        }
    );

    // Con defineEmits define los eventos que puede emitir el componente
    const emits = defineEmits(['borrar', 'cambiar', 'completada'])
        
    const onDelete = () => {
        emits('borrar');

    };

    const onCompleted = () => {
        emits('completada');

    };

    const onUpdate = async () => {
        emits('cambiar');
        modificarTarea();
        const response = await updateTask(props.id, {
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
    
    
    