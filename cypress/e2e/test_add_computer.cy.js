/// <reference types="cypress" />

import AddComputerPage from "../pages/AddComputerPage";
import ComputerListPage from "../pages/ComputerListPage";
import { getRandomName } from "../utils/common-utils";


context('Actions', () => {
    const addComputerPage = new AddComputerPage();
    const computerListPage = new ComputerListPage();

    beforeEach(() => {
        addComputerPage.visit();
    })

    it('TC001 - Add new computer successful with correct information', () => {
        let input = {
            name: 'AUTO-' + getRandomName() + ' @#$!%',
            introduced: '2022-01-01',
            discontinued: '2025-01-01',
            company: 'Sony'
        }

        addComputerPage.performAddNewComputer(input);
        computerListPage.visit();

        //Verify successful message
        computerListPage.getAlertMessage()
            .should('have.text', 'Done !  ');

        //Verify new computer should show when searching
        computerListPage.performSearch(input.name);
        computerListPage.validateSearchResult(input.name);
    })

    it('TC002 - Add new computer failed due to incorrect date time format', () => {
        let input = {
            name: 'AUTO-' + getRandomName() + ' @#$!%',
            introduced: 'abc',
            discontinued: 'abc',
            company: 'Sony'
        }

        addComputerPage.performAddNewComputer(input);

        //Verify error message show when input incorrect DateTime format
        addComputerPage.validateDateTimeErrorMessage(input.introduced);
        addComputerPage.validateDateTimeErrorMessage(input.discontinued);
    })

    it('TC003 - Add new computer failed due to missing required fields', () => {
        addComputerPage.submit();
        addComputerPage.validateRequiredFieldErrorMessage();
    })

    it('TC004 - Add new computer failed due to only `SPACE` character input', () => {
        addComputerPage.fillName("     ")
        addComputerPage.submit();
        addComputerPage.validateRequiredFieldErrorMessage();
    })
})
