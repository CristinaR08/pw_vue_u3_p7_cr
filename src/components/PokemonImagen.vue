<template>
  <div class="pokemon-container">
    <img v-show="!showPokemon" :src=imgFuente
      alt="No se puede cargar la imagen" class="ocultar" />

    <img v-show="showPokemon" :src=imgFuente
      alt="No se puede cargar la imagen" />
  </div>
</template>

<script>
export default {
  props:{
    pokemonId:{
      type: Number,
      required: true
    },
    showPokemon:{
      type: Boolean,
      required: true
    }
  },
  computed:{
     imgFuente(){
    //   return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg"
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`
  },
    
  }
}
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  height: 200px;
  position: absolute;
  right: 38%;
}

.pokemon-container {
  height: 200px;
}
</style>