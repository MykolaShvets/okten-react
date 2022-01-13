import {urls} from "../configs/urls";

const getPostsByUserId = (id) =>{
    return fetch(urls.users + '/' + id + '/posts')
        .then(value => value.json())
}

export const postServices = {
    getPostsByUserId
}
