describe('Update User through api', () => {
    it('upadte user', () => {

        cy.putRequest({ username: "FreddyClassic", score: 2220345 }).
            then((res => {
                assert.equal(res.status, 204)

            }))
    })
    it('upadte user with incorrect json', () => {

        cy.putRequest([{ username: "namx" }]).
            then((res => {
                assert.equal(res.status, 503)

            }))
    })
})