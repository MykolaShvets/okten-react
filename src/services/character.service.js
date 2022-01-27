import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const characterService = {
    getById: (id) => axiosService.get(`${urls.characters}/${id}`).then(value => value.data)
}
