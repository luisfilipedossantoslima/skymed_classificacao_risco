<script lang="ts">

import { reactive } from '@vue/reactivity';
import { useCookies } from "vue3-cookies";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useForm, useField } from 'vee-validate';



export default({
  components: { Datepicker },
  setup() {

    const estado = reactive({
        paciente:{
          nome:"",
          data:"",
          nomeDaMae:"",
          sexo:[
            {
              id:1,
              nome:"sexo"
            },
            {
              id:2,
              nome:"masculino"
            },
            {
              id:3,
              nome:"feminino"
            }],
        sexoSelecionado:1
        }
    })

    const { cookies } = useCookies();

    const esquemaValidacao = {
      nome(valor : string) {
        if (valor && valor.trim()) {
          return true;
        }

      return 'O campo nome é obrigatório';
      },      
      nomeDaMae(valor : string) {
        if (valor && valor.trim()) {
          return true;
        }

      return 'O campo nome da mãe é obrigatório';
      },
      data(valor : string) {
        if (valor && valor.trim()) {
          return true;
        }

      return 'O campo data de nascimento é obrigatório';
      },
      sexoSelecionado(valor : string) {
        if (valor && valor.trim()) {
          return true;
        }

      return 'O campo sexo é obrigatório';
      }
    };

    useForm({
      validationSchema: esquemaValidacao,
    });

    function SalvarDados(){
      if(estado.paciente.sexoSelecionado == 2){
        cookies.set("sexo",estado.paciente.sexo[1].nome, Infinity);
      }
      if(estado.paciente.sexoSelecionado == 3){
        cookies.set("sexo",estado.paciente.sexo[2].nome, Infinity);
      } 

      cookies.set("nome",estado.paciente.nome, Infinity);
      cookies.set("data",FormataData(estado.paciente.data), Infinity);
      cookies.set("nomeDaMae",estado.paciente.nomeDaMae, Infinity);

      Redirecionar();
    }

    function FormataData(data : any){
      let dataOriginal = new Date(data);
      let dataFormatada = `${dataOriginal.getDate()}/${(dataOriginal.getMonth()+1)}/${dataOriginal.getFullYear()}`
      return dataFormatada;
    }

    function Redirecionar(){
      window.location.replace(String("/classificacao/risco"));
    }

    const { errorMessage : mensagemErroNome, value : nome } = useField('nome');
    const { errorMessage : mensagemErroData, value : data } = useField('data');
    const { errorMessage : mensagemErroSexoSelecionado, value : sexoSelecionado } = useField('sexoSelecionado');
    const { errorMessage : mensagemErroNomeDaMae, value : nomeDaMae } = useField('nomeDaMae');

    return{
      estado, 
      SalvarDados,
      cookies,
      nome,
      mensagemErroNome,
      data,
      mensagemErroData,
      sexoSelecionado,
      mensagemErroSexoSelecionado,
      nomeDaMae,
      mensagemErroNomeDaMae
      }
  },
  
})

</script>

<template>

<div class="container col-md-6 text-center mt-4 py-4">
  <p>
    <h1>Preencha o formulário abaixo com os dados do paciente</h1>
  </p>
  <form class="needs-validation" novalidate>
    <div class="form-group">
      <!-- <input v-model="estado.paciente.nome" type="text" class="form-control mt-2" placeholder="Nome"/> -->
      <input v-model="estado.paciente.nome" name="nome" type="text" class="form-control mt-2" placeholder="Nome"/>
       <span class="alert-danger mt-2">{{ mensagemErroNome }}</span>
    </div>

    <div class="form-group">
      <input v-model="estado.paciente.nomeDaMae" name="nomeDaMae" type="text" class="form-control mt-2" placeholder="Nome da mãe"/>
      <span class="alert-danger mt-2">{{ mensagemErroNomeDaMae }}</span>
    </div>

    <div class="form-group row mt-2">
      <label for="datapicker" class="col-sm-4 col-form-label text-start">Data de Nascimento : </label>
      <div class="col-sm-8">
        <Datepicker id="datapicker" class="" v-model="estado.paciente.data" name="data"></Datepicker>
        <span class="alert-danger mt-2">{{ mensagemErroData }}</span>
      </div>
          
    </div>
     <div class="form-group">
      <select v-model="estado.paciente.sexoSelecionado" name="sexoSelecionado" class="form-control mt-2">
        <option :value="item.id" v-for="(item, index) in estado.paciente.sexo">{{ item.nome }}</option>
      </select>
      <span class="alert-danger mt-2">{{ mensagemErroSexoSelecionado }}</span>
    </div>
    <button type="button" @click="SalvarDados" class="btn botao mx-auto distancia mt-4">Realizar Classificação</button>
  </form>

</div>

</template>

<style>
.distancia{
  margin-bottom: 80px;
}
</style>
