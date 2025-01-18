<template>
  <div v-if="pokemonObjeto != null">
    <h2>Adivina el pokemon de la imagen</h2>
    <Imagen :pokemonId="pokemonObjeto.id" :showPokemon="pokemonShow" />
    <Opciones :pokemons="pokemonArr" />
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
  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0,3);
      console.log("Este esel aleatorio");
      console.log(valorAleatorio);
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },

  }

}
</script>

<style></style>