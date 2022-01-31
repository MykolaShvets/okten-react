import {axiosPlaceholderService} from "./axios.service";
import {placeholderUrls} from "../configs/placeholder.urls";

export const commentService = {
    getAll: () => axiosPlaceholderService.get(placeholderUrls.comments).then(value => value.data)
}
