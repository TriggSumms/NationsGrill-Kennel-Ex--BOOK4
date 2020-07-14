const remoteURL = "http://localhost:5005"

export default {
  //ANIMAL
  getAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAnimalAll() {
    return fetch(`${remoteURL}/animals`).then(result => result.json())
  },
  deleteAnimal(id) {
    return fetch(`${remoteURL}/animals/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  //The two Fetch calls bellow (ANIMALS) work as a pair to edit/populate a form and then put the info onto the API for later rendering 
  postAnimal(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  updateAnimal(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  getRandomAnimalId() {
    return fetch(`${remoteURL}/animals`)
      .then(result => result.json())
      .then(animals => {
        const randomIndex = Math.floor(Math.random() * animals.length);
        const randomAnimal = animals[randomIndex];
        return randomAnimal.id;
    });
  },

  // LOCATION 
  getLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getLocationAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  deleteLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },

  //EMPLOYEE
  getEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getEmployeeAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  getWithAnimals(id) {
    return fetch(`${remoteURL}/employees/${id}?_embed=animals`)
            .then(result => result.json())
},
  deleteEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  },
  postEmployee(newEmployee) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  },
  updateEmployee(editedEmployee) {
    return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedEmployee)
    }).then(data => data.json());
  },

  //OWNER
  getOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`).then(result => result.json())
  },
  getOwnerAll() {
    return fetch(`${remoteURL}/owners`).then(result => result.json())
  },
  deleteOwner(id) {
    return fetch(`${remoteURL}/owners/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }
}