import ActionApi from './ActionApi'
import * as url from './UrlConstants'

export const EmployeeRegiterApi = async (data) => {
    return await ActionApi(url.urlEmployeeRegit, data)
}

export const EmployeePrefixApi = async () => {
    return await ActionApi(url.urlEmployeePrefix)
}

export const EmployeeLogin = async (data) => {
    return await ActionApi(url.urlEmployeeLogin, data)
}