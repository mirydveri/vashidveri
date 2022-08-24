












/*"use strict"

document.addEventListener('DOMContentLoaded',function (){

	const form = document.getElementById('form');
	form.addEventListener('submit',formSend);

	async function formSend(e){
		e.preventDefault();


		let error = formValidate(form);

		let formData = new FormaData(form);
		formData.append('image',formImage.files[0]);

		if (error===0) {
			form.classlist.add('sending');
			let response = await fetch('sendmail.php',{
				method: 'POST',
				body: formaData
			});
			if (response.ok){
				let result = await response.json();
				alert(resualt.message);
				formPreview.innerHTML='';
				form.reset();
			}else{
				alert("Ошибка");
			}
		}else {
			alert('Заполние обязательные поля');
		}

	}


	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorALL('._req');


		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];

			if (input.classlist.contains('._phone')) {
				if (phoneTest(input)) {
					formAddError(input);
					error++;
				}
			}else if(input.getAttribute("type")==="checkbox" && input.checked===false){
				formAddError{input};
				error++;
			}else{
				if (input.value===''){
					formAddError(input);
					error++;
				}
			}
		}
	}

	function formAddError(input){
		input.parentElement.classlist.add('._error')
		input.classlist.add('._error')
	}

	function formRemoveError(input){
		input.parentElement.classlist.add('._error')
		input.classlist.add('._error')
	}	

	}
*/