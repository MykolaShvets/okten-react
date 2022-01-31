import {axiosPlaceholderService} from "./axios.service";
import {placeholderUrls} from "../configs/placeholder.urls";

export const userService = {
    getAll: () => axiosPlaceholderService.get(placeholderUrls.users).then(value => value.data)
}
