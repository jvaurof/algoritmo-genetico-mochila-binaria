const Individuo = require('./individuo.js')

function Populacao() {
  let tamanho
  let individuos = []
  let geracao = 1
  let limiteGeracoes

  this.getTamanho = function () {
    return tamanho
  }

  this.getIndividuos = function () {
    return individuos.slice()
  }

  this.getGeracao = function () {
    return geracao
  }

  this.getLimiteGeracoes = function () {
    return limiteGeracoes
  }

  this.setTamanho = function (t) {
    if (t <= 0) {
      console.log('O tamanho da população deve ser maior que 0.')
      process.exit(1)
    }

    tamanho = t % 2 == 0 ? t : ++t
  }

  this.setGeracao = function () {
    geracao++
  }

  this.setLimiteGeracoes = function (lg) {
    limiteGeracoes = lg
  }

  this.iniciarPopulacao = function (quantidadeItens) {
    for (let j = 0; j < tamanho; j++) {
      const individuo = new Individuo()

      individuo.setCromossomoIncial(quantidadeItens)
      individuos.push(individuo)
    }
  }

  this.calcularFitness = function (mochila) {
    let fitness = individuos.length

    individuos.sort((a, b) => {
      return b.getPesoTotal(mochila.getItens()) - a.getPesoTotal(mochila.getItens())
    })

    individuos.forEach(individuo => {
      individuo.setFitness(0)
      tx = mochila.getLimitePeso()

      if (individuo.getPesoTotal(mochila.getItens()) <= tx) {
        individuo.setFitness(fitness * 2)
        fitness--
      }
    })

    fitness = 1

    individuos.forEach(individuo => {
      if (individuo.getPesoTotal(mochila.getItens()) > tx) {
        individuo.setFitness(fitness)
        fitness++
      }
    })

    individuos.sort((a, b) => {
      return b.getFitness() - a.getFitness()
    })
  }

  this.adicionarFilhos = function (filho1, filho2) {
    let individuo = new Individuo()
    individuo.setCromossomo(filho1)
    individuos.push(individuo)

    individuo = new Individuo()
    individuo.setCromossomo(filho2)
    individuos.push(individuo)
  }

  this.ajustarPopulacao = function () {
    individuos.splice(tamanho)
  }

  this.exibirPopoulacao = function (mochilaItens) {
    let cromossomo = []
    let fitness = []
    let pesoTotal = []

    individuos.forEach((individuo, index) => {
      cromossomo[index] = individuo.getCromossomo()
      fitness[index] = individuo.getFitness()
      pesoTotal[index] = individuo.getPesoTotal(mochilaItens)
    })

    console.log('População:')
    console.table(cromossomo)
    console.log('Fitness:')
    console.table(fitness)
    console.log('Peso Total:')
    console.table(pesoTotal)
    console.log('geração: ', geracao)
    console.log('\n****************************\n')
  }

  this.exibirSolucaoEncontrada = function (mochila) {
    const otimo = individuos[0].getPesoTotal(mochila.getItens()) == mochila.getLimitePeso() ?
      'Ótimo Global' :
      'Ótimo Local'

    const itensMochila = mochila.getItens().filter((peso, index) => {
      return individuos[0].getCromossomo()[index] == 1
    })

    const pesoItens = itensMochila.map(item => {
      return item.getPeso()
    })

    console.log('Solução encontrada:')
    console.log(' ', otimo)
    console.log('  Individuo: ', individuos[0].getCromossomo())
    console.log('  Itens: ', pesoItens)
    console.log('  Peso total: ', individuos[0].getPesoTotal(mochila.getItens()))
  }
}

module.exports = Populacao
