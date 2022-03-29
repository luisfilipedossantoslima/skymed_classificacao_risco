<script lang="ts">

import { reactive } from '@vue/reactivity';
import { useCookies } from "vue3-cookies";


let teste = "teste";
export default({
  setup() {
    const estado = reactive({
        paciente:{
          nome:"",
          data:"",
          sexo:"",
          nomeDaMae:""
      }
    })

     const { cookies } = useCookies();
     

    function CarregarDados(){
      let data =  new Date(cookies.get("data"));
      let dataFormatada : string = data.getUTCDay() +'/'+ data.getMonth() +'/'+ data.getFullYear();
      estado.paciente.nome = cookies.get("nome");
      estado.paciente.data = cookies.get("data");
      estado.paciente.sexo = cookies.get("sexo");
      estado.paciente.nomeDaMae = cookies.get("nomeDaMae");

    }

    CarregarDados();

    return{
      estado, 
      CarregarDados,
      cookies,
      }
  },
  
})

</script>

<template>

<div class="container col-md-6 text-center mt-4 py-4">
  <p>
    <h1>Dados do paciente</h1>
  </p>
  <form>
    <div class="form-group">
      <input v-model="estado.paciente.nome" type="text" class="form-control mt-2" readonly placeholder="Nome"/>
    </div>
    <div class="form-group">
      <input v-model="estado.paciente.nomeDaMae" type="text" class="form-control mt-2" readonly placeholder="Nome da mãe"/>
    </div>    <div class="form-group">
      <input v-model="estado.paciente.data" type="text" class="form-control mt-2" readonly placeholder="data"/>
    </div>
    <div class="form-group">
      <input v-model="estado.paciente.sexo" type="text" class="form-control mt-2" readonly placeholder="sexo"/>
    </div>
  </form>

</div>

</template>

<style>
.distancia{
  margin-bottom: 80px;
}
</style>
