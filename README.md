# playwright-ui-tests-diploma


## Registration page tests
|  № |    describe       |                         test                         |         tag          |
|----|-------------------|------------------------------------------------------|----------------------|
|    | Registration page |                                                      |                      |
| 1. |                   | registration page title is visible                   | @registration        |
| 2. |                   | checking the visibility and number of errors         | @registration        |
|    |                   | in required fields by submitting an empty form       |                      |
| 3. |                   | register user and error on duplicate registration    | @registration        |
| 4. |                   | error checking for incorrect email format            | @registration        |
| 5. |                   | error checking for incorrect phone format            | @registration        |
| 6. |                   | error checking for an incorrect value date of birth  | @registration        |


## Login page tests
|  № |    describe       |                         test                         |         tag          |
|----|-------------------|------------------------------------------------------|----------------------|
|    | Login page        |                                                      |                      |
| 1. |                   | login page title is visible                          | @login               |
| 2. |                   | checking the visibility of errors in required        | @login               |
|    |                   | fields by submitting an empty form                   |                      |
| 3. |                   | login with unregistered email                        | @login               |
| 4. |                   | checking the register link                           | @login               |
| 5. |                   | checking the forgot your password link               | @login               |


## Home page tests
|  № |    describe       |                       test                           |         tag          |
|----|-------------------|------------------------------------------------------|----------------------|
|    | Home page         |                                                      |                      |
| 1. |                   | home page filters area is visible                    | @homepage            |
| 2. |                   | check the sort filter: Price (High - Low)            | @homepage, @filters  |
| 3. |                   | check the sort filter: Price (Low - High)            | @homepage, @filters  |


## Menubar page tests
|  № |    describe       |                       test                           |         tag          |
|----|-------------------|------------------------------------------------------|----------------------|
|    | Menubar           |                                                      |                      |
| 1. |                   | checking contact link                                | @menubar             |
| 2. |                   | checking sign in link                                | @menubar             |
| 3. |                   |                                                      | @menubar             |



npx playwright codegen https://practicesoftwaretesting.com/
npx playwright test --debug