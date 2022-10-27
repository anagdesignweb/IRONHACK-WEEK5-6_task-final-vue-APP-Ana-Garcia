// Crear un router con las vistas Home y Cart

import {createRouter, createWebHashHistory} from 'vue-router'


const routes = [
    { 
      path: '/initial',
      name:'initial', 
      component: () => import('../views/Initial.vue'),
      children: [ 
        { 
          path: 'login', 
          name:'login',
          component: () => import('../views/Login.vue') 
        },
        { 
            path: 'register', 
            name:'register',
            component: () => import('../views/Register.vue') 
          },
      ]
    },
    { 
        path: '/',
        name:'home', 
        component: () => import('../views/Home.vue'),
        children: [ 
          { 
            path: 'allTasks', 
            name:'allTasks',
            component: () => import('../views/AllTasks.vue') 
          },
          { 
              path: 'completedTasks', 
              name:'completedTasks',
              component: () => import('../views/CompletedTasks.vue') 
            },
            { 
              path: 'todoTasks', 
              name:'todoTasks',
              component: () => import('../views/TodoTasks.vue') 
            },
        ]
      },
  ]


// este proyecto va a ser visualizado en github pages por tanto hay que hacer una serie de cambios para que funcione, entre ellos aqui en el router le vamos a dar un parametro a la funcion createwebHistory, este parametro es una variable de vue.
// esto es el mismo paso que hemso hecho con la carpeta del repositorio pero para la url, le dice al router que empiece desde la carpeta del repositorio
const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router;