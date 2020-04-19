const Individuo = require('./individuo.js')

function Populacao() {
  let tamanho
  let individuos = []
  let geracao = 0

  this.getTamanho = function () {
    return tamanho
  }

  this.getIndividuos = function () {
    return individuos.slice()
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

  this.iniciarPopulacao = function (quantidadeItens) {
    for (let j = 0; j < tamanho; j++) {
      const individuo = new Individuo()

      individuo.setCromossomoIncial(quantidadeItens)
      individuos.push(individuo)
    }
  }

  this.calcularFitness = function (mochilaItens) {
    /*calcular fitness*/
    individuos.forEach(individuo => {
      individuo.setFitness(0)

      individuo.getCromossomo().forEach((gene, index) => {
        if (gene == 1)
          individuo.setFitness(mochilaItens[index].getPeso() + individuo.getFitness())
      })
    })

    /*rankerar fitness*/
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

  this.ajustarPopulacao = function (limitePeso) {

    taxaCorte = limitePeso * 1.20

    i = individuos.filter((individuo) => {
      return individuo.getFitness() <= taxaCorte
    })
    console.log(i.length)
    if (i.length > tamanho) {
      i.splice(tamanho)
      individuos = i
    }
    //individuos.splice(tamanho)
  }

  this.exibirPopoulacao = function () {
    let cromossomo = []
    let fitness = []

    individuos.forEach((individuo, index) => {
      cromossomo[index] = individuo.getCromossomo()
      fitness[index] = individuo.getFitness()
    })
    console.table(cromossomo)
    console.table(fitness)
    console.log('geração: ', geracao)
    console.log(' ')
  }
}

module.exports = Populacao