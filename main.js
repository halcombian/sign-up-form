const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const button = document.getElementById("button");

button.addEventListener("click", () => {
	if (password.value != confirmPassword.value) {
		const errorMsg = document.createElement("p");
		const cpWrapper = document.getElementById("cp_wrapper");
		errorMsg.id = "errorMsg";
		cpWrapper.append(errorMsg);
		errorMsg.textContent = "* Passwords do not match";
		password.style.border = "1px solid rgb(200, 0, 0)";
		confirmPassword.style.border = "1px solid rgb(200, 0, 0)";
	} else if (document.getElementById("errorMsg")) {
		const error = document.getElementById("errorMsg");
		error.parentNode.removeChild(error);
		password.style.border = "1px solid #e5e7eb";
		confirmPassword.style.border = "1px solid #e5e7eb";
	}
	password.value = "";
	confirmPassword.value = "";
});
