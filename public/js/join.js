// function handleCredentialResponse(response) {
//   console.log("Encoded JWT ID token: " + response.credential);
// }
// window.onload = function () {
//   google.accounts.id.initialize({
//     client_id: "YOUR_GOOGLE_CLIENT_ID",
//     callback: handleCredentialResponse
//   });
//   google.accounts.id.renderButton(
//     document.getElementById("buttonDiv"),
//     { theme: "outline", size: "large" }  // customization attributes
//   );
//   google.accounts.id.prompt(); // also display the One Tap dialog
// }
const registerFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#typeNameX').value;
    const email = document.querySelector('#typeEmailX').value;
    const password = document.querySelector('#typePasswordX').value;

    if (name && email && password) {
        const response = await fetch('api/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/login');
        }else {
            alert('User already exists');
        }
    }
}
document
    .querySelector('.signUp')
    .addEventListener('submit', registerFormHandler)