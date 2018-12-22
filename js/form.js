export function setForm() {

    let form = document.querySelector('form')
    let selector = form.querySelector('#selection')
    let optionalMessage = document.querySelector('.optional_message')
    let user = {}


    form.addEventListener('submit', formController)
    selector.addEventListener('change', optionalMessageController)

    /* TODO Mostrar el mensaje opcional solamente cuando la opcion pertinente se encuentra seleccionada*/

    function optionalMessageController(){
        console.log(optionalMessage)
        if(this.value == 'other'){
            optionalMessage.classList.remove('hide')
        } else {
            optionalMessage.classList.add('hide')
        }
    }


    /*TODO Cambiar el comportamiento del formulario para que los datos del usuario se impriman en la consola del navegador */

    function formController(event) {
        event.preventDefault()

        user.name = document.querySelector('#name').value
        user.email = document.querySelector('#email').value
        user.howMetMe = getSelection(document.querySelector('#selection'))
        user.other = document.querySelector('#other').value
        user.tel = document.querySelector('#tel').value
        user.msg = document.querySelector('#msg').value

        console.table(user)

    }

    function getSelection(selector){
        return selector[selector.selectedIndex].value
    }

}