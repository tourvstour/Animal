import { ActionApi } from './ActionApi'
import * as apis from './Constants'
let url = apis.url

export const EmployeeRegiterApi = async (data) => {
    return await ActionApi(url, data)
}

