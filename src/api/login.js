const login = (email, password) => (
    fetch('http://192.168.64.2/api/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ email: email.toLowerCase(), password: password })
    }).then(res => res.json())
)

module.exports = login;