document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;
    const dateOfBirth = document.getElementById('date_of_birth').value
    const gender = document.getElementById('gender').value
    const address = document.getElementById('address').value;

    fetch('http://localhost:3000/patients/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            phone,
            date_of_birth: dateOfBirth,
            gender,
            address,
        }),    
    })  

    .then(response => response.json())
    .then(data => {
        if (data.success){
            alert("Registration is a success")
            window.location.href = 'dashboard.html'
        } else {
            alert(data.message)
        }
    })
    .catch(error => console.error('Error:', error))
})