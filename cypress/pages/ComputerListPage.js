class ComputerListPage {
    visit() {
        cy.visit('/');
    }

    fillComputerName(value) {
        const field = cy.get('input[id=searchbox]');
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = cy.get('input[id=searchsubmit]');
        button.click();
    }

    performSearch(value) {
        this.fillComputerName(value);
        this.submit();
    }

    navigateToNextPage() {
        cy.get('li.next > a')
            .click();

        return this;
    }

    backToPreviousPage() {
        cy.get('li.prev > a')
            .click();

        return this;
    }

    getCurrentPage() {
        return cy.get('li.current > a');
    }

    clickOnComputerNameColumn() {
        cy.get('th.col-name a')
            .click();

        return this;
    }

    clickOnIntroducedColumn() {
        cy.get('th.col-introduced a')
            .click();

        return this;
    }

    clickOnDiscontinuedColumn() {
        cy.get('th.col-discontinued a')
            .click();

        return this;
    }

    clickOnCompanyColumn() {
        cy.get('th.col-company a')
            .click();

        return this;
    }

    selectFirstResult() {
        cy.get('#main > table > tbody > tr:nth-child(1) a')
            .click();

        return this;
    }

    getAlertMessage() {
        return cy.get('div.alert-message.warning');
    }

    validateSearchResult(value) {
        cy.get('#main > table > tbody > tr:nth-child(1) a')
            .contains(value, { matchCase: false });
    }

    validateEmptyResult() {
        cy.get('#main > div.well > em')
            .should('have.text', 'Nothing to display');
    }

    jumpToTheLastPage() {
        cy.visit('?p=57&n=10&s=name&d=asc');

        return this;
    }

    verifyPreviousButtonDisabled() {
        cy.get('li.prev')
            .invoke('attr', 'class')
            .should('eq', 'prev disabled');
    }

    verifyNextButtonDisabled() {
        cy.get('li.next')
            .invoke('attr', 'class')
            .should('eq', 'next disabled');
    }

    verifySortASC(locator) {
        cy.get(locator)
            .should(($els) => {
                const elsText = $els.toArray().map(el => el.innerText);
                expect(elsText).to.deep.eq(elsText.sort());
            })
    }

    verifySortDESC(locator) {
        cy.get(locator)
            .should(($els) => {
                const elsText = $els.toArray().map(el => el.innerText);
                elsText.sort();
                expect(elsText).to.deep.eq(elsText.reverse());
            })
    }
}

export default ComputerListPage