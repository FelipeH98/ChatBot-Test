var botui = new BotUI('my-botui-app');

function showBotChat(){
    const txt = document.getElementById("card-id");
    const chat = document.getElementById("my-botui-app");
    txt.classList.add("no-display");
    chat.classList.remove("no-display");

    botui.message.add({
        delay: 500,
        loading:true,
        content: "Hola, Bienvenido a LocalShop"
    }).then(() => {
        return botui.message.add({
            delay:500,
            loading:true,
            content:'¿En que puedo  ayudarte?'
        })
    }).then(()=>{
        return botui.action.button({
            action: [
                {
                    text:'¿Qué es un shopper?',
                    value:'res1'
                },
                {
                    text:'Ya soy un Shopper',
                    value:'res2'
                }
            ]
        })
    }).then((res) =>{
        var message;
        if(res.value === 'res1'){
            normalPerson()
        }else if (res.value === 'res2'){
            soyShopper()
        }
    })
}


function soyShopper(){
    let message;
    message='Hablemos de tus responsabilidades.'
    return botui.message.add({
        type:'html',
        delay: 1000,
        loading: true,
        content: message
    }).then(()=>{
        return botui.action.button({
            action: [
                {
                    text: '¿Cómo recepciono pedidos?',
                    value:'how'
                }
            ]
        })
    }).then((res)=>{
        if(res.value === 'how'){
            message="Con una simple aplicación o mediante mensajes de texto a través de Whatsapp, verás solo los pedidos cercanos al almacen solicitado."
        }
        return botui.message.add({
            type:'html',
            delay:1000,
            loading:true,
            content:message
        })
    }).then(() =>{
        return botui.action.button({
            action:[
                {
                    text:'Cuéntame mas.',
                    value:'more'
                }
            ]
        })
    }).then((res) => {
        if(res.value === 'more'){
            message="Toma un pedido a través de la aplicación y deberás acercarte al almacén seleccionado en un periodo de tiempo no superior a los 10 minutos. deberás compartirlo el pedido con el almacenero, revisar que el pedido esté completo y llevarlo a la dirección indicada por el sistema. "
        }
        return botui.message.add({
            type:'html',
            delay:1000,
            loading:true,
            content:message
        })
    }).then(() =>{

        return botui.message.add({
            delay:7000,
            loading:true,
            content:"Estás preparado para ayudar al almacén de tu barrio a mantener sus ventas. Espero que haya servido mi información."
        })

    }).then(()=>{
        return botui.action.button({
            action:[
                {
                    text:'Muchas gracias por la ayuda, nos vemos!.',
                    value:'ty'
                }
            ]
        })
    }).then(()=>{
        return botui.message.add({
            delay:500,
            loading:true,
            content:"Sólo es mi trabajo, hasta pronto."
        })
    }).then(()=> setTimeout(()=>{
        const txt = document.getElementById("card-id");
        const chat = document.getElementById("my-botui-app");
        chat.classList.add("no-display");
        txt.classList.remove("no-display");
        txt.innerHTML = `  
            <h5 class="card-title">Espero haya sido de ayuda.</h5>
            <p class="card-text">Repetir experiencia <a href='index.html'> aquí </a> .</p> 
            
        `;
    },2000))
}

function normalPerson(){
    let message;;
    message = 'Una persona que traslada pedidos de mercaderías del almacén de su barrio a sus propios vecinos. '
    return botui.message.add({
        type:'html',
        delay: 1000,
        loading: true,
        content: message
    }).then(()=>{
        return botui.action.button({
            action:[{
                text: '¿Quién puede ser LocalShopper?',
                value:'who'
            }]
        })
    }).then((res)=>{
        if(res.value === 'who'){
           message="Cualquier persona natural, mayor de 15 años que esté dispuesta a tener un ingreso adicional." 
        }

        return botui.message.add({
            type:'html',
            delay:1000,
            loading:true,
            content:message
        })
    }).then(()=>{
        return botui.action.button({
            action: [
                {
                    text: '¿Cómo recepcionan pedidos?',
                    value:'how'
                }
            ]
        })
    }).then((res)=>{
        if(res.value === 'how'){
            message="Con una simple aplicación o mediante mensajes de texto a través de Whatsapp, ellos ven los pedidos cercanos al almacen solicitado."
        }
        return botui.message.add({
            type:'html',
            delay:1000,
            loading:true,
            content:message
        })
    }).then(() =>{
        return botui.action.button({
            action:[
                {
                    text:'Cuéntame mas.',
                    value:'more'
                }
            ]
        })
    }).then((res) => {
        if(res.value === 'more'){
            message="Toman un pedido a través de la aplicación y deben acercarse al almacén seleccionado en un periodo de tiempo no superior a los 10 minutos. Entonces comparten el pedido con el almacenero, revisan que el pedido esté completo y lo llevan a la dirección indicada por el sistema. "
        }
        return botui.message.add({
            type:'html',
            delay:1000,
            loading:true,
            content:message
        })
    }).then(()=>{
        return botui.message.add({
            delay:7000,
            loading:true,
            content:"Espero que haya servido mi información."
        })
    }).then(()=>{
        return botui.action.button({
            action:[
                {
                    text:'Muchas gracias por la ayuda, nos vemos!.',
                    value:'ty'
                }
            ]
        })
    }).then(()=>{
        return botui.message.add({
            delay:500,
            loading:true,
            content:"Sólo es mi trabajo, hasta pronto."
        })
    }).then(()=> setTimeout(()=>{
        const txt = document.getElementById("card-id");
        const chat = document.getElementById("my-botui-app");
        chat.classList.add("no-display");
        txt.classList.remove("no-display");
        txt.innerHTML = `  
            <h5 class="card-title">Espero haya sido de ayuda.</h5>
            <p class="card-text">Repetir experiencia <a href='index.html'> aquí </a> .</p> 
            
        `;
    },2000))
}
