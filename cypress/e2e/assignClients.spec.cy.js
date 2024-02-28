//para correr la prueba hay que comentar el module.export de assignClients.js
describe('Asignación de clientes a entrenadores', () => {
  it('asigna correctamente clientes a entrenadores', () => {
    cy.visit('/');
    cy.get('#assignButton').click(); 
    cy.get('#assignmentResult').contains('A').should('exist');
  });
});