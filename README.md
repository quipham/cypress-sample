# Cypress automation project
## Package Structure Overview:
- Test script for WebApp: https://computer-database.gatling.io/computers
- Implement following generic Cypress project
- Test Environment handler by Cypress config
- PageObjectModel pattern (Due to E2E example so I don't use AppAction pattern )
- Ready for CI/CD integration

## File & Folder Structure at "cypress" folder
+ `e2e` contains the test suites files (scenario/test cases are put inside each .cy file )
+ `fixtures` contains test data sample files
+ `pages` contains PageObjects
+ `utils` contains Utillity methods (Generate random test data, handle list, etc...) file for utility methods\functions

## Installation:
- NodeJS 18 or above
- cd /your/project/path
- npm install cypress --save-dev
```
https://docs.cypress.io/guides/getting-started/installing-cypress
```

## Open the App:
- npx cypress open

## Running the Test:
```
https://docs.cypress.io/guides/getting-started/opening-the-app
```

## Testsuite Overview:
### 1. Add Computer
- TC001 - Add new computer successful with correct information
    . Fill valid computer information
    . Submit the form
    . Should show new computer has been created successful message
    . Perform search for the new computer by name
    . Should show new computer on the search result

- TC002 - Add new computer failed due to incorrect date time format
    . Fill invalid date time format at field `introduced` and `discontinued`
    . Should show error message when input incorrect DateTime format

- TC003 - Add new computer failed due to missing required fields
    . Let the field `name` EMPTY
    . Submit the form
    . Should show error message for required field

- TC004 - Add new computer failed due to only `SPACE` character input
    . Fill the field `name` with `SPACE` value
    . Submit the form
    . Shoud show error message for required field

### 2. Edit Computer
- TC005 - Edit successful with correct information
    . Select the First result on Table to Edit
    . Edit the field `name` with valid value
    . Submit the form
    . Should show computer has been updated successful message
    . Perform search for the updated computer by name
    . Should show updated computer on the search result

- TC006 - Edit failed due to missing required name field
    . Select the First result on Table to Edit
    . Edit the field `name` with `EMPTY` value
    . Submit the form
    . Shoud show error message for required field

- TC007 - Edit failed due to incorrect name full `SPACE` char
    . Select the First result on Table to Edit
    . Edit the field `name` with `SPACE` value
    . Submit the form
    . Shoud show error message for required field

### 3. Pagination
- TC008 - Able to navigate to Next/Previous pages
    . Navigate to the Next Page
    . Should show next page number
    . Back to the Previous Page
    . Should show previous page number

- TC009 - The Previsous button should disable at The first page
    . Looking for the `Previous` button at the first Page
    . Should disabled

- TC010 - The Next button should disable at The last page
    . Navigate to the last Page
    . Looking for the `Next` button
    . Should disabled

### 4. Search Computer
- TC011 - Search avaiable item should show correct result
    . Input existed `computer name` into search box
    . Should show correct result matching with the `computer name`

- TC012 - Search avaiable item should show correct result - ignore case sensitive
    . Input existed `COMPUTER NAME` into search box
    . Should show correct result matching with the `computer name`

- TC013 - Search unavaiable item should show empty result page
    . Input unavailable `computer name` into search box
    . Should show `EMPTY` result

(Should have more search rules here to test !!)

### 5. Sort by Column - ASC/DESC
- TC014 - Sort by Computer name should show correct result
    . Click on `Computer Name` column
    . Should show results sort by `ASC`
    . Click on `Computer Name` column
    . Should show results sort by `DESC`

- TC015 - Sort by Introduced should show correct result
    . Click on `Introduced` column
    . Should show results sort by `ASC`
    . Click on `Introduced` column
    . Should show results sort by `DESC`

- TC016 - Sort by Discontinued should show correct result
    . Click on `Discontinued` column
    . Should show results sort by `ASC`
    . Click on `Discontinued` column
    . Should show results sort by `DESC`

- TC017 - Sort by Company should show correct result
    . Click on `Company` column
    . Should show results sort by `ASC`
    . Click on `Company` column
    . Should show results sort by `DESC`