/// <reference types="Cypress" />

describe('api Adopet', () => {
    //const tempoEsperado = Math.random() * 5000
    it('Mensagens da API', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/96e79e5b-4ebf-43d7-9c42-8659a82b6ca2',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
           // expect(res.duration).to.be.lte(tempoEsperado) //Validar que o tempo de resposta é menor(lte) que o "tempoEsperado"
        })
    })
})


describe('Api Adopet1', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwZGQ3ZWFkNi1lYjQxLTQ1ZGQtOGE3NS0wM2IwMjI4NWJiZTciLCJhZG9wdGVyTmFtZSI6ImNhbWlsYSIsImlhdCI6MTcwODk1NTE3OCwiZXhwIjoxNzA5MjE0Mzc4fQ.fdtfjYaan12Z7SOVU02rb_HpmXt76XbhZMszI1eVJc8`
      
            it('Nome do perfil', () => {
                cy.request({
                    method: 'GET' ,
                    url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0dd7ead6-eb41-45dd-8a75-03b02285bbe7',
                    headers: { authorization }
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('perfil')
                    expect(res.body.perfil.nome).to.be.equal('camila')
                })
            })
        })