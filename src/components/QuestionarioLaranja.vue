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
      <h5 class="card-text laranja">Classificação Laranja (atendimento em até 15 minutos)</h5>
      <p class="card-text">
        Encaminhar paciente para o consultório médico, 
        atentando para prioridade do atendimento, 
        pois seu potencial risco demanda o atendimento por esses profissionais o mais rápido possível.
      </p>
        <div class="d-flex flex-column-reverse bd-highlight">
          <div class="d-flex justify-content-evenly">
            <a href="/" class="btn btn-primary botao">Voltar para o início</a>
          </div>
        </div>
    </div>
  </div>

<div v-else>
  <div class="card text-center mx-auto" style="width: 75rem;">
    <div class="card-body">
      <h5 class="card-title">Pergunta 2 :</h5>
      <p class="card-text">
        <br>-Alteração de consciência ou estado mental
        <br>-Padrão respiratório ineficaz
        <br>-Saturação de O<sup>2</sup> &#8805; 90% e &#8804; 94%(ar ambiente)
        <br>-PAS &#8805; 160 e/ou PAD &#8805; 110 mmHg
        <br>-PA &#8805; 140/90 mmHg com sintomas( dor de cabeça, de estômago ou alterações visuais)
        <br>-Relato de Diabetes(glicemia &#8804; 50 mg/dl)
        <br>-Hipertermia &#8805; 40ºC
        <br>-Doença falciforme
      </p>
    </div>
  </div>
  <div class="d-flex flex-column-reverse bd-highlight mt-4">
    <div class="d-flex justify-content-evenly">
      <button @click="ConfigurarUrgencia" type="button" class="btn btn-success botaoSim">Sim</button>
      <a href="/classificacao/risco/3" class="btn btn-danger botaoNao">Não</a>
    </div>
  </div>
</div>
</template>

<style>
.laranja{
  background-color: orange;
}
</style>
