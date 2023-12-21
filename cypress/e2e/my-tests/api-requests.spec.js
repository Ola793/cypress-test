/// <reference types="cypress" />

describe('API login', () => {
  let id = 1;

  beforeEach(() => {
    cy.visit('https://jsonplaceholder.typicode.com/')
  })

  it('GET request', () => {
    cy.request('https://jsonplaceholder.typicode.com/posts').then(res => {
      cy.log(res)
      expect(res.status).to.eq(200)
    })
  })

  it('POST request', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
      title: 'Lorem',
      body: 'Ipsum',
      userId: 777,
    }).then(res => {
      cy.log(res)
      expect(res.status).to.eq(201)
      id = res.body.id
      cy.log(id)
    })
  })

  it('PUT request', () => {
    cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/100', {
      title: 'Dolor',
      body: 'Sit amet',
      userId: 777,
    }).then(res => {
      cy.log(res)
      expect(res.status).to.eq(200)
      cy.log(res.body.id)
    })
  })

  it('PATCH request', () => {
    cy.request('PATCH', 'https://jsonplaceholder.typicode.com/posts/id', {
      userId: 333,
    }).then(res => {
      cy.log(res)
      expect(res.status).to.eq(200)
      cy.log(id)
    })
  })

  it('DELETE request', () => {
    cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/id').then(res => {
      cy.log(res)
      expect(res.status).to.eq(200)
      cy.log(id)
    })
  })
})
