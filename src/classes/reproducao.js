function Reproducao() {

  this.reproduzir = function (populacao, quantidadeItens) {
    let selecionados = []
    let individuos = populacao.getIndividuos()

    /*sortear individuos pela proporção do fitness*/
    populacao.getIndividuos().forEach(() => {
      let somatorioFitness = 0

      individuos.forEach(element => {
        somatorioFitness += element.getFitness()
      })

      let sorteio = Math.floor(Math.random() * somatorioFitness)
      let posicaoSorteada = -1

      do {
        posicaoSorteada++
        sorteio -= individuos[posicaoSorteada].getFitness()
      } while (sorteio > 0)

      selecionados.push(individuos[posicaoSorteada])
      individuos.splice(posicaoSorteada, 1)
    })

    /*cruzamento*/
    for (i = 0; i < populacao.getTamanho(); i = i + 2) {
      /*sortear ponto de cruzamento*/
      sorteio = Math.floor(Math.random() * (quantidadeItens - 1))
      sorteio++

      const pai1 = selecionados[i].getCromossomo()
      const pai2 = selecionados[i + 1].getCromossomo()

      const parte1 = pai1.splice(sorteio)
      const parte2 = pai2.splice(sorteio)

      const filho1 = [...pai1, ...parte2]
      const filho2 = [...pai2, ...parte1]

      populacao.adicionarFilhos(filho1, filho2)
    }
  }
}

module.exports = Reproducao