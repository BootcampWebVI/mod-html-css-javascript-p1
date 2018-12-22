export function setForm() {

    let form = document.querySelector('form')
    let selector = form.querySelector('#selection')
    let optionalMessage = document.querySelector('.optional_message')
    let mainTextArea = document.querySelector('#msg')
    let user = {}


    /* TODO controlar que la longitud del texto del mensaje principal es de menos de 150 palabras*/
    mainTextArea.addEventListener('keydown', messageLengthController)

    function messageLengthController(event){
        const BACKSPACE_CODE = 8;
        if (getTextAreaLengthInWords() > 5 && event.keyCode != BACKSPACE_CODE) {
            event.preventDefault()
        }
    }

    function getTextAreaLengthInWords(){
        let wordsArray = mainTextArea.value.split(' ');
        console.log(wordsArray.length)
        return wordsArray.length
    }

    /* TODO Mostrar el mensaje opcional solamente cuando la opcion pertinente se encuentra seleccionada*/
    selector.addEventListener('change', optionalMessageController)

    function optionalMessageController() {
        if (this.value == 'other') {
            optionalMessage.classList.remove('hide')
        } else {
            optionalMessage.classList.add('hide')
        }
    }


    /*TODO Cambiar el comportamiento del formulario para que los datos del usuario se impriman en la consola del navegador */

    form.addEventListener('submit', formController)

    function formController(event) {
        event.preventDefault()

        user.name = document.querySelector('#name').value
        user.email = document.querySelector('#email').value
        user.howMetMe = getSelection(document.querySelector('#selection'))
        user.tel = document.querySelector('#tel').value
        user.msg = document.querySelector('#msg').value

        if (!optionalMessage.classList.contains('hide')) {
            user.other = optionalMessage.value
        }

        

        console.table(user)

    }

    function getSelection(selector) {
        return selector[selector.selectedIndex].value
    }

}