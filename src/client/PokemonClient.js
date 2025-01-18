function obtenerAleatorio(min, max) {
    //math floor pone en entero el numero
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const obtenerVectorNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        arreglo[i] = obtenerAleatorio(1, 600);
    }
    return arreglo;
}

const obtenerArregloPokemons = async (arreglo) => {

    const nom0 = await consumirAPI(arreglo[0]);
    const nom1 = await consumirAPI(arreglo[1]);
    const nom2 = await consumirAPI(arreglo[2]);
    const nom3 = await consumirAPI(arreglo[3]);

    const obj1 = {
        nombre: nom0,
        id: arreglo[0],

    };
    const obj2 = {
        nombre: nom1,
        id: arreglo[1],
    };
    const obj3 = {
        nombre: nom2,
        id: arreglo[2],
    };
    const obj4 = {
        nombre: nom3,
        id: arreglo[3],
    };

    const arregloPokemons = [obj1, obj2, obj3, obj4];
    return arregloPokemons;
}

const consumirAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
    return data.name;
    //console.log(data.abilities.abilityObj.name)
}

const consultarPokemons = async () => {
    const arregloNumeros = obtenerVectorNumerico(); 
    return await obtenerArregloPokemons(arregloNumeros);  
}


//FACHADAS
export const consultarPokemonFachada = async () => {
    return await consultarPokemons();
}

export function obtenerAleatorioFachada(min,max){
    return obtenerAleatorio(min, max);
}

//export default consultarPokemonFachada