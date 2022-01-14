import {urls} from "../configs/urls";

const getAll = () => {
     return   fetch(urls.users)
        .then(value => value.json())
}

export const usersServices = {
    getAll
}
