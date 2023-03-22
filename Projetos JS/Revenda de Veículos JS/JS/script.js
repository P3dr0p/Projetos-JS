var inVeiculo = document.getElementById("inVeiculo");
var inPreco = document.getElenentById("inPreco");
var outVeiculo = document.getElementById("outVeiculo");
var outEntrada = document.getElementById("outEntrada");
var outParcela = document.getElementById("outParcela");

var veiculo = inVeiculo.value;
var preço = Number(inPreco.value);

var entrada = preço * 0.50;
var parcela = (preço * 0.50) / 12;

outVeiculo.textContent = `Promoção: ${veiculo}`;
outEntrada.textContent = `Entrada de R$: ${entrada.toFixed(2)}`;
outParcela.textContent = `+ 12x de R$: ${parcela.toFixed(2)}`;

var btVerPronocao = document.getElementById("btVerPromocao");
btVerPronocao.addEventListener("click”, mostrarPromocao");