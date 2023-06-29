
export const createUser = () => {
  fetch(`https://assets.breatheco.de/apis/fake/todos/user/Toni_CM`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  })
    .then((response) => {
      if (response.ok) {
        alert("El usuario se ha creado correctamente");
        return response.json();
      } else {
        Error("El usuario ya se encuentra creado");
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};



export const addTask = (newTask) => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/Toni_CM", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify([newTask]) 
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};


export const deleteTask = (tasks) => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/Toni_CM", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tasks) 
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};


export const getAPI = () => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/Toni_CM", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

export const cleanAPI = () => {
  fetch("https://assets.breatheco.de/apis/fake/todos/user/Toni_CM", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    
  })
  .then((response) => {
    if (response.ok) {
      alert("Se ha eliminado el usuario y todas las tareas");
      return response.json();
    } else {
      Error("Hubo un error al ejecutar la limpieza");
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
};


