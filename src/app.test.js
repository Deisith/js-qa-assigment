import App from './App.svelte'
import { render, fireEvent } from '@testing-library/svelte'

const setInputField = async (matcher, value, query) => {
    const input = query(matcher);
    await fireEvent.input(input, { target: { value: value } })
}

const fillCheckbox = async (labelText, matcher) => {
    const checkbox = matcher(labelText);
    await fireEvent.click(checkbox);        
};

const fillTestData = async (result) => { 
    const { getByLabelText } = result;
    await Promise.all(
        [
            setInputField("Фамилия *", "Иванов", getByLabelText),
            setInputField("Имя *", "Иван", getByLabelText),
            setInputField("Отчество *", "Иванович", getByLabelText),
            setInputField("Дата рождения *", "01.01.1990", getByLabelText),
            setInputField("Телефон *", "+7(888)888-88-88", getByLabelText),
            setInputField("Email *", "ivan.ivanovisch@mail.foo", getByLabelText),
            setInputField("ВУЗ *","СПбТ", getByLabelText),
            setInputField("Курс *","6", getByLabelText),
            setInputField("Факультет *","Тестирования", getByLabelText),
            setInputField("Направление обучения *","Тестирования", getByLabelText),
            setInputField("Какие технологии тебе интересны? *","Тестирование", getByLabelText),
            setInputField("С какими технологиями работал(а) / какие изучал(а)? *","Тестирование", getByLabelText),
            setInputField("Сколько часов в неделю ты готов стажироваться? *","40", getByLabelText),
        ]
    )
    
    await fillCheckbox("QA", getByLabelText);
    await fillCheckbox("QA Automation", getByLabelText);    
    await fillCheckbox("DevOps", getByLabelText);
    await fireEvent.input(getByLabelText("С какого месяца 2020 года сможешь начать проходить стажировку? *"), { target: { value: "Январь" } })
};

it('submits form for when filled with a correct dataset', async () => {
    const result = render(App);
    const { container, getByText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Спасибо! Ваша заявка на стажировку отправлена");
});


it('validates email format', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await setInputField("Email *", "ivan.ivanovisch@mail..foo", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates missing email domain name', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await setInputField("Email *", "ivan.ivanovisch@", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates missing email @', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await setInputField("Email *", "ivan.ivanovischmail.foo", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates phone number length', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await setInputField("Телефон *", "+7(999)888-77-665", getByLabelText);
    await fireEvent.click(button);
    
    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates phone number with letter', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await setInputField("Телефон *", "+7(999)888-77-0O", getByLabelText);
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});


it('validates birthday', async () => {
    const result = render(App);
    const { container, getByText, getByLabelText } = result;
    const button = getByText("Отправить заявку на стажировку");

    await fillTestData(result);
    await setInputField("Дата рождения *", "32.10.1995", getByLabelText); 
    await fireEvent.click(button);

    expect(container.textContent).toMatch("Пожалуйста, заполните все обязательные поля");
});