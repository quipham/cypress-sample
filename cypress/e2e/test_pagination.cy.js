/// <reference types="cypress" />

import ComputerListPage from "../pages/ComputerListPage"


context('Actions', () => {
    const computerListPage = new ComputerListPage();

    beforeEach(() => {
        computerListPage.visit();
    })

    it('TC008 - Able to navigate to Next/Previous pages', () => {
        computerListPage.navigateToNextPage();
        //Verify current page increase by 10
        computerListPage.getCurrentPage()
            .contains('Displaying 11 to 20 of ');

        computerListPage.backToPreviousPage();
        //Verify current page decrease by 10
        computerListPage.getCurrentPage()
            .contains('Displaying 1 to 10 of ');
    })

    it('TC009 - The Previsous button should disable at The first page', () => {
        computerListPage.verifyPreviousButtonDisabled();
    })

    it('TC010 - The Next button should disable at The last page', () => {
        computerListPage.jumpToTheLastPage();
        computerListPage.verifyNextButtonDisabled();
    })
})
