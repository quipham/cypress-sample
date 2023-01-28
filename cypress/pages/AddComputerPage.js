class AddComputerPage {
    visit() {
        cy.visit('/new');
    }

    fillName(value) {
        cy.get('input[id=name]')
            .clear()
            .type(value);

        return this;
    }

    fillIntroduced(value) {
        cy.get('input[id=introduced]')
            .clear()
            .type(value);

        return this;
    }

    fillDiscontinued(value) {
        cy.get('input[id=discontinued]')
            .clear()
            .type(value);

        return this;
    }


    fillComputerDetails(value) {
        this.fillName(value.name);
        this.fillIntroduced(value.introduced);
        this.fillDiscontinued(value.discontinued);
        cy.get('select[id=company]')
            .select(value.company);

        return this;
    }

    clearAllFields() {
        cy.get('input[id=name]')
            .clear();
        cy.get('input[id=introduced]')
            .clear();
        cy.get('input[id=discontinued]')
            .clear();

        return this;
    }

    submit() {
        const button = cy.get('input[type=submit].btn.primary');
        button.click();
    }

    performAddNewComputer(value) {
        this.fillComputerDetails(value);
        this.submit();
    }

    validateSearchResult(value) {
        cy.get('#main > table > tbody > tr:nth-child(1) a')
            .contains(value, { matchCase: false });
    }

    validateEmptyResult() {
        cy.get(`[#main > div.well > em]`)
            .should('have.text', 'Nothing to display');
    }

    validateDateTimeErrorMessage(value) {
        cy.contains('Failed to decode date : java.time.format.DateTimeParseException: Text \''
            + value + '\' could not be parsed at index 0');
    }

    validateRequiredFieldErrorMessage() {
        cy.contains('Failed to refine type : Predicate isEmpty() did not fail.');
    }

}

export default AddComputerPage