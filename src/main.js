const Mochila = require('./classes/mochila.js')
const ItemMochila = require('./classes/itemMochila.js')
const Populacao = require('./classes/populacao.js')

const mochila = new Mochila()

mochila.setLimitePeso(5)
mochila.setQuantidadeItens(3)

const itemMochila1 = new ItemMochila()

itemMochila1.setPeso(10)
mochila.adicionarItem(itemMochila1)

const itemMochila2 = new ItemMochila()

itemMochila2.setPeso(20)
mochila.adicionarItem(itemMochila2)


const itemMochila3 = new ItemMochila()

itemMochila3.setPeso(30)
mochila.adicionarItem(itemMochila3)

const populacao = new Populacao()

populacao.setTamanho(6)
populacao.iniciar(mochila.getQuantidadeItens())
populacao.calcularFitness(mochila.getItens())
populacao.rankearFitness()
populacao.definirId()
