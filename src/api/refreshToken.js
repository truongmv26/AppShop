import saveToken from './saveToken';

const refreshToken = (token) => {
    fetch('http://192.168.64.2/api/refresh_token.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({ token: token })
    }).then(res => res.text())
    .then(result => saveToken(result));
};

export default refreshToken;