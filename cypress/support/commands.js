// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
Cypress.Commands.add('postRequest', makeRequest);
function makeRequest(query) {
    cy.request(
        {
            method: 'POST',
            url: Cypress.env('baseUrl'),
            body: query,  // or { query: query } depending if you are writing with es6
            headers: {
                'Content-Type': "application/json"
            },
            failOnStatusCode: false  // not a must but in case the fail code is not 200 / 400

        }
    ).then((res) => {
        return res;
    })
}
Cypress.Commands.add('getRequest', nextGetRequest);
function nextGetRequest() {
    cy.request(
        {
            method: 'GET',
            url: Cypress.env('baseUrl'),
            failOnStatusCode: false  // not a must but in case the fail code is not 200 / 400
        }
    ).then((res) => {
        return res;
    })
}
Cypress.Commands.add('putRequest', nextPutRequest);
function nextPutRequest(query) {
    cy.request(
        {
            method: 'PUT',
            url: Cypress.env('baseUrl'),
            body: query,  // or { query: query } depending if you are writing with es6
            headers: {
                'Content-Type': "application/json"
            },
            failOnStatusCode: false  // not a must but in case the fail code is not 200 / 400

        }
    ).then((res) => {
        return res;
    })
}

//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
