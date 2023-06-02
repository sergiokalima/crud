




















let tareas = []

const title = document.getElementById('title')

const desc = document.getElementById('desc')

const boton = document.getElementById('boton')

const tabla = document.getElementById('cuerpoTabla')

// console.log(title, desc, boton)
traerLS()
listar()

boton.addEventListener('click',
function crear (e) {
  e.preventDefault()


  console.log(title.value)
  console.log(desc.value)

  const tarea= {
    title: title.value,
    desc: desc.value,
    completed: false
  }

  tareas.push(tarea)
  localStorage.setItem('tareas', JSON.stringify
  (tareas)) //JSON.stringify
}
)

function traerLS () {
  tareas = JSON.parse(localStorage.getItem('tareas'))
}

function listar () {
  tabla.innerHTML = ''

  tareas.forEach(tarea => {
    tabla.innerHTML += `
    <td>${tarea.title}</td>
    <td>${tarea.desc}</td>
    <td>${tarea.completed}</td>
    `
  })
}