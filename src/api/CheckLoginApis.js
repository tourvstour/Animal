import ActionApi from './ActionApi'
import * as url from './UrlConstants'

export const loginStatus = async (token) => {
    return await ActionApi(url.urlCheckLogin, token)
}