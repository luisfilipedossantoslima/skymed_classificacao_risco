<script setup lang="ts">
</script>

<template>

<div class="container">
   <div class="card  mx-auto">
    <div class="card-body">
      <div class="card-text">
        Ao realizar a classificação, o sistema informará qual o risco de acordo com as seguintes cores:
        <br>
        <p>Classificação <b class="vermelho">Vermelho</b> (atendimento imediato)
          O atendimento destes pacientes se dá diretamente na sala de Emergência, pois são pacientes com risco de morte necessitando de atendimento médico imediato, sendo transferido o mais rápido possível.
        </p>

        <p>Classificação <b class="laranjo">Laranja</b> (atendimento em até 15 minutos) 
          O atendimento destes pacientes deverá ser no consultório médico, atentando para prioridade do atendimento, pois seu potencial risco demanda o atendimento por esses profissionais o mais rápido possível.
        </p>

        <p>
          Classificação <b class="amarelo">Amarela</b> (atendimento em até 30 minutos)
          O atendimento destes pacientes deverá ser no consultório médico, atentando para prioridade do atendimento.
        </p>

        <p>
          Classificação <b class="verde">Verde</b> (atendimento em até 120 minutos)
        Por definição, são pacientes sem risco de agravo. Serão atendidos por ordem de chegada.
        </p>
        <p>
          Classificação <b class="azul">Azul</b> (atendimento não prioritário ou encaminhamento conforme pactuação)
        </p>
      </div>
    </div>
  </div>

</div>

</template>

<style>
.vermelho{
color: red;
}
.laranjo{
  color: orange;
}
.amarelo{
  color: yellow;
}
.verde{
  color: rgb(123, 243, 123);
}
.azul{
  color: #549ceb;
}

</style>
