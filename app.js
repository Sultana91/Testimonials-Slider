(function(){
    const cunstomarImage = document.querySelector("#customer-photo")
    const cunstomarName = document.querySelector("#customer-name")
    const cunstomarText = document.querySelector("#customer-text")

    const button = document.querySelectorAll(".btn")

    let index = 0
    const customers =[]
    function Customer(img, name, text){
        this.img = img
        this.name = name
        this.text = text
    }
    function createCustomer(img, name, text){
        let Img = './img/${img}.jpg'

        let customer = new Customer(Img, name, text)

        customers.push(customer) 
    }

    createCustomer(0,'John', 'this is best website ever')
    
    createCustomer(1,'Sultana', 'Very easy for the biggner')

    createCustomer(2,'Yasmin', 'Bring evertthing for your need')

    createCustomer(3,'Sultana', 'You do not need to spend any extra')

    
    btn.forEach(function(button){
        button.addEventListener('click', function(e){
            if(e.target.parentElement.classList.contains('prevBtn')){
                if(index ===0){
                    index = customers.length
                }
                index--
                cunstomarImage.src = customers[index].img
                cunstomarName.textContent = customers[index].name
                cunstomarText.textContent = customers[index].text
            }
            if(e.target.parentElement.classList.contains('nextBtn')){
                index++
                if(index === customers.length){
                    index = 0
                }
                cunstomarImage.src = customers[index].img
                cunstomarName.textContent = customers[index].name
                cunstomarText.textContent = customers[index].text
            }

        })

    })








})()