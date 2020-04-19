const Evolucao = require('./evolucao')

//const ITENS_MOCHILA = [50, 20, 30, 35, 10, 40]
const ITENS_MOCHILA = [50, 20, 30, 35, 10, 40, 15, 33, 22, 11, 18, 16, 28, 31, 34, 70]
const LIMITE_PESO_MOCHILA = 30
const TAMANHO_POPULACAO = 6

new Evolucao(ITENS_MOCHILA, LIMITE_PESO_MOCHILA, TAMANHO_POPULACAO).evoluir()