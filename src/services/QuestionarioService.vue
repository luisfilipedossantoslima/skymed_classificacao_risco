<script lang="ts">

import { reactive } from "vue";

export default {
  setup() {
    const estado = reactive({ 
      perguntas: [
        `- Paciente não responsivo ?
          <br>- Está em choque ?
          <br>- Saturação &#8804; 89% em ar ambiente ?`,

        `<br>-Alteração de consciência ou estado mental
        <br>-Padrão respiratório ineficaz
        <br>-Saturação de O<sup>2</sup> &#8805; 90% e &#8804; 94%(ar ambiente)
        <br>-PAS &#8805; 160 e/ou PAD &#8805; 110 mmHg
        <br>-PA &#8805; 140/90 mmHg com sintomas( dor de cabeça, de estômago ou alterações visuais)
        <br>-Relato de Diabetes(glicemia &#8804; 50 mg/dl)
        <br>-Hipertermia &#8805; 40ºC
        <br>-Doença falciforme`,

        `<br>-Saturação &#8805; 95%(ar ambiente)
        <br>-PAS de 140-159 e/ou PAD 90-190 mmHg, sem sintomas
        <br>-Febre: TAx 38,0 &deg;C a 39,9 &deg;C
        <br>-Pacientes imunodeprimidos(HIV)`,

        `<br>- Encaminhamento do Centro de Saúde não enquadradas nas situações de urgência`,

        `<br>-Atendimento não prioritário ou Encaminhamento ao Centro de Saúde`
      ],
      respostas:[
        `O paciente deve ser direcionado para a sala de Emergência. 
         Paciente com risco de morte necessitando de atendimento médico imediato, 
         sendo transferido o mais rápido possível.`,

        `Encaminhar paciente para o consultório médico, 
        atentando para prioridade do atendimento, 
        pois seu potencial risco demanda o atendimento por esses profissionais o mais rápido possível.`,
        
        `Encaminhar paciente para o consultório médico, atentando para prioridade do atendimento.`,

        `Paciente sem risco de agravo. Serão atendidos por ordem de chegada.`,

        `Atendimento não prioritário ou encaminhamento conforme pactuação`
      ],
      tituloPerguntas:[
        `Pergunta 1 :`,
        `Pergunta 2 :`,
        `Pergunta 3 :`,
        `Pergunta 4 :`,
        `Pergunta 5 :`
      ],
      tituloRespostas:[
        `<h5 class="card-text vermelho1">Classificação Vermelho (atendimento imediato)</h5>`,
        `<h5 class="card-text laranja1">Classificação Laranja (atendimento em até 15 minutos)</h5>`,
        `<h5 class="card-text amarelo1">Classificação Amarela (atendimento em até 30 minutos)</h5>`,
        `<h5 class="card-text verde1">Classificação Verde (atendimento em até 120 minutos)</h5>`,
        `<h5 class="card-text azul1">Classificação Azul</h5>`
      ],
      paciente:{
        nome: "",
        data:"",
        sexo:"",
        nomeDaMae:""
        }
      })
    return {
      estado
    }
  }//endsetup
}

</script>