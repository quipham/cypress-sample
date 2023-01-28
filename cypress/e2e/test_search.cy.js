/// <reference types="cypress" />

import ComputerListPage from "../pages/ComputerListPage"
import { getRandomName } from "../utils/common-utils";


context('Actions', () => {
    const computerListPage = new ComputerListPage();

    beforeEach(() => {
        computerListPage.visit();
    })

    it('TC011 - Search avaiable item should show correct result', () => {
        let input = 'ace';
        computerListPage.performSearch(input);
        computerListPage.validateSearchResult(input);
    })

    it('TC012 - Search avaiable item should show correct result - ignore case sensitive', () => {
        let input = 'ACE';
        computerListPage.performSearch(input);
        computerListPage.validateSearchResult(input);
    })

    it('TC013 - Search unavaiable item should show empty result page', () => {
        computerListPage.performSearch(getRandomName());
        computerListPage.validateEmptyResult();
    })
})
