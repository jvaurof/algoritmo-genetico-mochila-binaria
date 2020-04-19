const Mochila = require('./mochila')
const Populacao = require('./populacao')
const Reproducao = require('./reproducao')
const Mutacao = require('./mutacao')

function Evolucao(itensMochila, limitePesoMochila, tamanhoPopulacao, limiteGeracoes = -1) {
  const mochila = new Mochila()
  mochila.setItens(itensMochila)
  mochila.setLimitePeso(limitePesoMochila)

  const populacao = new Populacao()
  populacao.setTamanho(tamanhoPopulacao)
  populacao.setLimiteGeracoes(limiteGeracoes)

  this.evoluir = function () {
    console.time('  Tempo de execução')

    populacao.iniciarPopulacao(mochila.getQuantidadeItens())
    populacao.calcularFitness(mochila)

    do {
      populacao.exibirPopoulacao(mochila.getItens())

      if (mochila.definirParada(populacao)) {
        populacao.exibirSolucaoEncontrada(mochila)
        break
      }
      const reproducao = new Reproducao()
      reproducao.reproduzir(populacao, mochila.getQuantidadeItens())

      const mutacao = new Mutacao()
      mutacao.mutar(populacao, mochila.getQuantidadeItens())

      populacao.calcularFitness(mochila)
      populacao.ajustarPopulacao()
      populacao.setGeracao()
    } while (true)

    console.timeEnd('  Tempo de execução')
    console.log('\n')
  }
}

module.exports = Evolucao