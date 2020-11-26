<script>
	import * as dayjs from 'dayjs';
	import parsePhoneNumber from 'libphonenumber-js'


	let formWasSent = false;
	let showError = false;
	let isFormValid = false;

	let emailFieldValue = '';
	let birthDateFieldValue  = '';
	let phoneNumberFieldValue = '';

	function submitForm() {
		isFormValid = checkIfFormValid();

		if (isFormValid) {
			formWasSent = true;
			showError = false;
		} else {
			showError = true;
		}
	}

	function checkIfFormValid() {
		const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const isEmailValid = emailFieldValue.match(emailPattern);
		const isDateValid = dayjs(birthDateFieldValue, "DD MM YYYY", new Date()).isValid();
		const isPhoneNumberValid = parsePhoneNumber(phoneNumberFieldValue, 'RU').isValid();

		if (isEmailValid && isDateValid && isPhoneNumberValid) {
			return true;
		}
		return false;
	}

</script>

{#if formWasSent}
	<h1>Спасибо! Ваша заявка на стажировку отправлена</h1>
{/if}


{#if !formWasSent}
	{#if showError} 
		<h3>Пожалуйста, заполните все обязательные поля</h3>
	{/if}
	<div class="three fields">
		<div class="field">
			<label for="last_name">Фамилия <span class="required-field">*</span></label>
			<input id="last_name" type="text" name="last_name" maxlength="250" value="">
		</div>
		<div class="field">
			<label for="first_name">Имя <span class="required-field">*</span></label>
			<input id="first_name" type="text" name="first_name" maxlength="250" value="">
		</div>
		<div class="field">
			<label for="middle_name">Отчество <span class="required-field">*</span></label>
			<input id="middle_name" type="text" name="middle_name" maxlength="250" value="">
		</div>
	</div>
	
	<div class="form-spacer"></div>
	
	<div class="three fields">
		<div class="field">
			<label for="birth_date">Дата рождения <span class="required-field">*</span></label>
			<input bind:value={birthDateFieldValue} id="birth_date" type="text" placeholder="дд.мм.гггг" name="birth_date" maxlength="50" >
		</div>
		<div class="field">
			<label for="phone">Телефон <span class="required-field">*</span></label>
			<input bind:value={phoneNumberFieldValue} id="phone" type="text" placeholder="+7 (xxx) xxx-xx-xx" name="phone" maxlength="50" >
		</div>
		<div class="field">
			<label for="email">Email <span class="required-field">*</span></label>
			<input bind:value={emailFieldValue} id="email" type="text" placeholder="" name="email" maxlength="250">
		</div>
	</div>

	<div class="form-spacer"></div>

	<div class="field">
		<label for="university">ВУЗ <span class="required-field">*</span></label>
		<input id="university" type="text" name="university" maxlength="250" value="">
	</div>

	<div class="form-spacer"></div>

	<div class="three fields">
		<div class="two wide field">
			<label for="year">Курс <span class="required-field">*</span></label>
			<input id="year" type="text" placeholder="" name="year" maxlength="250" value="">
		</div>

		<div class="seven wide field">
			<label for="faculty">Факультет <span class="required-field">*</span></label>
			<input id="faculty" type="text" placeholder="" name="faculty" maxlength="250" value="">
		</div>

		<div class="seven wide field">
			<label for="field_of_study">Направление обучения <span class="required-field">*</span></label>
			<input id="field_of_study" type="text" placeholder="" name="field_of_study" maxlength="250" value="">
		</div>
	</div>

	<div class="form-spacer"></div>

	<div class="field">
		<label>Какие направления в IT тебе интересны? <span class="required-field">*</span></label> 
	</div>

	<div class="inline fields">
		<div class="field">
			<div class="ui checkbox">
				<input id="interested_in_qa" type="checkbox" name="interested_in_qa" tabindex="0" class="hidden">
				<label for="interested_in_qa" class="internship-form-inline-checkbox">QA</label>
			</div>
		</div>

		<div class="field">
			<div class="ui checkbox">
				<input id="interested_in_qa_automation" type="checkbox" name="interested_in_qa_automation" tabindex="0" class="hidden">
				<label for="interested_in_qa_automation" class="internship-form-inline-checkbox">QA Automation</label>
			</div>
		</div>

		<div class="field">
			<div class="ui checkbox">
				<input id="interested_in_devops" type="checkbox" name="interested_in_devops" tabindex="0" class="hidden">
				<label for="interested_in_devops" class="internship-form-inline-checkbox">DevOps</label>
			</div>
		</div>
	</div>

	<div class="form-spacer"></div>

	<div class="ui two fields">
		<div class="field">
			<label for="interested_in_technologies">Какие технологии тебе интересны? <span class="required-field">*</span></label>
			<textarea id="interested_in_technologies" rows="3" name="interested_in_technologies" maxlength="1000"></textarea>
		</div>
		<div class="field">
			<label for="experience_in_technologies">С какими технологиями работал(а) / какие изучал(а)? <span class="required-field">*</span></label>
			<textarea id="experience_in_technologies" rows="3" name="experience_in_technologies" maxlength="1000"></textarea>
		</div>
	</div>
  
	<div class="form-spacer"></div>
  
	<div class="two fields">
		
	  <div class="field">
		<label for="month_start">С какого месяца 2020 года сможешь <span class="nowrap">начать проходить стажировку? <span class="required-field">*</span></span></label>
		<div class="ui selection dropdown" tabindex="0">
			<select id="month_start">
				<option value="1">Январь</option>
				<option value="2">Февраль</option>
				<option value="3">Март</option>
				<option value="4">Апрель</option>
				<option value="5">Май</option>
				<option value="6">Июнь</option>
				<option value="7">Июль</option>
				<option value="8">Август</option>
				<option value="9">Сентябрь</option>
				<option value="10">Октябрь</option>
				<option value="11">Ноябрь</option>
				<option value="12">Декабрь</option>
			</select>
		</div>
	  </div> 
	  
    
	  <div class="field">
		<label for="hours_per_week_available">Сколько часов в неделю <br>ты готов стажироваться? <span class="required-field">*</span></label>
		<input id="hours_per_week_available" type="text" name="hours_per_week_available" maxlength="250" value="">
	  </div>
	</div>
  
	<div class="form-spacer"></div>
  
	<div class="field">
	  <div class="ui checkbox">
		<input type="checkbox" name="agreement" tabindex="0" class="hidden">
		<label>Подтверждаю свое согласние на <a href="downloads/policy.pdf" class="other-link">обработку персональных <span class="nowrap">данных.</span></a> <span class="required-field">*</span></label>
	  </div>
	</div>
	<br>
	<button class="ui primary button" type="submit" name="submit" on:click={submitForm}>Отправить заявку на стажировку</button>

{/if}

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>