<template>
 <v-app>
   <v-layout row wrap>
    <!-- Titulo -->
     <v-flex xs12>
        <v-icon medium>fa-edit</v-icon>
        <label class="titulo">Detalhamento da escola {{imovel[0].nome}}</label>
     </v-flex>
    
    <!-- Foto e detalhes da unidade -->    
    <v-flex xs8 offset-xs2>
      <v-card>
        <v-card-media class="white--text" src="">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex align-end flexbox>
                <span class="headline">Envie sua foto</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-title>
          <div>
            <span> {{imovel[0].nome}} </span><br>
            <span>Codigo no Inep:  e CNPJ: </span><br>
            <span>Status da Escola</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-chip color="green" text-color="white">if Ativa ou </v-chip>
          <v-chip label outline color="red">Outline</v-chip>
        </v-card-actions>
      </v-card>
    </v-flex>
        <!-- informações laterais -->    
    <v-flex xs1>
      <label>Vagas na Escola</label>
      <p>vagas</p>
      <label>Tipo de escola</label>
      <div class="text-xs-center">
        <v-chip>Anexo</v-chip>
        <v-chip color="green" text-color="white">Mãe</v-chip>
      </div>
      
      <label>Status Financeiro</label>
      <div class="text-xs-center">
        <v-chip color="green" text-color="white" label>Adimplente</v-chip>
      </div>
    </v-flex>

    <!-- box informações escola -->
    <v-flex xs2 offset-xs3 class="text-xs-left">
      <label>Endereço:</label>
      <p>Endereço</p>
      <label>Localidade:</label>
      <p>Endereço</p>
      <label>Dados do imóvel:</label>
      <p>Endereço</p>
    </v-flex>
    <v-flex xs2 class="text-xs-left">
      <label>Bairro:</label>
      <p>Endereço</p>
      <label>Telefone:</label>
      <p>Endereço</p>
      <label>Tipo de escola:</label>
      <p>Endereço</p>
    </v-flex>
    <v-flex xs2 class="text-xs-left">
      <label>Cep:</label>
      <p>Endereço</p>
      <label>Regional:</label>
      <p>Endereço</p>
      <label>Tipo de Ensino:</label>
      <p>Endereço</p>
    </v-flex>

    <!-- Dados do gestor -->
    <v-flex xs8 offset-xs2 class="text-xs-left">
      <v-avatar class="grey lighten-4">
        <img src="">
      </v-avatar>
      <label>Nome:</label>
      <label>NOME</label>

      <label>Email:</label>
      <label>EMAIL</label>

      <label>Tipo:</label>
      <label>TIPO</label>

      <label>Telefone:</label>
      <label>TELEFONE</label>

      <label>Forma de Seleção:</label>
      <label>FORMA DE SELEÇÃO</label>

    </v-flex>

    <!-- Tabela de dados Sala Fora -->
    <v-flex xs8 offset-xs2>


    </v-flex>

    <!-- Abas com informações financeiro -->
    <v-flex xs8 offset-xs2>
      
    </v-flex>

   </v-layout>
 </v-app>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      gestores: [],
      imovel: [],
      msg: 'Welcome to Your Vue.js App',
    };
  },
  methods: {},
  created() {
    axios.get('http://127.0.0.1:8000/api/imoveis?where[codigo]=88')
      .then((response) => {
        this.imovel = response.data.data;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo {
  font-size: 1.6em;
}
</style>
