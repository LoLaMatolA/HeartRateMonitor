// function login() {
//     const username = document.getElementById("username").value;
//     const password = document.getElementById("password").value;
//     const errorMessage = document.getElementById("error-message");

//     // Perform basic validation
//     if (username.trim() === "" || password.trim() === "") {
//         errorMessage.textContent = "Please enter both username and password.";
//         return;
//     }

//     // Example: Check credentials (replace this with your authentication logic)
//     if (username === "exampleUser" && password === "examplePassword") {
//         alert("Login successful!");
//         // Redirect to a new page or perform additional actions
//     } else {
//         errorMessage.textContent = "Invalid username or password. Please try again.";
//     }
// }
// var toggle = document.getElementById("toggle");
// var container = document.getElementById("container");

// toggle.onclick = function(){
// 	container.classList.toggle('active');
// }
let user = document.querySelector('.user');
document.querySelector('#user-icon').onclick = () => {
    user.classList.toggle('active');
}
let menu = document.querySelector('.container');
document.querySelector("#menu-icon").onclick = () =>{
    user.classList.toggle('active');
}