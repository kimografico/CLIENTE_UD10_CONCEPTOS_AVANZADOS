export function temporizador(inicio, elemento, intervalo){
    let cuentatras = document.getElementById(elemento);
    cuentatras.innerHTML = inicio;

    let promesa = new Promise ((resolve, reject) =>{
        let timer = setInterval(()=>{
            cuentatras.innerHTML = cuentatras.innerHTML - 1;
            if (cuentatras.innerHTML == 0){
                clearInterval(timer);
                resolve();
            }
            if (cuentatras.innerHTML < 0){
                reject('Nos hemos pasado de vueltas');
            }; 
        }, intervalo)
    });

    return promesa;
};

export async function cuenta(inicio, elemento = 'body', intervalo = 1000, callback){

    try{
        await temporizador(inicio, elemento, intervalo);
        if (callback) {
            callback();
        };

    } catch{
        console.error('Algo se ha ido al carajo');
    }
};

