<template>


  <h1>Task APP Ana Garcia</h1>

  <ul>
    <li><router-link :to="{name: 'home'}">home</router-link></li>
    <li><router-link :to="{name: 'login'}">login</router-link></li>
    <li><router-link :to="{name: 'register'}">register</router-link></li>
  </ul>


  <router-view></router-view>


</template>

<script setup>
import { onMounted } from 'vue';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase);


// esta funcion es la de registro, la mayoria de su codigo es codigo de supabase
// estamos creando una funcion que va a utilizar supabase.auth.singUP a la que le pasamos un objeto con el email y el pasword del usuario

// con esta funcion registramos al usuario
//esto va en la vista de registro
const registro = async () => {
  const result = await supabase.auth.signUp({
      email: 'anagarciacarrasco@hotmail.com',
      password: '1234567'
    })
    console.log(result);
}
// con esta funcion identificamos al usuario
// esto va en la vista de identificacion
const login = async () => {
  const response = await supabase.auth.signInWithPassword({
    email: 'anagarciacarrasco@hotmail.com',
      password: '1234567'
  })
  console.log(response);
  // nuevoTask(response.data.user.id)
  // getTasks();
  // updateTask();
  deleteTask();
}

// para crear nuevos tasks utilizamos esta funcion
// que ira en la vista de tasks
// crearemos las tasks
const nuevoTask = async (id) => {
 const response = await supabase.from('task').insert({
  user_id: id,
  tittle:'titulo',
  description: 'Descripcion del task'
 })
 console.log(response);
}


// ahora la funcion para leer los datos que tenemos guardados en la base de datos
//obtendr5emos las task del usuario
const getTasks = async () => {
  // con el from le decimos que tabla seleccionamos
// el select quiere decir que columnas de la tabla quiere seleccionar, si ponemos un * quiere decir que seleccionamos todas, si ponemos el nombre de la columna selecciona solo dicho nombre.. (ese id es el id se la task no del usuario)
// el order ordena por l acolumna que le digamos y aascending:false para que el orden no sea ascendente
const response = await supabase.from('task').select('*').order('id',{ ascending: false })


 console.log(response);
}
// actualizar la task
// en update ponemos lo que vamos a modificar, en este caso es el objeto que creamos antes
//.eq es por lo que lo queremos modificar, en este caso usamos el id de la task para decirle cual cambiamos
const updateTask = async () => {
  
const response = await supabase
  .from('task')
  .update({   
    tittle:'titulo MODIFICADO',
    description: 'Descripcion del task MODIFICADO' 
  })
  .eq('id', '1')

  console.log(response);
}

// funcion de borrar, es muy parecida a la de modificar pero en vez de update se utiliza delete y despues se le dice que queremos borrar, si no se le dice lo borraria todo.
const deleteTask = async () => {

  const response = await supabase
  .from('task')
  .delete()
  .eq('id', '1')
  console.log(response);
}

// funcion para cerrar sesión

const logOut = async () => {

  const response = await supabase.auth.signOut()
}





onMounted(() => {
  // aqui llamamos a la funcion de registro o de login
  // registro()
   login()

});


</script>


<style scoped>
</style>