declare namespace Cypress {
  interface Chainable {
    login(options: LoginOptions): void;
  }
}
