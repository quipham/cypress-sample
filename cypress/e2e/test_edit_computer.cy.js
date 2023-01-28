/// <reference types="cypress" />

import AddComputerPage from "../pages/AddComputerPage";
import ComputerListPage from "../pages/ComputerListPage";
import { getRandomName } from "../utils/common-utils";


context('Actions', () => {
    const addComputerPage = new AddComputerPage();
    const computerListPage = new ComputerListPage();

    beforeEach(() => {
        computerListPage.visit();
    })

    it('TC005 - Edit successful with correct information', () => {
        let input = {
            name: 'AUTO-' + getRandomName(),
            introduced: '2022-01-01',
            discontinued: '2025-01-01',
            company: 'Sony'
        }

        computerListPage.selectFirstResult();
        addComputerPage.performAddNewComputer(input);

        //Verify Edit successful message
        computerListPage.getAlertMessage()
            .should('have.text', "Done !  Computer " + input.name + " has been updated");

        //Verify new record has been updated successful via search
        computerListPage.performSearch(input.name);
        computerListPage.validateSearchResult(input.name);
    })

    it('TC006 - Edit failed due to missing required name field', () => {
        computerListPage.selectFirstResult();
        addComputerPage.clearAllFields();
        addComputerPage.submit();

        //Verify Edit error message
        addComputerPage.validateRequiredFieldErrorMessage();
    })

    it('TC007 - Edit failed due to incorrect name full `SPACE` char', () => {
        let input = '   ';
        computerListPage.selectFirstResult();
        addComputerPage.fillName(input);
        addComputerPage.submit();

        //Verify Edit error message
        addComputerPage.validateRequiredFieldErrorMessage();
    })

})
