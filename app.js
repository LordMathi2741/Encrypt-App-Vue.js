const app = Vue.createApp({
    data(){
        return{
            message:' ',
            messages: []
        }
    },
    methods:{
        encrypt() {
            let encryptedMessage = '';

            if (this.message.trim() === '') {
                alert('Ingrese un mensaje a encriptar');
            } 
            else {
                for (let i = 0; i < this.message.length; i++) {
                    let charCode = this.message.charCodeAt(i); // Obtener el valor ASCII del carácter
                    charCode = charCode * 2; // Realizar la manipulación deseada
    
                    encryptedMessage += String.fromCharCode(charCode); // Construir el mensaje cifrado
                }
    
                this.messages.unshift({
                    message: encryptedMessage,
                });
    
            }




            this.message = ''; // Limpiar el input después de cifrar
        }
    }

})
app.mount("#myApp")