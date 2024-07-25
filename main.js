<!DOCTYPE html>
<html>
<head>
    <style> 
        .container {
            display: flex;
            justify-content: flex-start;
            width: 100%;
        }
    </style>
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<center><h2>Formulário</h2></center>
    
<form id="formParaArray">
    <label for="valorTeste">Valor para ser adicionado na lista:</label>
    <br> <input type="text" id="fadicionar" name="fadicionar" value=""> <br>
         <input type="button" value="Adicionar" onclick="adicaoArray()">
    
    <p id="arrayfrutas"></p>
</form>
    
<form id="basico">
    <label for="condicao">Condição:</label><br>
    
    <div class="container">
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                Selecione
                <span class="caret"></span>
            </button>
                
            <ul class="dropdown-menu" id="condicao">
                <li><a href="#" onclick="setCondicao('maior')">></a></li>
                <li><a href="#" onclick="setCondicao('menor')"><</a></li>
                <li><a href="#" onclick="setCondicao('igual')">=</a></li>
            </ul>
        </div>
    </div>
    
    
    <label for="valorTeste">Valor de Teste:</label><br>
    <input type="text" id="valorTeste" name="valorTeste" value=""><br>

    <label for="valorComparacao">Valor de Comparação:</label><br>
    <input type="text" id="valorComparacao" name="valorComparacao" value=""><br><br>
    
    <input type="button" value="Rodar" onclick="submeterForm()">
</form>

<p id="result"></p>

<script>
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    var msgErro = "Elemento já esta presente dentro da lista"
    
    let selectedCondition = ''; // Variável para armazenar a condição selecionada
         
    function adicaoArray() {
        let adicionar = document.getElementById('fadicionar').value;
        adicionar = adicionar.charAt(0).toUpperCase() + adicionar.slice(1);
        
        // Verifica se um elemento está presente em ''fruits'' 
        if (!fruits.includes(adicionar)){
            fruits.push(adicionar);
            document.getElementById('arrayfrutas').innerText = fruits;
        } else {
            document.getElementById('arrayfrutas').innerText = msgErro;
        }
        
    }

    function setCondicao(condicao) {
        selectedCondition = condicao;
    }

    function submeterForm() {
        // Captura os valores dos campos do formulário
        const valorTeste = document.getElementById('valorTeste').value;
        const valorComparacao = document.getElementById('valorComparacao').value;

        // Processa os dados
        let result = '';
        if (selectedCondition === 'igual') {
            result = (valorTeste === valorComparacao) ? 'Os valores são iguais' : 'Os valores são diferentes';
        } else if (selectedCondition === 'maior') {
            result = (valorTeste > valorComparacao) ? 'O valor de teste é maior' : 'O valor de teste não é maior';
        } else if (selectedCondition === 'menor') {
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
