<script>
	export let name;
	let formWasSent = false;

	function submitForm() {
		formWasSent = true;
	}
</script>

{#if formWasSent}
	<h1>Спасибо! Ваша заявка на стажировку отправлена</h1>
{/if}

<!-- <form class="ui form" method="post" action="#form-anchor"> -->
{#if !formWasSent}

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
			<input id="birth_date" type="text" placeholder="дд.мм.гггг" name="birth_date" maxlength="50" value="">
		</div>
		<div class="field">
			<label for="phone">Телефон <span class="required-field">*</span></label>
			<input id="phone" type="text" placeholder="+7 (xxx) xxx-xx-xx" name="phone" maxlength="50" value="">
		</div>
		<div class="field">
			<label for="email">Email <span class="required-field">*</span></label>
			<input id="email" type="text" placeholder="" name="email" maxlength="250" value="">
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
		<input type="checkbox" name="interested_in_qa" tabindex="0" class="hidden">
		<label class="internship-form-inline-checkbox">QA</label>
		</div>
	</div>

	<div class="field">
		<div class="ui checkbox">
		<input type="checkbox" name="interested_in_qa_automation" tabindex="0" class="hidden">
		<label class="internship-form-inline-checkbox">QA Automation</label>
		</div>
	</div>

	<div class="field">
		<div class="ui checkbox">
			<input type="checkbox" name="interested_in_devops" tabindex="0" class="hidden">
			<label class="internship-form-inline-checkbox">DevOps</label>
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
		<label>С какого месяца 2020 года сможешь <span class="nowrap">начать проходить стажировку? <span class="required-field">*</span></span></label>
		<div class="ui selection dropdown" id="month_start" tabindex="0">
			<select>
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
		  <!-- <input type="hidden" name="month_start">
		  <i class="dropdown icon"></i>
		  <div class="default text"></div>
		  <div class="menu" tabindex="-1">
			<div class="item" data-value="1">Январь</div>
			<div class="item" data-value="2">Февраль</div>
			<div class="item" data-value="3">Март</div>
			<div class="item" data-value="4">Апрель</div>
			<div class="item" data-value="5">Май</div>
			<div class="item" data-value="6">Июнь</div>
			<div class="item" data-value="7">Июль</div>
			<div class="item" data-value="8">Август</div>
			<div class="item" data-value="9">Сентябрь</div>
			<div class="item" data-value="10">Октябрь</div>
			<div class="item" data-value="11">Ноябрь</div>
			<div class="item" data-value="12">Декабрь</div>
		  </div> -->
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
		<!-- <div class="g-recaptcha" data-sitekey="6Ld_yJ0UAAAAAFwoZJZPPI8Z7GEup2UXOn9sXyEf"><div style="width: 304px; height: 78px;"><div><iframe src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Ld_yJ0UAAAAAFwoZJZPPI8Z7GEup2UXOn9sXyEf&amp;co=aHR0cHM6Ly93d3cuZGlucy5ydTo0NDM.&amp;hl=ru&amp;v=UFwvoDBMjc8LiYc1DKXiAomK&amp;size=normal&amp;cb=79nd39m3gv8m" width="304" height="78" role="presentation" name="a-x0y2pcziidco" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe></div><textarea id="g-recaptcha-response" name="g-recaptcha-response" class="g-recaptcha-response" style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea></div><iframe style="display: none;"></iframe></div> -->
	<br>
	<button class="ui primary button" type="submit" name="submit" on:click={submitForm}>Отправить заявку на стажировку</button>
<!-- </form> -->
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