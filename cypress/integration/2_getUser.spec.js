
describe('get all user through api', () => {
    it('retrieve user', () => {
        cy.getRequest().
            then((res => {
                assert.equal(res.status, 200)
                assert.equal(res.headers.server, "Cowboy")

            }))
    })
})