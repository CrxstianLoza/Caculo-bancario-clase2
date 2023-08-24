/**
 * Capturar los textos
 */

const depositoTexto = document.getElementById('depositoActual'),
        retiroTexto = document.getElementById('retiroActual'),
        balanceTexto = document.getElementById('balanceActual'),

        /*
        Capturar los imput
        */ 

        inputdeposito = document.getElementById('depositoInput'),
        inputRetiro=document.getElementById('retiroInput'),

        /**
         * Capturar botones
         */

        btnDeposito = document.getElementById('calcularDeposito'),
        btnRetiro= document.getElementById('calcularRetiro')

        /**
         * Agregar evento de deposito
         */

        btnDeposito.addEventListener('click',(event)=>{
            const valorDeposito = inputdeposito.value
            const totalDeposito = Number(balanceTexto.innerText)+Number(valorDeposito)
            const totalBalance = Number(balanceTexto.innerText)+Number(valorDeposito)
            depositoTexto.innerHTML = totalDeposito
            balanceTexto.innerHTML = totalBalance

            inputdeposito.value = ''
        })

        /**
         * Evento de retiro
         */

        btnRetiro.addEventListener('click',(event)=>{
            const valorRetiro = inputRetiro.value

            if(valorRetiro == 0){
                
                alert('No tenes nada man')
                return
            }

            if(Number(valorRetiro) > Number(balanceTexto.innerText)){

                alert('No hay plata en tu cuenta')
                return

            }

            alert('Retiro Exitoso')

                
            const totalDeposito = Number(balanceTexto.innerText)+Number(valorDeposito)
            const totalBalance = Number(balanceTexto.innerText)+Number(valorDeposito)
            depositoTexto.innerHTML = totalDeposito
            balanceTexto,innerHTML = totalBalance

            inputdeposito.value = ''
        })
        