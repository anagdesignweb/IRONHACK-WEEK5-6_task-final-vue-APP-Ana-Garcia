import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)
console.log(supabase);



// IMPORTANTE: las funciones tienen que ser exportables para poder usarlas desde otro sitio.

//1.REGISTRO, Esta funcion es la de registro, la mayoria de su codigo es codigo de supabase
// estamos creando una funcion que va a utilizar supabase.auth.singUP a la que le pasamos un objeto con el email y el pasword del usuario
// con esta funcion registramos al usuario
//* esto va en la vista de registro
export const registro = async (email, password) => {

    const response = await supabase.auth.signUp({
        email: email,
        password: password,
    })
        // TODO: hay que identificar el result y retornar lo que nos interesa ( ejemplo si ha habido un error habra que comunicarlo y luego hacer un return de lo que queramos)
        // console.log(response);
}


//2. IDENTIFICACION, con esta funcion identificamos al usuario
// esto va en la vista de identificacion
export const login = async (email, password) => {

    const response = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    return response.data.user.id
}

//3.CREAR TASK, para crear nuevos tasks utilizamos esta funcion
// que ira en la vista de tasks
/* ejemplo de como seria la variable parametro task: 
{
  user_id: id,
  tittle:'titulo',
  description: 'Descripcion del task'
 }

*/ 
export const newTask = async (task) => {

    const response = await supabase.from('task').insert(task)
// TODO: identificar la respuesta y retornar lo que necesitemos ( p.ej retornar un true si se ha insertado el registro y un false sino)
    // console.log(response);
}

const nuevoTask = async (id) => {
    const response = await supabase.from('task').insert({
     user_id: id,
     title:title.value,
     description: description.value,
    })
    console.log(response);
}


   
//4.LEER LA TABLA TASK DE LA BASE DE DATOS, ahora la funcion para leer los datos que tenemos guardados en la base de datos
//obtendremos las task del usuario, aqui no se le pasa parametro a la funcion porque se supone que el usuario ya esta identificado en l aapp y carga las de dicho usuario
export const getTasks = async () => {
    // con el from le decimos que tabla seleccionamos
    // el select quiere decir que columnas de la tabla quiere seleccionar, si ponemos un * quiere decir que seleccionamos todas, si ponemos el nombre de la columna selecciona solo dicho nombre.. (ese id es el id se la task no del usuario)
    // el order ordena por l acolumna que le digamos y aascending:false para que el orden no sea ascendente
    const response = await supabase.from('task').select('*').order('id',{ ascending: false })
    // console.log(response);
    return response;

    // TODO: retornar la informacion de los task, ej response.data
}


//5.MODIFICAR TASK, actualizar la task
// en update ponemos lo que vamos a modificar, en este caso es el objeto que creamos antes
//.eq es por lo que lo queremos modificar, en este caso usamos el id de la task para decirle cual cambiamos
//parametros: le pasamos (taskId) el id del objeto que queremos modificar y (task) el cambio del objeto
/*
task: 
{
    tittle:'titulo MODIFICADO',
    description: 'Descripcion del task MODIFICADO' 
} 
*/ 
export const updateTask = async (taskId, task) => {
  
    const response = await supabase
      .from('task')
      .update(task)
      .eq('id', taskId)
        // TODO: identificar el resultado y retornar lo que nos interese, p.ej true si ha ido ben false si ha fallado
    //   console.log(response);
}



//EXTRA (creada por mi)  editar COMPLETADA:

export const updateCompleteTask = async (taskId, taskCompleted) => {


    const response = await supabase
      .from('task')
      .update({ completed: taskCompleted })
      .eq('id', taskId)

    //   console.log(response);
    //   console.log(taskCompleted);
}



//6.BORRAR task, funcion de borrar, es muy parecida a la de modificar pero en vez de update se utiliza delete y despues se le dice que queremos borrar, si no se le dice lo borraria todo.
export const deleteTask = async (taskId) => {

    const response = await supabase
    .from('task')
    .delete()
    .eq('id', taskId)
    // TODO: identificar el resultado y retornar lo que nos interese
    // console.log(response);
}


//7.DESLOGUEAR, funcion para cerrar sesión
export const logOut = async () => {
    const response = await supabase.auth.signOut()
    // TODO: identificar el resultado y avisar al usuario si se ha podido desloguear
}
  
/*
    email: 'anagarciacarrasco@hotmail.com',
    password: '1234567'
*/