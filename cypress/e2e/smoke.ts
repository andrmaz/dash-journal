import faker from '@faker-js/faker'

describe('smoke tests', () => {

  it('should allow you to register and login', () => {
    const loginForm = {
      email: `${faker.internet.userName()}@example.com`,
      password: faker.internet.password(),
    }
    cy.then(() => ({email: loginForm.email})).as('user')

    cy.visit('/')
    cy.findByRole('link', {name: /sign up/i}).click()
    cy.wait(1000)

    cy.findByRole('textbox', {name: /email/i}).type(loginForm.email)
    cy.findByLabelText(/password/i).type(loginForm.password)
    cy.findByRole('button', {name: /create account/i}).click()

    cy.wait(1000)
    cy.findByRole('button', {name: /logout/i})
  })

  it('should allow you to add a new client', () => {
    cy.login().then(() => {
      const client = faker.company.companyName()
      cy.findByRole('link', {name: /profile/i}).click()
      cy.findByRole('link', {name: /clients/i}).click()

      cy.findByLabelText(/name/i).type(client)
      cy.findByRole('button', {name: /create/i}).click()

      cy.findByRole('link', {name: client})
    })
  })
})
