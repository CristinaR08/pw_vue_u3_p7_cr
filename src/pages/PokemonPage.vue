<template>
  <h2>Adivina el pokemon de la imagen</h2>
  <Imagen :pokemonId="78" :showPokemon="false"/>
  <Opciones />
</template>

<script>
import Imagen from '@/components/PokemonImagen.vue'
import Opciones from '@/components/PokemonOpciones.vue'

export default {
  components: {
    Imagen,
    Opciones
  }
    
}
</script>

<style>

</style>