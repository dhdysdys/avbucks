$(document).ready(function(){

    $('.regiss').focus(function(){
            $(this).css('background-color','khaki');
        });
});


var form = document.getElementsByTagName('form')[0]

form.onsubmit = function(e){
	e.preventDefault();
	let formData = new FormData(form)
	let email = formData.get('email')
	let password = formData.get('pass')
	let cpass = formData.get('confpass')
	let address = formData.get('address')
	let gender = formData.get('gender')
	let dob = formData.get('birth')
	let agree = formData.get('terms')
	let submit = formData.get('submit')

	if(!email.endsWith('@gmail.com') && !email.endsWith('yahoo.com') ){
		alert('Email must ends with "gmail.com" or "yahoo.com" ');
	}else if(password.length < 6 || password.length > 15){
		alert('Password must be between 6 and 15 characters!');
	}else if(cpass != password){
		alert("Confirm password doesn't match!");
	}else if(address.indexOf('Street') == -1){
		alert('Address must ends with "Street" ');
	}else if(gender !== "Male" && gender !== "Female"){
		alert('Gender must be between Male of Female');
	}else if(!agree){
		alert('You must fill the terms!');
	}else{
		if(confirm("Do you want to register?")){
			alert('Success register!');
			form.reset();
		}
	}

}

	// }else if(!email.endsWith('@gmail.com') && !email.endsWith('yahoo.com')){
	// 	alert('Email harus diakhir @gmail.com');
	// }else if(address.indexOf('street') == -1){
	// 	alert('Alamat harus ada kata street');
	// }else if(gender !== 'Male' && gender !== 'Female'){
	// 	alert('Gender harus diantara Male atau Female');
	// }else if(!agree ){
	// 	alert('Anda harus setuju dengan persyaratan!');
	// }else{
	// 	if(prompt("Ketik register untuk melanjutkan") === "Register"){
	// 		if(confirm("Anda yakin mau register?")){
	// 			alert('Success register data!');	
	// 		}
	// 	}
	// }