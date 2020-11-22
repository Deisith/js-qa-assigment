import App from './App.svelte'
import { render, fireEvent, queries } from '@testing-library/svelte'

function setInputField(matcher, value, query) {
    const input = query(matcher);
    input.value = value;
}

function fillTestData({getByLabelText}) { 
    setInputField("Фамилия *", "Иванов", getByLabelText);
    setInputField("Имя *", "Иван", getByLabelText);
    setInputField("Отчество *", "Иванович", getByLabelText);
    setInputField("Дата рождения *", "01.01.1990", getByLabelText)
    setInputField("Телефон *", "+7(888)888-88-88", getByLabelText);
    setInputField("Email *", "ivan.ivanovisch@mail.foo", getByLabelText);
    setInputField("ВУЗ *","СПбТ", getByLabelText);
    setInputField("Курс *","6", getByLabelText);
    setInputField("Факультет *","Тестирования", getByLabelText);
    setInputField("Направление обучения *","Тестирования", getByLabelText)
    // setInputField("Какие направления в IT тебе интересны? *","");
    setInputField("Какие технологии тебе интересны? *","Тестирование", getByLabelText);
    setInputField("С какими технологиями работал(а) / какие изучал(а)? *","Тестирование", getByLabelText);
    // setInputField("С какого месяца 2020 года сможешь начать проходить стажировку? *","");
    setInputField("Сколько часов в неделю ты готов стажироваться? *","40", getByLabelText);
}

it('works', async () => {
    const { container, getByText, getByTestId } = render(App);
    const button = getByText("Отправить заявку на стажировку");

  
   //  2 click on   "Направить заявку на стажировку"
    await fireEvent.click(button);

// 3 expect text on page: "Ваша заявка принята" 
    // expect(component).toHaveTextContent("123")
    expect(container.textContent).toMatch("Спасибо! Ваша заявка на стажировку отправлена");
    
})



it('validates email format', async () => {
    const result = render(App); 
    const { container, getByText, getByLabelText, getByTestId } = result
    const button = getByText("Отправить заявку на стажировку");

    fillTestData(result);
    setInputField("Email *", "ivan..ivanovisch@mail.foo", getByLabelText);

    await fireEvent.click(button);

    expect(container.textContent).toMatch("Спасибо! Ваша заявка на стажировку отправлена");
})