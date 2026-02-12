# playwright-ui-tests-diploma

## Техническое задание
- Реализовать тестовый фреймворк для UI тестирования для web приложения https://practicesoftwaretesting.com/:
 - тестовый фреймворк брать на свое усмотрение: WDIO (BDD по желанию), cypress или playwright
        - минимум 3 разных страницы
        - минимум 10 тестов на каждую страницу
 - использовать Page Object, Page Factory
 - Добавить allure репортер
 - Использовать различные локаторы и селекторы
 - Организовывать тесты в группы
 - Настроить в ci (на свой выбор) запуск тестов в MR и невозможность вмержить если тесты упали

## Запуск автотестов
npm test

## Просмотр allure отчета с историчностью прогонов (History, Trend)
1. npm test
2. npm run allure:history
3. npm run allure:report
4. npm run allure:open

## Registration page tests
|  №  |    describe       |                         test                         |         tag          |
|-----|-------------------|------------------------------------------------------|----------------------|
| 1.  | Registration page | registration page title is visible                   | @registration        |
| 2.  | Registration page | checking the visibility and number of errors         | @registration        |
|     |                   | in required fields by submitting an empty form       |                      |
| 3.  | Registration page | user registration, error on duplicate registration,  | @registration        |
|     |                   | user login                                           |                      |
| 3.1 |                   | user registration                                    |                      |
| 3.2 |                   | error on duplicate registration                      |                      |
| 3.3 |                   | user login                                           |                      |
| 4.  | Registration page | error checking for incorrect email format            | @registration        |
| 5.  | Registration page | error checking for incorrect phone format            | @registration        |
| 6.  | Registration page | error checking for an incorrect value date of birth  | @registration        |

## Login page tests
|  №  |    describe       |                         test                         |         tag          |
|-----|-------------------|------------------------------------------------------|----------------------|
| 1.  | Login page        | login page title is visible                          | @login               |
| 2.  | Login page        | checking the visibility of errors in required        | @login               |
|     |                   | fields by submitting an empty form                   |                      |
| 3.  | Login page        | login with unregistered email                        | @login               |
| 4.  | Login page        | checking the register link                           | @login               |
| 5.  | Login page        | checking the forgot your password link               | @login               |

## Home page tests
|  №  |    describe       |                       test                           |         tag          |
|-----|-------------------|------------------------------------------------------|----------------------|
| 1.  | Home page         | home page filters area is visible                    | @homepage            |
| 2.  | Home page         | check the sort filter: Price (High - Low)            | @homepage, @filters  |
| 3.  | Home page         | check the sort filter: Price (Low - High)            | @homepage, @filters  |

## Menubar page tests
|  №  |    describe       |                       test                           |         tag          |
|-----|-------------------|------------------------------------------------------|----------------------|
| 1.  | Menubar           | checking contact link                                | @menubar             |
| 2.  | Menubar           | checking sign in link                                | @menubar             |
| 3.  | Menubar           | checking transition by categories                    | @menubar, @categories|
| 3.1 |                   | Category: Hand Tools                                 |                      |
| 3.2 |                   | Category: Power Tools                                |                      |
| 3.3 |                   | Category: Other                                      |                      |
| 3.4 |                   | Category: Special Tools                              |                      |
| 4.  | Menubar           | checking transition to rentals category              | @menubar, @categories|



