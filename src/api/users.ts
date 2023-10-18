const getUsers = () => {
    return fetch('https://reqres.in/api/users')
}

export {
    getUsers
}
