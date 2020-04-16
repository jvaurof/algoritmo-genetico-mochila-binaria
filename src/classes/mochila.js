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
    limitePeso = lp
  }

  this.setQuantidadeItens = function (qi) {
    quantidadeItens = qi
  }

  this.adicionarItem = function (item) {
    itens.push(item)
  }
}

module.exports = Mochila