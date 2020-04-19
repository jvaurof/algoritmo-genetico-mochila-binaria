const Mochila = require('./mochila')
const Populacao = require('./populacao')
const Reproducao = require('./reproducao')
const Mutacao = require('./mutacao')

function Evolucao(itensMochila, limitePesoMochila, tamanhoPopulacao) {
  const mochila = new Mochila()
  mochila.setItens(itensMochila)
  mochila.setLimitePeso(limitePesoMochila)

  const populacao = new Populacao()
  populacao.setTamanho(tamanhoPopulacao)

  this.evoluir = function () {

    populacao.iniciarPopulacao(mochila.getQuantidadeItens())
    populacao.calcularFitness(mochila)

    do {
      if (mochila.definirParada(populacao))
        break

      const reproducao = new Reproducao()
      reproducao.reproduzir(populacao, mochila.getQuantidadeItens())

      const mutacao = new Mutacao()
      mutacao.mutar(populacao, mochila.getQuantidadeItens())

      populacao.calcularFitness(mochila)
      populacao.exibirPopoulacao(mochila.getItens())
      populacao.ajustarPopulacao()
      populacao.setGeracao()
      // populacao.exibirPopoulacao(mochila.getItens())
    } while (true)

    populacao.exibirPopoulacao(mochila.getItens())
  }
}

module.exports = Evolucao