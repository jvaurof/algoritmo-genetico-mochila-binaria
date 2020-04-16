const Mochila = require('./classes/mochila.js')
const ItemMochila = require('./classes/itemMochila.js')
const Populacao = require('./classes/populacao.js')

const mochila = new Mochila()

mochila.setLimitePeso(5)
mochila.setQuantidadeItens(3)

let itemMochila = new ItemMochila()
itemMochila.setPeso(10)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(20)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(30)
mochila.adicionarItem(itemMochila)

const populacao = new Populacao()

populacao.setTamanho(6)
populacao.iniciar(mochila.getQuantidadeItens())
populacao.calcularFitness(mochila.getItens())

