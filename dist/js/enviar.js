


Email.send({
    SecureToken:"C973D7AD-F097-4B95-91F4-40ABC5567812",
    To: 'bocardidevcompany@gmail.com',
    From: document.getElementById('email').value,
    Subject: 'Novo formulário de contato',
    Body: "Nome: " + document.getElementById('name').value + "<br>" +
        "Email: " + document.getElementById('email').value + "<br>" +
        "Mensagem: " + document.getElementById('message').value,
}).then(
    message => alert("Email enviado com sucesso!")
);