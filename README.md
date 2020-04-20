# Algoritmo genético aplicado ao caso da mochila binária

Algoritmo desenvolvido como um dos requisitos do mestrado em computação aplicada da Universidade Estadual de Ponta Grossa - UEPG

## Pré-requisitos

- node

Verificar se o node está instalado:
``` 
node -v 
```

Instruções para instalação aqui: https://nodejs.org/en/

- yarn

Verificar se o yarn está instalado:
```
yarn -v 
```
Instruções para instalação aqui: https://yarnpkg.com/

## Começando

- Primeiramente é preciso fazer o download do projeto
```
 git clone https://github.com/jvaurof/algoritmo-genetico-mochila-binaria.git 
```

- Baixar as dependências

Este comando é necessário somente uma única vez 
```
yarn
```

- Preencher os parâmetros de entrada no arquivo src/main.js

![Captura de tela de 2020-04-19 20-17-36](https://user-images.githubusercontent.com/33234056/79702831-fc155200-827d-11ea-944c-6ee0194a57fa.png)

1. ITENS_MOCHILA - itens que se deseja colocar na mochila
2. LIMITE_PESO_MOCHILA - capacidade de peso da mochila
3. TAMANHO_POPULACAO - tamanho da população
4. LIMITE_GERACOES - quantidade máxima de gerações, caso não informado a quantidade máxima de gerações será infinita

- Executar o algoritmo
```
node src/main.js
```

## Fontes
- Algoritmo Genético aplicado ao Problema da Mochila

https://www.youtube.com/watch?v=FYF6lS_BHKA&t=11s

- Uma Introdução Aos Métodos Heurísticos

https://www.youtube.com/watch?v=I7dgIJYaVmk
