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
    <label for="valorTeste">Valor para ser adicionado:</label>
    <br> <input type="text" id="fadicionar" name="fadicionar" value=""> <br>
         <input type="button" value="Adicionar" onclick="adicaoArray()">
    
    <p id="arrayfrutas"></p>
</form>
    
    
    
    
<form id="basico">
    <label for="condicao">Condição:</label><br>
    
    <!-- Alinhar o seguinte botão para esquerda  -->
    <div class="container">
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                <span class="caret"></span>
            </button>
                
            <ul class="dropdown-menu">
                <li><a href="#">Maior</a></li>
                <li><a href="#">Menor</a></li>
                <li><a href="#">Igual</a></li>
            </ul>
        </div>
    </div>

    <label for="valorTeste">Valor de Teste:</label><br>
    <input type="text" id="valorTeste" name="valorTeste" value=""><br>

    <label for="valorComparacao">Valor de Comparação:</label><br>
    <input type="text" id="valorComparacao" name="valorComparacao" value=""><br><br>
    
    <input type="button" value="rodar" onclick="submeterFomr()">
</form>

<p id="result"></p>

<script>
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    
         
    function adicaoArray() {
        
        const adicionar = document.getElementById('fadicionar').value;
        
        
        // Verifica se um elemento está presente em ''fruits'' 
        if (!fruits.includes(adicionar)){
            fruits.push(adicionar);
            
        } else {
            console.log("Elemento já está presente dentro do Array");
        }
        document.getElementById('arrayfrutas').innerText = fruits;

    }

    function submeterFomr() {
            
        // Captura os valores dos campos do formulário
        const condicao = document.getElementById('condicao').value;
        const valorTeste = document.getElementById('valorTeste').value;
        const valorComparacao = document.getElementById('valorTeste').value;

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
