describe('Header and Footer Elements', () => {
    beforeEach(() => {
      
        cy.visit('https://qauto.forstudy.space/');
    });
  
    // Header Tests
    describe('Header Buttons', () => {
      it('should find the Home button', () => {
        cy.get('nav a[href="/"]').should('exist');
      });
  
      it('should find the About button', () => {
        cy.get('nav button[appscrollto="aboutSection"]').should('exist');
      });
  
      it('should find the Contacts button', () => {
        cy.get('nav button[appscrollto="contactsSection"]').should('exist');
      });
  
      it('should find the Guest log in button', () => {
        cy.get('div.header_right button.header-link.-guest').should('exist');
      });
  
      it('should find the Sign In button', () => {
        cy.get('div.header_right button.btn.btn-outline-white.header_signin').should('exist');
      });
    });
  
    // Footer Tests
    describe('Footer Contacts', () => {
      it('should find the Contacts section', () => {
        cy.get('#contactsSection').should('exist');
      });
  
      it('should find the Facebook link', () => {
        cy.get('#contactsSection a[href="https://www.facebook.com/Hillel.IT.School"]').should('exist');
      });
  
      it('should find the Telegram link', () => {
        cy.get('#contactsSection a[href="https://t.me/ithillel_kyiv"]').should('exist');
      });
  
      it('should find the YouTube link', () => {
        cy.get('#contactsSection a[href="https://www.youtube.com/user/HillelITSchool?sub_confirmation=1"]').should('exist');
      });
  
      it('should find the Instagram link', () => {
        cy.get('#contactsSection a[href="https://www.instagram.com/hillel_itschool/"]').should('exist');
      });
  
      it('should find the LinkedIn link', () => {
        cy.get('#contactsSection a[href="https://www.linkedin.com/school/ithillel/"]').should('exist');
      });
    });
  });
  