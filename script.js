document.getElementById('calcular-btn').addEventListener('click', function () {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (!peso || peso <= 0 || !altura || altura <= 0) {
        document.getElementById('resultado').innerHTML = "<span class='erro'>Por favor, insira valores válidos de peso e altura.</span>";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    let mensagem = "";

    if (imc < 18.5) {
        mensagem = "Abaixo do peso.";
    } else if (imc < 25) {
        mensagem = "Peso normal.";
    } else if (imc < 30) {
        mensagem = "Sobrepeso.";
    } else if (imc < 35) {
        mensagem = "Obesidade grau I.";
    } else if (imc < 40) {
        mensagem = "Obesidade grau II.";
    } else {
        mensagem = "Obesidade grau III.";
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc}. ${mensagem}`;
});
