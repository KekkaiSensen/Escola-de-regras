< !DOCTYPE html >
    <html>
        <body>

            <h2>Formulário HTML com JavaScript</h2>

            <form id="myForm">
                <label for="fcondicao">Condição:</label><br>
                    <input type="text" id="fcondicao" name="fcondicao"><br>

                        <label for="fname">Valor de Teste:</label><br>
                            <input type="text" id="fname" name="fname" value="John"><br>

                                <label for="lname">Valor de Comparação:</label><br>
                                    <input type="text" id="lname" name="lname" value="Doe"><br><br>
                                        <input type="button" value="Submit" onclick="submitForm()">
                                        </form>

                                        <p id="result"></p>

                                        <script>
                                            function submitForm() {
  // Captura os valores dos campos do formulário
  const condicao = document.getElementById('fcondicao').value;
                                            const valorTeste = document.getElementById('fname').value;
                                            const valorComparacao = document.getElementById('lname').value;

                                            // Processa os dados
                                            let result = '';
                                            if (condicao === 'igual') {
                                                result = (valorTeste === valorComparacao) ? 'Os valores são iguais' : 'Os valores são diferentes';
  } else if (condicao === 'maior') {
                                                result = (valorTeste > valorComparacao) ? 'O valor de teste é maior' : 'O valor de teste não é maior';
  } else if (condicao === 'menor') {
                                                result = (valorTeste < valorComparacao) ? 'O valor de teste é menor' : 'O valor de teste não é menor';
  } else {
                                                result = 'Condição inválida';
  }

                                            // Exibe o resultado
                                            document.getElementById('result').innerText = result;
}
                                        </script>

                                    </body>
                                    </html>
