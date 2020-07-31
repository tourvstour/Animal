import ActionApi from './ActionApi'
import * as url from './UrlConstants'

export const AnimalDataRegit = async () => {
    return ActionApi(url.urlAnimalDataRegit)
}

export const AnimalRegit = async (data) => {
    return ActionApi(url.urlAnimalRegit, data)
}

export const AnimalDataSearch = async (data) => {
    return ActionApi(url.urlAnimalData, data)
}

export const AnimalDataService = async (id) => {
    return ActionApi(url.urlAnimalDataService, id)
}

export const AnimalDescover = async (data) => {
    return ActionApi(url.uslAnimalDescover, data)
}