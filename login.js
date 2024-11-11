document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // フォームのデフォルト動作を停止

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('message').textContent = "ログイン成功!";
            // 認証成功時にBingのホームページにリダイレクト
            window.location.href = "https://www.bing.com";
        } else {
            document.getElementById('message').textContent = "メールアドレスまたはパスワードが間違っています。";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = "エラーが発生しました。";
    });
});
