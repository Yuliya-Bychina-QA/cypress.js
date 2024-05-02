describe('e2e на покупку аватара', function () {

    it('Покупка нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.me/login'); // Зашли на сайт
                 
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); // Нашли поле и ввели верный логин
         cy.get('#password').type('USER_PASSWORD'); // Нашли поле и ввели верный пароль
         cy.get('.auth__button').click(); // Нажала кнопку войти

         cy.get('.header__btns > [href="/shop"]').click(); // Нажала кнопку Магазин
         cy.get('.available > button').first().click(); // кликаем по кнопке Купить у первого доступного аватара

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4685 1778 3553 3274'); // Нашли поле и ввели номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1126'); // Нашли поле и ввели срок
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Нашли поле и ввели код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Юля'); // Нашли поле и ввели имя
         cy.get('.pay-btn').click(); // Нажала кнопку оплатить

         cy.get('#cardnumber').type('56456'); // Нашли поле и ввели код из СМС
         cy.get('.payment__submit-button').click(); // Нажала кнопку отправить

         cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // Проверка текста ответа
         cy.get('.payment__font-for-success').should('be.visible'); // Ответ виден пользователю

        })
    })
 