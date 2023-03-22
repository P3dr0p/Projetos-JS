var inTitulo = document.getElementById("inTitulo");
var inDuracao = document.getElementById("inDuracao");
var outTitulo = document.getElementById("outTitulo");
var outResposta = document.getElementById("outResposta")

var titulo = inTitulo.value;
var duracao = Number(inDuracao.value);
var horas = Math.floor(duracao / 60);

outResposta.textContent = `${horas} hora(s) e ${minutos}minuto(s)`;
var btConverter = document.getElenentById("btConverter");
btConverter.addEventListener("click", converterDuracao);