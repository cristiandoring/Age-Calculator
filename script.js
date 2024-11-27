function calculate(){
    //armazena o valor retirado do input (formato String)
    const dateValue = document.getElementById('date').value.trim()
    
    //limpa o - da String e transforma num vetor tipo String de três posições
    //dateParts = ["aaaa", "mm", "dd"];
    const dateParts = dateValue.split('-')

    //converte os elementos de cada posição do vetor para inteiro em base 10
    const year = parseInt(dateParts[0], 10)
    const month = parseInt(dateParts[1], 10)
    const day = parseInt(dateParts[2], 10)
    
    //pegar data atual 
    const currentDayOfYear = new Date()

    //separa em ano, mês e dia através dos métodos
    const currentYear = currentDayOfYear.getFullYear()
    const currentMonth = currentDayOfYear.getMonth() + 1 
    const currentDay = currentDayOfYear.getDate()

    //calcula as diferenças
    let years = currentYear - year
    let months = currentMonth - month
    let days = currentDay - day

    
    //correção dos dados caso o aniversario ainda não tenha ocorrido
    //se a diferença do mês der negativo, desconta um ano e atribui +12 ao mês 
    if(months < 0){
        years --
        months +=  12
    }

    //se a diferença do dia der negativo, atribui o último dia do mês aos dias por meio do 0 no objeto Date
    if(days < 0){
        const lastMonth = new Date(currentYear, currentMonth - 1, 0)
        days += lastMonth.getDate()
        months--
        
        if (months < 0) { // Se os meses ficarem negativos após ajuste, descontamos os anos e adicionamos os meses
            months += 12;
            years--;
        }
    }

    //testa se o ano digitado é maior que o ano atual 
    if(year > currentYear){
        document.getElementById("response").innerHTML = `Write a correct date`
        document.getElementById("response").style.color = "red"
        return
    }
    else if(year === currentYear){
        if(month > currentMonth){
            document.getElementById("response").innerHTML = `Write a correct date`
            document.getElementById("response").style.color = "red"
            return
        }
        else if (month === currentMonth && day > currentDay){
             document.getElementById("response").innerHTML = `Write a correct date`
             document.getElementById("response").style.color = "red"
             return
        }
        else{
            response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months and ${days} days old.`;
            document.getElementById("response").style.color = "black"
            return
        }
    }

    else{
        //teste ano bissexto
        if (month == 2){
            if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                if(day > 29){
                    document.getElementById("response").innerHTML = `Write a correct date`
                    document.getElementById("response").style.color = "red"
                    return
                }
                else{
                    response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months and ${days} days old.`;
                    document.getElementById("response").style.color = "black"
                    return
                }
            }
            else{
                if(day > 28){
                    document.getElementById("response").innerHTML = `Write a correct date`
                    document.getElementById("response").style.color = "red"
                    return
                }
                else{
                    response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months and ${days} days old.`;
                    document.getElementById("response").style.color = "black"
                    return
                }
                
            }
        }

        //testa se foi digitado um dia maior que 31 em meses que tem 30 dias ou menos
        else if(month == 4 || month == 6 || month == 9 || month == 11){
            if(day > 30){
                document.getElementById("response").innerHTML = `Write a correct date`
                document.getElementById("response").style.color = "red"
                return
            }
            else{
                response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months and ${days} days old.`;
                document.getElementById("response").style.color = "black"
                return
            }
        }
        else{
            response = document.getElementById("response").innerHTML = `You have ${years} years, ${months} months and ${days} days old.`
            document.getElementById("response").style.color = "black"
            return
        }   
    }   
}