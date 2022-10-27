<template>

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
        <form action="">
            <input type="text" name="" id="">
            <input type="text">
            <button @click="onUpdate">modificar la tarea</button>
        </form>
    </div>

</template>
    
    
<script setup>

    import { ref } from 'vue';
    import { defineProps } from 'vue';
    import { defineEmits } from 'vue';

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

    const onUpdate = () => {
        emits('cambiar');
        modificarTarea();

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
    
    
    