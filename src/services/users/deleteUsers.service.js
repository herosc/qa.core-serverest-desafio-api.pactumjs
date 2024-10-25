async function deleteUsers(userId, statusCode) {
    const { json } = await spec()
        .delete(`https://serverest.dev/usuarios/${userId}`)
        .expectStatus(statusCode)
        
    return json
}

module.exports = {
    deleteUsers
}