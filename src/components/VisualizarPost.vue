<template>
    <!-- v-for="task in tasksSupabase" :key="task.id" -->
        <div class="post">
            <header>
                <div class="has-text-weight-bold">{{props.title}}</div>
            </header>
            <div>
                {{props.description}}
            </div>
            <div>
                <button>completada</button>
                <button>modificar</button>
                <button>borrar</button>
            </div>
        </div>
    
    </template>
    
    
    <script setup>
        import { defineProps } from 'vue';
    
        const props = defineProps(
            {
                title: {
                    type: String
                },
                description: String
            }
        );
    
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
    
    
    