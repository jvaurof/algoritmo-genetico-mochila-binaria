const ItemMochila = require('./itemMochila')

function Mochila() {
  let limitePeso
  let quantidadeItens
  let itens = []

  this.getLimitePeso = function () {
    return limitePeso
  }

  this.getQuantidadeItens = function () {
    return quantidadeItens
  }

  this.getItens = function () {
    return itens
  }

  this.setLimitePeso = function (lp) {
    let i = itens.slice()

    i.sort((a, b) => {
      return a.getPeso() - b.getPeso()
    })

    if (lp < i[0].getPeso()) {
      console.log('Solução: 0 itens.\nLimite de peso inferior ao item de menor peso.')
      process.exit(1)
    }

    limitePeso = lp
  }

  this.setItens = function (i) {
    i.forEach((item) => {
      itemMochila = new ItemMochila()
      itemMochila.setPeso(item)
      itens.push(itemMochila)
    })

    quantidadeItens = itens.length
  }

  this.definirParada = function (populacao) {
    return populacao.getIndividuos().find(individuo => {

      return individuo.getPesoTotal(itens) == limitePeso
    });
  }
}

module.exports = Mochila