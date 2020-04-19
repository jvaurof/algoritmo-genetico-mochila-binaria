const Mochila = require('./classes/mochila')
const Populacao = require('./classes/populacao')
const Reproducao = require('./classes/reproducao')
const Mutacao = require('./classes/mutacao')

function Evolucao(itensMochila, limitePesoMochila, tamanhoPopulacao) {
  /* parâmetros de entrada */
  const mochila = new Mochila()
  mochila.setItens(itensMochila)
  mochila.setLimitePeso(limitePesoMochila)

  const populacao = new Populacao()
  populacao.setTamanho(tamanhoPopulacao)
  /*************************/

  this.evoluir = function () {

    populacao.iniciarPopulacao(mochila.getQuantidadeItens())
    populacao.calcularFitness(mochila.getItens())

    do {
      populacao.setGeracao()

      if (mochila.definirParada(populacao)) {
        populacao.exibirPopoulacao()
        break
      }

      const reproducao = new Reproducao()
      reproducao.reproduzir(populacao, mochila.getQuantidadeItens())

      const mutacao = new Mutacao()
      mutacao.mutar(populacao, mochila.getQuantidadeItens())

      populacao.calcularFitness(mochila.getItens())
      populacao.ajustarPopulacao(mochila.getLimitePeso())
      populacao.exibirPopoulacao()
    } while (true)

  }

  /* for (let i = 0; i < 10; i++) {
    populacao.setGeracao()
  
    if (mochila.definirParada(populacao)) {
      populacao.exibirPopoulacao()
      console.log('oi')
      //   break
    }
  
    const reproducao = new Reproducao()
    reproducao.reproduzir(populacao, mochila.getQuantidadeItens())
  
    const mutacao = new Mutacao()
    mutacao.mutar(populacao, mochila.getQuantidadeItens())
  
    populacao.calcularFitness(mochila.getItens())
    populacao.ajustarPopulacao(mochila.getLimitePeso())
    populacao.exibirPopoulacao()
  }   */
}

module.exports = Evolucao