<script setup lang="ts">

import { reactive } from "vue";

const estado = reactive({ 
  urgencia: false 
  })

function ConfigurarUrgencia() {
  estado.urgencia = !estado.urgencia;
}
</script>

<template>
   <div v-if="estado.urgencia == true" class="card text-center mx-auto" style="width: 75rem;">
    <div class="card-body">
      <h5 class="card-text vermelho">Classificação Vermelho (atendimento imediato)</h5>
      <p class="card-text">
         O paciente deve ser direcionado para a sala de Emergência. 
         Paciente com risco de morte necessitando de atendimento médico imediato, 
         sendo transferida o mais rápido possível.
      </p>
        <div class="d-flex flex-column-reverse bd-highlight">
          <div class="d-flex justify-content-evenly">
            <a href="/" class="btn btn-primary botao">Voltar para início</a>
          </div>
        </div>
    </div>
  </div>

<div v-else>
  <div class="card text-center mx-auto" style="width: 75rem;">
    <div class="card-body">
      <h5 class="card-title">Pergunta 1 :</h5>
      <p class="card-text">
        - Paciente não responsivo ?
          <br>- Está em choque ?
          <br>- Saturação &#8804; 89% em ar ambiente ?
      </p>
    </div>
  </div>

  <div class="d-flex flex-column-reverse bd-highlight mt-4">
    <div class="d-flex justify-content-evenly">
      <button @click="ConfigurarUrgencia" type="button" class="btn btn-success botaoSim">Sim</button>
      <a href="/classificacao/risco/2" class="btn btn-danger botaoNao">Não</a>
    </div>
  </div>
</div>

</template>

<style>
.vermelho{
  background-color: #eb3434;
  color: white;
}
</style>
