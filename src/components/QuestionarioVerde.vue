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
      <h5 class="card-text verde">Classificação Verde (atendimento em até 120 minutos)</h5>
      <p class="card-text">
        Paciente sem risco de agravo. Serão atendidas por ordem de chegada.
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
      <h5 class="card-title">Pergunta 4 :</h5>
      <p class="card-text">
        <br>- Encaminhamento do Centro de Saúde não enquadradas nas situações de urgência
      </p>
    </div>
  </div>
  <div class="d-flex flex-column-reverse bd-highlight mt-4">
    <div class="d-flex justify-content-evenly">
      <button @click="ConfigurarUrgencia" type="button" class="btn btn-success botaoSim">Sim</button>
      <a href="/classificacao/risco/5" class="btn btn-danger botaoNao">Não</a>
    </div>
  </div>
</div>
</template>

<style>
.verde{
  background-color: rgb(139, 255, 139);
  color: black;
}
</style>
