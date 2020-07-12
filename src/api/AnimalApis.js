import ActionApi from './ActionApi'
import * as url from './UrlConstants'

export const AnimalDataRegit = async () => {
    return ActionApi(url.urlAnimalDataRegit)
}