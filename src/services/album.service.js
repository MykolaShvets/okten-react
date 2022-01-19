import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const albumService = {
    getById: (id) => axiosService.get(`${urls.albums}/${id}`).then(value => value.data),
    getAlbumPhotos: (id) => axiosService.get(`${urls.albums}/${id}/photos`).then(value => value.data)
}
