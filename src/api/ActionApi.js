const ActionApi = (url, data) => {
    return fetch(url, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            throw err
        })
}

export default ActionApi 