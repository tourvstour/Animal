import ActionApi from './ActionApi'
import * as url from './UrlConstants'

export const LoginStatus = async (token) => {
    return await ActionApi(url.urlCheckLogin, token)
}