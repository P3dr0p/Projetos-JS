var inQuilo = document.getElementById("inQuilo");
var inConsumo = document.getElementById("inConsumo");
var outValor = document.getElementById("outValor")

var quilo = Nunber(inQuilo.value);
var consumo = Nunber(inConsumo.value);

var valor = (quilo / 1000) * consumo;
outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2);

var btCalcular = document.getElementById("btCalcular");
btCalcular.addEventListener("click", calcularPreco);