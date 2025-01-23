<template>
  <div v-if="pokemonObjeto != null">
    <h2>Adivina el pokemon de la imagen</h2>
    <Imagen ref="miHijo" :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
    <Opciones v-show="pokemonOpc" @seleccion="validarRespuesta($event)" :pokemons="pokemonArr" />

  </div>
</template>

<script>

import Imagen from '@/components/PokemonImagen.vue'
import Opciones from '@/components/PokemonOpciones.vue'
import { consultarPokemonFachada, obtenerAleatorioFachada } from "@/client/PokemonClient.js"

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
      pokemonOpc: true,
    }
  },
  components: {
    Imagen,
    Opciones,
  },
  mounted() {
    console.log('Se monto en la página el componente PokemonPage.vue');
    this.cargarJuego();
  },
  beforeCreate(){
    console.log('beforeCreate');
  },
  created(){
    console.log('created');
  },
  beforeMount(){
    console.log('beforeMount');
  },
  updated(){
    console.log('updated');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  
  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0,3);
      console.log("Este es el aleatorio");
      console.log(valorAleatorio);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
    validarRespuesta(valor){
      console.log("Llegó el evento al padre");
      console.log(valor);
      const idSeleccionado = valor.identificador;
      if(this.pokemonObjeto.id === idSeleccionado){
        console.log("Pokemon Correcto :3");
        this.pokemonShow = valor.valor2;
        //this.pokemonShow = true;
        this.pokemonOpc = false;
    }else{
      console.log("Pokemon Incorrecto :c");
      this.pokemonShow = false;
    }
    const valorHijo=this.$refs.miHijo;
    console.log('Valor obtenido por refs');
    console.log(valorHijo);
    console.log(this.$refs.miHijo.propiedadPrueba);
    this.$refs.miHijo.metodoPrueba();
    
  },
},
};
</script>

<style></style>