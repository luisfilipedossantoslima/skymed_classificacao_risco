<script setup lang="ts">
import LogoSaluxVue from './LogoSalux.vue';
import Titulo from './Titulo.vue';
import QuestionarioLaranja from './QuestionarioLaranja.vue';
</script>

<template>
<div class="container">
  <div class="d-flex flex-column-reverse bd-highlight">
    <div class="d-flex justify-content-between">
      <LogoSaluxVue/>
      <Titulo/>
    </div>
  </div>
  <QuestionarioLaranja/>
</div>
</template>
