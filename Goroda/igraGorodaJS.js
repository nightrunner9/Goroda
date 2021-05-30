let divParent = document.querySelector('#divParent')

function game (div){
// ---
    let content_container = document.createElement('div')
    div.appendChild(content_container)
    content_container.id = 'content_container'
    let text_container = document.createElement('div')
    content_container.appendChild(text_container)
    text_container.id = 'text_container'
    let submit_container = document.createElement('div')
    content_container.appendChild(submit_container)
    submit_container.id = 'submit_container'
// ---
    let input1 = document.createElement('input')
    text_container.appendChild(input1)
    input1.type = 'text'
    input1.id = 'text_1'
    input1.placeholder = 'Player1'
    let input2 = document.createElement('input')
    text_container.appendChild(input2)
    input2.type = 'text'
    input2.id = 'text_2'
    input2.placeholder = 'Player2'
    let submit1 = document.createElement('input')
    submit_container.appendChild(submit1)
    submit1.type = 'submit'
    submit1.id = 'sub_1'
    submit1.value = 'Send'
    let submit2 = document.createElement('input')
    submit_container.appendChild(submit2)
    submit2.type = 'submit'
    submit2.id = 'sub_2'
    submit2.value = 'Send'



    let wordsArr = []

    submit1.addEventListener('click', createWord1)
    submit2.addEventListener('click', createWord2)


    function createWord1(){
        if(/[а-яА-Я]/.test(input1.value) === true){
            if (wordsArr.includes(input1.value) === false){
                let elements = input1.value.split('')
                let lastElement = elements.pop()
                wordsArr.push(input1.value)
                if(lastElement == 'ь' || lastElement == 'й'){
                    input2.value = elements[elements.length- 1].toUpperCase()
                } else {
                    input2.value = lastElement.toUpperCase()
                }
                console.log(wordsArr)
            } else {
                alert('Такой город уже был :(')
            }
        }
    }
    function createWord2(){
        if(/[а-яА-Я]/.test(input2.value) === true){
            if (wordsArr.includes(input2.value) === false){
                let elements = input2.value.split('')
                let lastElement = elements.pop()
                wordsArr.push(input2.value)
                if(lastElement == 'ь' || lastElement == 'й') {
                    input1.value = elements[elements.length- 1].toUpperCase()
                } else {
                    input1.value = lastElement.toUpperCase()
                }
                console.log(wordsArr)
            } else {
                alert('Такой город уже был :(')
            }
        }
    }

}

game (divParent)
