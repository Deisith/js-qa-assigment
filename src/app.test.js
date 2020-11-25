import App from './App.svelte'
import { render, fireEvent } from '@testing-library/svelte'

function setInputField(matcher, value, query) {
    const input = query(matcher);
    input.value = value;
}

const fillCheckbox = async (labelText, matcher) => {
    const checkbox = matcher(labelText);
    await fireEvent.click(checkbox);        
};

const fillTestData = async (result) => { 
    const { getByLabelText } = result;

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
    setInputField("Какие технологии тебе интересны? *","Тестирование", getByLabelText);
    setInputField("С какими технологиями работал(а) / какие изучал(а)? *","Тестирование", getByLabelText);
    // setInputField("С какого месяца 2020 года сможешь начать проходить стажировку? *","");
    setInputField("Сколько часов в неделю ты готов стажироваться? *","40", getByLabelText);
    
    await fillCheckbox("QA", getByLabelText);
    await fillCheckbox("QA Automation", getByLabelText);    
    await fillCheckbox("DevOps", getByLabelText);
    
    // fireEvent.change(getByTestId('select'), { target: { value: 2 } })
}

// it('works', async () => {
//     const { container, getByText, getByTestId } = render(App);
//     const button = getByText("Отправить заявку на стажировку");
  
//    //  2 click on   "Направить заявку на стажировку"
//     await fireEvent.click(button);

//     // 3 expect text on page: "Ваша заявка принята" 
//     expect(container.textContent).toMatch("Спасибо! Ваша заявка на стажировку отправлена");
    
// })



it('validates email format', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    setInputField("Email *", "ivan.ivanovisch@mail..foo", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});

it('validates missing email domain name', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    setInputField("Email *", "ivan.ivanovisch@", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates missing email @', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    setInputField("Email *", "ivan.ivanovischmail.foo", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates phone number lenght', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    setInputField("Телефон *", "+7(999)888-77-665", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates phone number letter', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    setInputField("Телефон *", "+7(999)888-77-0O", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});



it('validates birthday', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    setInputField("Дата рождения *", "32.10.1995", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});