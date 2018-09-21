const register = (email, name, password) => (
    fetch('http://192.168.64.2/api/register.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({email: email.toLowerCase(), name: name, password: password})
    }).then(res => res.text())
)

module.exports = register;