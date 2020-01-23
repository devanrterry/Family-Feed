import tokenService from "./tokenService";

const BASE_URL = '/api/posts';

export function getAll() {
//   return fetch(BASE_URL, {
//     headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//   })
//   .then(res => res.json())
//   .then(data => data)
return fetch(BASE_URL) 
  .then(res => res.json())
}

export function create(post) {
    post.date = new Date();
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-type': 'application/json', 
    'Authorization': 'Bearer ' + tokenService.getToken()   
},
    body: JSON.stringify(post)
  }).then(res => res.json());
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
  }

export function update(post) {
    return fetch(`${BASE_URL}/${post._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(post)
    }).then(res => res.json());
  }

export default {
    getAll,
    create,
    deleteOne,
    update
  };