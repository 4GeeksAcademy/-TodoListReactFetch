
export const createUser = () => {

  fetch(`https://assets.breatheco.de/apis/fake/todos/user/Toni_CM`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([]),
  })
    .then((response) => response.json())
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



export const getApi = () => {
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

