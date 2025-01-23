<template>
  <div v-if="pokemonObjeto != null">
    <h2>Adivina el pokemon de la imagen</h2>
    <p v-if="mensaje" :class="mensajeClass">{{ mensaje }}</p>
    <p>Tienes {{ intentosRestantes }} intentos</p>
    <p>Puntaje: {{ puntaje }}</p>
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
      mensaje: '',
      mensajeClass: '',
      intentosRestantes: 3,
      puntaje: 0,
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
        this.pokemonOpc = false;
        this.mensaje = '¡Felicitaciones! Has acertado al Pokémon.';
        this.mensajeClass = 'mensaje-correcto';
        if (this.intentosRestantes === 3) {
          this.puntaje += 10;
        } else if (this.intentosRestantes === 2) {
          this.puntaje += 5;
        } else if (this.intentosRestantes === 1) {
          this.puntaje += 1;
        }
      } else {
        console.log("Pokemon Incorrecto :c");
        this.intentosRestantes--;
        this.mensajeClass = 'mensaje-incorrecto';
        if (this.intentosRestantes === 0) {
          this.pokemonOpc = false;
          this.mensaje = 'Has agotado todos tus intentos. El juego ha terminado.';
        } else {
          this.mensaje = `Error. Has fallado al adivinar el Pokémon. Te quedan ${this.intentosRestantes} intentos.`;
        }
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

<style>
.mensaje-correcto {
  color: rgb(16, 138, 16);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.mensaje-incorrecto {
  color: rgb(187, 14, 14);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

}
</style>