describe('Create User through api', () => {
    it('create user', () => {

        cy.postRequest({ username: "FreddyClassic", score: 222034 }).
            then((res => {
                assert.equal(res.status, 201)
                assert.equal(res.body.message, "User added.")
                assert.equal(res.body.status, "success")
                assert.equal(res.headers.server, "Cowboy")

            }))
    })
    it('create user with incorrect json body', () => {

        cy.postRequest({ username: "namx" }).
            then((res => {
                assert.equal(res.status, 400)
                assert.equal(res.headers.server, "Cowboy")

            }))
    })
})