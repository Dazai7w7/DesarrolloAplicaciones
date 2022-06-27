
const recomendaciones = ["delgadez severa","delgadez moderada","delgadez aceptable","normal","sobre peso", "obeso tipo 1", "obeso tipo 2","obeso tipo 3"]
const ejercicios = [{id:0,ejercicios:{laburo:"nombre ejercicio", repeticiones:2,descripcion:"texto descripcion"}},{id:1, ejercicios:{laburo:"nombre ejercicio", repeticiones:5,descripcion:"texto descripcion"}},{id:2},{id:3},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8}]


function reco(imc){
    
    let x = 0;
    const array1 = [16.00, 17.00, 18.50, 25.00, 30.00, 35.00, 40.00, 41.00]
    let c = new Boolean(true);
    let i = 0;
    while(c){    
        if(imc >= array1[i] && imc < array1[i+1]){
            c = false;
            x = i+1
        }else if(imc < array1[0]){
            c = false;
            x = 0;
        }else if(imc > array1[6]){
            c = false;
            x = 8;
        }
        i = i + 1
    }
    
    return x
}

export function rec(imc){
    reco(imc);
}