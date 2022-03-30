<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Rodape from './components/Rodape.vue'
import Cabecalho from './components/Cabecalho.vue'

</script>

<template>
  <header>
    <Cabecalho/>
    <div class="wrapper">
      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
  <Rodape/>
</template>

<style>
.botao{
  color: white;
  background-color: #0D1E35;
  border-radius: .5rem;
  min-height: 60px;
  text-align: center;
  vertical-align: middle;
  line-height: 2.5;
}

.botaoSim{
  border-radius: .5rem;
  min-height: 60px;
  min-width: 120px;
  text-align: center;
  vertical-align: middle;
  line-height: 2.5;
}

.botaoNao{
  border-radius: .5rem;
  min-height: 60px;
  min-width: 120px;
  text-align: center;
  vertical-align: middle;
  line-height: 2.5;
}
</style>
