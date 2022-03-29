<script setup lang="ts">

import _questionarioService from '@/services/QuestionarioService.vue';
import { reactive } from 'vue';
import FormularioApresentacao from '../components/FormularioApresentacao.vue';

const estado = reactive({
  urgencia : false,
  etapa : 0,
  perguntaExibida : "",
  respostaExibida : "",
  tituloPerguntaExibido : "",
  tituloRespostaExibido : ""
})


let perguntas = _questionarioService.setup().estado.perguntas
let respostas = _questionarioService.setup().estado.respostas
let tituloPerguntas = _questionarioService.setup().estado.tituloPerguntas
let tituloRespostas = _questionarioService.setup().estado.tituloRespostas


function ConfigurarUrgencia() {
  estado.urgencia = !estado.urgencia;
}

function IncrementaEtapa(){
  estado.etapa ++;
  AtualizaDados();
  
  if(estado.etapa == 4){
    ConfigurarUrgencia();
  }
}

function AtualizaDados(){
  estado.perguntaExibida = perguntas[estado.etapa];
  estado.respostaExibida = respostas[estado.etapa];
  estado.tituloPerguntaExibido = tituloPerguntas[estado.etapa];
  estado.tituloRespostaExibido = tituloRespostas[estado.etapa];
}

AtualizaDados();
</script>

<template>
  <main>
    <div class="container" v-if="estado.urgencia == true">
      <div  class="card text-center mx-auto">
        <div class="card-body">
          <div v-html="estado.tituloRespostaExibido"></div>
          <p class="card-text" v-html="estado.respostaExibida">
          </p>
          <FormularioApresentacao/>
            <div class="d-flex flex-column-reverse bd-highlight">
              <div class="d-flex justify-content-evenly">
                <RouterLink class="btn botao mx-auto distancia" to="/">Voltar para o início</RouterLink>
                <!-- <a href="/" class="btn btn-primary botao">Voltar para início</a> -->
              </div>
            </div>
        </div>
      </div>
    </div>

    <div v-else>
      <div class="container">
        <div class="card text-center mx-auto">
          <div class="card-body">
            <h5 class="card-title">{{estado.tituloPerguntaExibido}}</h5>
            <p class="card-text" v-html="estado.perguntaExibida">
            </p>
          </div>
        </div>

        <div class="d-flex flex-column-reverse bd-highlight mt-4">
          <div class="d-flex justify-content-evenly">
            <button @click="ConfigurarUrgencia" type="button" class="btn btn-success botaoSim">Sim</button>
            <button @click="IncrementaEtapa" type="button" class="btn btn-danger botaoNao">Não</button>
            <!-- <a href="/classificacao/risco/2" class="btn btn-danger botaoNao">Não</a> -->
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
.vermelho1{
  background-color: #eb3434;
  color: white;
}
.laranja1{
  background-color: orange;
  color: white;
}
.amarelo1{
  background-color:rgb(247, 247, 184);
  color: black;
}
.verde1{
  background-color: rgb(139, 255, 139);
  color: black;
}
.azul1{
  background-color: rgb(126, 225, 250);
  color: black;
}
</style>
