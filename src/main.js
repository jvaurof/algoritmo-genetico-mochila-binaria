const Mochila = require('./classes/mochila')
const ItemMochila = require('./classes/itemMochila')
const Populacao = require('./classes/populacao')
const Reproducao = require('./classes/reproducao')
const Mutacao = require('./classes/mutacao')

const peso = [10, 11, 15, 13, 20, 32, 5, 0, 1, 2, 3, 6, 2, 11, 15, 8, 8, 14, 7, 4, 23, 25, 22, 20, 11, 12, 16, 17, 18, 19, 36, 14, 19, 31, 34, 37, 2, 25, 12, 10, 11, 28, 10, 11, 15, 13, 20, 32, 5, 0, 1, 2, 3, 6, 2, 11, 15, 8, 8, 14, 7, 4, 23, 25, 22, 20, 11, 12, 16, 17, 18, 19, 36, 14, 19, 31, 34, 37, 2, 25, 12, 10, 11, 28, 10, 11, 15, 13, 20, 32, 5, 0, 1, 2, 3, 6, 2, 11, 15, 8, 8, 14, 7, 4, 23, 25, 22, 20, 11, 12, 16, 17, 18, 19, 36, 14, 19, 31, 34, 37, 2, 25, 12, 10, 11, 28]

const mochila = new Mochila()
mochila.setLimitePeso(5)
mochila.setQuantidadeItens(peso.length)

let itemMochila = new ItemMochila()

peso.forEach((element) => {
  itemMochila = new ItemMochila()
  itemMochila.setPeso(element)
  mochila.adicionarItem(itemMochila)
})

const populacao = new Populacao()
populacao.setTamanho(6)
populacao.iniciarPopulacao(mochila.getQuantidadeItens())
populacao.calcularFitness(mochila.getItens())

let cont = 0

do {
  const reproducao = new Reproducao()
  reproducao.reproduzir(populacao, mochila.getQuantidadeItens())

  const mutacao = new Mutacao()
  mutacao.mutar(populacao, mochila.getQuantidadeItens())

  populacao.calcularFitness(mochila.getItens())
  populacao.ajustarPopulacao()
  populacao.exibirPopoulacao()

  cont++
} while (cont < 10000)