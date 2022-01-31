import {axiosPlaceholderService} from "./axios.service";
import {placeholderUrls} from "../configs/placeholder.urls";

export const postService = {
    getAll: () => axiosPlaceholderService.get(placeholderUrls.posts).then(value => value.data)
}
