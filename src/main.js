const Mochila = require('./classes/mochila')
const ItemMochila = require('./classes/itemMochila')
const Populacao = require('./classes/populacao')
const Reproducao = require('./classes/reproducao')

const mochila = new Mochila()
mochila.setLimitePeso(5)
mochila.setQuantidadeItens(6)

let itemMochila = new ItemMochila()
itemMochila.setPeso(10)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(20)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(30)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(40)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(50)
mochila.adicionarItem(itemMochila)

itemMochila = new ItemMochila()
itemMochila.setPeso(60)
mochila.adicionarItem(itemMochila)

const populacao = new Populacao()
populacao.setTamanho(6)
populacao.iniciar(mochila.getQuantidadeItens())
populacao.calcularFitness(mochila.getItens())

const reproducao = new Reproducao()
reproducao.reproduzir(populacao, mochila.getQuantidadeItens())