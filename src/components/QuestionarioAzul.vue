<script setup lang="ts">

import { reactive } from "vue";

const estado = reactive({ 
  urgencia: true 
  })

function ConfigurarUrgencia() {
  estado.urgencia = !estado.urgencia;
}
</script>

<template>
   <div v-if="estado.urgencia == true" class="card text-center mx-auto" style="width: 75rem;">
    <div class="card-body">
      <h5 class="card-text azul">Classificação Azul</h5>
      <p class="card-text">
        Atendimento não prioritário ou encaminhamento conforme pactuação
      </p>
        <div class="d-flex flex-column-reverse bd-highlight">
          <div class="d-flex justify-content-evenly">
            <a href="/" class="btn btn-primary botao">Voltar para início</a>
          </div>
        </div>
    </div>
  </div>


<div v-else>
  <div  class="card text-center mx-auto" style="width: 75rem;">
    <div class="card-body">
      <h5 class="card-title">Pergunta 5 :</h5>
      <p class="card-text">
        <br>-Atendimento não prioritário ou Encaminhamento ao Centro de Saúde
      </p>
    </div>
  </div>
  <div class="d-flex flex-column-reverse bd-highlight mt-4">
    <div class="d-flex justify-content-evenly">
      <button @click="ConfigurarUrgencia" type="button" class="btn btn-success botaoSim">Sim</button>
      <a href="/" class="btn btn-danger botaoNao">Não</a>
    </div>
  </div>
</div>
</template>

<style>
.azul{
  background-color: rgb(126, 225, 250);
  color: black;
}
</style>
