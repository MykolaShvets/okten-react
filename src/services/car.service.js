import {axiosCarService} from "./axios.service";
import {urls} from "../configs/cars.urls";

export const carService = {
    getAll:() => axiosCarService.get(urls.cars).then(value => value.data),
    create: (car) => axiosCarService.post(urls.cars, car).then(value => value.data),
    deleteById: (id) => axiosCarService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosCarService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}
