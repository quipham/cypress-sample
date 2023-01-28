/// <reference types="cypress" />

import ComputerListPage from "../pages/ComputerListPage"


context('Actions', () => {
    const computerListPage = new ComputerListPage();

    beforeEach(() => {
        computerListPage.visit();
    })

    it('TC014 - Sort by Computer name should show correct result', () => {
        let nameLocator = 'tr td a';

        computerListPage.clickOnComputerNameColumn();
        computerListPage.verifySortASC(nameLocator);
        computerListPage.clickOnComputerNameColumn();
        computerListPage.verifySortDESC(nameLocator);
    })

    it('TC015 - Sort by Introduced should show correct result', () => {
        let introducedLocator = 'tbody > tr > td:nth-child(2)';

        computerListPage.clickOnIntroducedColumn();
        computerListPage.verifySortASC(introducedLocator);
        computerListPage.clickOnIntroducedColumn();
        computerListPage.verifySortDESC(introducedLocator);
    })

    it('TC016 - Sort by Discontinued should show correct result', () => {
        let discontinuedLocator = 'tbody > tr > td:nth-child(3)';

        computerListPage.clickOnDiscontinuedColumn();
        computerListPage.verifySortASC(discontinuedLocator);
        computerListPage.clickOnDiscontinuedColumn();
        computerListPage.verifySortDESC(discontinuedLocator);
    })

    it('TC017 - Sort by Company should show correct result', () => {
        let computerLocator = 'tbody > tr > td:nth-child(4)'

        computerListPage.clickOnCompanyColumn();
        computerListPage.verifySortASC(computerLocator);
        computerListPage.clickOnCompanyColumn();
        computerListPage.verifySortDESC(computerLocator);
    })
})
