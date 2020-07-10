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
  postAnimal(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
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
  deleteEmployee(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
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