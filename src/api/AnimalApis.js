import ActionApi from './ActionApi'
import * as url from './UrlConstants'

export const AnimalDataRegit = async () => {
    return ActionApi(url.urlAnimalDataRegit)
}

export const AnimalRegit = async (data) => {
    return ActionApi(url.urlAnimalRegit, data)
}