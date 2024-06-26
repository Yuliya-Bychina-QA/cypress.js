# cypress.js
<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Авторизация c неверным логином и верным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля
* Проверка на приведение к строчным буквам в логине

## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://github.com/Yuliya-Bychina-QA/cypress.js/blob/main/base_Url.png)

2. Применение хуков beforeEach и afterEach
![image](https://github.com/Yuliya-Bychina-QA/cypress.js/blob/main/Each.png)

3. Переменные данные для авторизации вынесены в отдельный файл
![image](https://github.com/Yuliya-Bychina-QA/cypress.js/blob/main/helpers.png)

4. Каждая страница описана в формате объекта с локаторами
![image](https://github.com/Yuliya-Bychina-QA/cypress.js/blob/main/locators.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команду:
```
npx cypress run --spec cypress/e2e/lesson_locators.cy.js --browser chrome
```

## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://raw.githubusercontent.com/German-D/new_cypress/main/static/Cypress_UI.png)


## Автор
Юлия Бычина ([@yuliya9bychina](https://t.me/yuliya9bychina))
