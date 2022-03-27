<script setup lang="ts">
import LogoSaluxVue from './LogoSalux.vue';
import Titulo from './Titulo.vue';
import TextoPrincipal from './TextoPrincipal.vue';
import Rodape from './Rodape.vue';
</script>

<template>
<div class="container">
  <div class="d-flex flex-column-reverse bd-highlight">
    <div class="d-flex justify-content-between">
      <LogoSaluxVue></LogoSaluxVue>
      <Titulo></Titulo>
    </div>
  </div>
  <TextoPrincipal></TextoPrincipal>  
</div>
</template>
