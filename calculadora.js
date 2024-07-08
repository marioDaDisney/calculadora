const prompt = require('prompt-sync')({sigint: true})

let primeiroN = 0
let segundoN = 0
let resposta = 0

calculo()

function calculo() {

    primeiroN = parseInt(prompt("Digite o primeiro número: "))

        if(typeof(primeiroN) == 'number') {

            console.log(`
            1. Adição (+)
            2. Subtração (-)
            3. Multiplicação (X)
            4. Divisão (:)
            5. Porcentagem (%)
                `)
            let conta = prompt(`Qual operação você deseja fazer? `)
            
                segundoN = parseInt(prompt("\nDigite o segundo número: "))

                    if (typeof(segundoN) == 'number' ) {
                        switch(conta) {
                            case '1':
                                resposta = primeiroN + segundoN
                                console.log(`O resultado é ${resposta}`)
                            break
                            case '2':
                                resposta = primeiroN - segundoN
                                console.log(`O resultado é ${resposta}`)
                            break
                            case '3':
                                resposta = primeiroN * segundoN
                                console.log(`O resultado é ${resposta}`)
                            break
                            case '4':
                                resposta = primeiroN / segundoN
                                console.log(`O resultado é ${resposta}`)
                            break
                            case '5':
                                resposta = (primeiroN * segundoN) /100
                                console.log(`O resultado é ${resposta}`)
                            break
                            default:
                                console.log(`simbolo invalido`)
                            break
                        }
                    }else {
                        console.log('número invalido')
                        calculo()
                    }
        }else {
            console.log('número invalido')
            calculo()
        }
}