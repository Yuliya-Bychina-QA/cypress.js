import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)');
          });
    afterEach('Конец теста', function () {
        cy.get(result_page.title).should('be.visible'); // Ответ виден пользователю
        cy.get(result_page.close).should('be.visible'); // Есть крестик и он виден
        });


    it('Верный пароль и верный логин', function () {
         cy.get(main_page.email).type(data.login); // Нашли поле и ввели верный логин
         cy.get(main_page.password).type(data.password); // Нашли поле и ввели верный пароль
         cy.get(main_page.login_button).click(); // Нажала кнопку войти
         cy.wait (5000);
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка текста ответа
        })

    it('Неверный пароль и верный логин', function () {
         cy.get(main_page.email).type(data.login); // Нашли поле и ввели верный логин
         cy.get(main_page.password).type('iLoveqastudio2'); // Нашли поле и ввели неверный пароль
         cy.get(main_page.login_button).click(); // Нажала кнопку войти
         cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка текста ответа
           })

    it('Верный пароль и неверный логин', function () {  
         cy.get(main_page.email).type('german@dolnikovvv.ru'); // Нашли поле и ввели неверный логин
         cy.get(main_page.password).type(data.password); // Нашли поле и ввели верный пароль
         cy.get(main_page.login_button).click(); // Нажала кнопку войти
         cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверка текста ответа
           })

    it('Проверка валидации (нет собачки в логине)', function () {    
         cy.get(main_page.email).type('germandolnikov.ru'); // Нашли поле и ввели логин без собачки
         cy.get(main_page.password).type(data.password); // Нашли поле и ввели верный пароль
         cy.get(main_page.login_button).click(); // Нажала кнопку войти
         cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверка текста ответа
           })

    it('Проверка восстановление пароля', function () {  
         cy.get(main_page.fogot_pass_btn).click(); // Нажала восстановить пароль
         cy.get(recovery_password_page.email).type(data.login); //Ввела почту для восстановления
         cy.get(recovery_password_page.send_button).click(); // Нажала кнопку отправить код
         cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // Проверка текста ответа
           })

    it('Приведение к строчным буквам в логине', function () {     
         cy.get(main_page.email).type('GeRmAn@dOlNiKov.ru'); // Нашли поле и ввели логин разными буквами
         cy.get(main_page.password).type(data.password); // Нашли поле и ввели верный пароль
         cy.get(main_page.login_button).click(); // Нажала кнопку войти
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверка текста ответа
           })
  })
 

