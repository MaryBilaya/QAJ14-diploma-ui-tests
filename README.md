# Playwright UI Tests

Автоматизированные UI-тесты дипломного проекта на Playwright+Typescript. Репозиторий демонстрирует структуру реального тестового фреймворка: Page Object-подход, фикстуры, хелперы и отчетность в Allure.

## 🧰 Стек технологий
- Playwright Test
- TypeScript
- Node.js
- Page Object Model
- Общие фикстуры
- Хелперы
- Allure Report
- GitHub Actions - CI/CD: тесты запускаются автоматически при каждом push в репозиторий

## 📂 Структура проекта
```text
├─ .giyhub\workflows
│  ├─ playwright.yml
├─ helpers
│  ├─ attachments.ts
│  ├─ random_email.ts
├─ pages
│  ├─ elements
|     ├─ menubar.ts
|  ├─ base_page.ts
|  ├─ contact_page.ts
|  ├─ forgot_password_page.ts
|  ├─ home_page.ts
|  ├─ login_page.ts
|  ├─ my_account_page.ts
|  ├─ registration_page.ts
├─ tests/
│  ├─ home.spec.ts      
│  ├─ login.spec.ts      
│  ├─ menubar.spec.ts        
│  └─ registration.spec.ts      
├─ .prettierrc              
├─ fixtures.ts  
├─ package.json
├─ playwright.config.ts
└─ README.md
```
# 🚀 Запуск проекта
## клонирование репозитория
* git clone https://github.com/MaryBilaya/QAJ14-diploma-ui-tests.git
* cd QAJ14-diploma-ui-tests

## Установка зависимостей
npm install

## Запуск автотестов
npm test

## Просмотр allure отчета с историчностью прогонов (History, Trend)
1. npm test
2. npm run allure:history
3. npm run allure:report
4. npm run allure:open

## Registration page tests

| №   | describe          | test                                                | tag           |
| --- | ----------------- | --------------------------------------------------- | ------------- |
| 1.  | Registration page | registration page title is visible                  | @registration |
| 2.  | Registration page | checking the visibility and number of errors        | @registration |
|     |                   | in required fields by submitting an empty form      |               |
| 4.  | Registration page | user registration and check error on duplicate      | @registration |
|     |                   | registration                                        |               |
| 5.  | Registration page | error checking for incorrect email format           | @registration |
| 6.  | Registration page | error checking for incorrect phone format           | @registration |
| 7.  | Registration page | error checking for an incorrect value date of birth | @registration |

## Login page tests

| №   | describe   | test                                          | tag    |
| --- | ---------- | --------------------------------------------- | ------ |
| 1.  | Login page | login page title is visible                   | @login |
| 2.  | Login page | checking the visibility of errors in required | @login |
|     |            | fields by submitting an empty form            |        |
| 3.  | Login page | login with unregistered email                 | @login |
| 4.  | Login page | checking the register link                    | @login |
| 5.  | Login page | checking the forgot your password link        | @login |

## Home page tests

| №   | describe  | test                                      | tag                 |
| --- | --------- | ----------------------------------------- | ------------------- |
| 1.  | Home page | home page filters area is visible         | @homepage           |
| 2.  | Home page | check the sort filter: Price (High - Low) | @homepage, @filters |
| 3.  | Home page | check the sort filter: Price (Low - High) | @homepage, @filters |

## Menubar page tests

| №   | describe | test                                    | tag                   |
| --- | -------- | --------------------------------------- | --------------------- |
| 1.  | Menubar  | checking contact link                   | @menubar              |
| 2.  | Menubar  | checking sign in link                   | @menubar              |
| 3.  | Menubar  | checking transition by categories       | @menubar, @categories |
| 3.1 |          | Category: Hand Tools                    |                       |
| 3.2 |          | Category: Power Tools                   |                       |
| 3.3 |          | Category: Other                         |                       |
| 3.4 |          | Category: Special Tools                 |                       |
| 4.  | Menubar  | checking transition to rentals category | @menubar, @categories |
