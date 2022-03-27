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
      <h5 class="card-text amarelo">Classificação Amarela (atendimento em até 30 minutos)</h5>
      <p class="card-text">
        Encaminhar paciente para o consultório médico, atentando para prioridade do atendimento.
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
      <h5 class="card-title">Pergunta 3 :</h5>
      <p class="card-text">
        <br>-Saturação &#8805; 95%(ar ambiente)
        <br>-PAS de 140-159 e/ou PAD 90-190 mmHg, sem sintomas
        <br>-Febre: TAx 38,0 &deg;C a 39,9 &deg;C
        <br>-Pacientes imunodeprimidas(HIV)
      </p>
    </div>
  </div>
  <div class="d-flex flex-column-reverse bd-highlight mt-4">
    <div class="d-flex justify-content-evenly">
      <button @click="ConfigurarUrgencia" type="button" class="btn btn-success botaoSim">Sim</button>
      <a href="/classificacao/risco/4" class="btn btn-danger botaoNao">Não</a>
    </div>
  </div>
</div>
</template>

<style>
.amarelo{
  background-color: rgb(247, 247, 184);
  color: black;
}
</style>
