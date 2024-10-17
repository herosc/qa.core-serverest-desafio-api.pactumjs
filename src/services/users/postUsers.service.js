const { spec } = require("pactum");

async function postUsers(request, statusCode) {
    const { json } = await spec()
        .post('https://serverest.dev/usuarios')
        .withBody(request)
        .expectStatus(statusCode)
    return json
}

module.exports = {
    postUsers
}
