<template>
 <v-app>
   <v-layout row wrap>
    <!-- Titulo -->
     <v-flex xs12>
        <v-icon medium>fa-edit</v-icon>
        <label class="titulo">Detalhamento da escola {{imovel[0].nome}}</label>
     </v-flex>
    
    <!-- Foto e detalhes da unidade -->    
    <v-flex xs8 offset-xs2 class="text-xl-left">
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
            <span class="text-xl-left destaque">{{imovel[0].descricao}} {{imovel[0].nome}} </span><br>
            <span class="text-xl-left detalhe">Codigo no Inep: {{imovel[0].inep}}</span> <span class="text-xl-left detalhe">CNPJ: SEM CNPJA AINDA</span><br>
          </div>
        </v-card-title>
        <v-card-actions class="text-xl-right">
          <p class="text-xl-left detalhe">Status da Escola</p>
          <v-chip v-if="situacao" color="green" text-color="white">Ativa</v-chip>
          <v-chip v-else label outline color="red">Inativa</v-chip>
        </v-card-actions>
      </v-card>
    </v-flex>
        <!-- informações laterais -->    
    <v-flex xs1>
      <label>Vagas na Escola</label>
      <p>FALTA PREENCHER</p>
      <label>Tipo de escola</label>
      <div class="text-xs-center">
          <v-chip v-if="tipoDeEscola" color="green" text-color="white">Mãe</v-chip>
          <v-chip label outline >Filha</v-chip>
      </div>
      
      <label>Status Financeiro</label>
      <div class="text-xs-center">
        <v-chip color="green" text-color="white" label>Adimplente</v-chip>
      </div>
    </v-flex>

    <!-- box informações escola -->
    <v-flex xs2 offset-xs3 class="text-xs-left">
      <label class="info_sucess">Endereço:</label>
      <p>{{imovel[0].logradouro}}, {{imovel[0].numero}}</p>
      <label class="info_sucess">Localidade:</label>
      <p>{{imovel[0].cidade}}</p>
      <label class="info_sucess">Dados do imóvel:</label>
      <p>{{imovel[0].ocupacao}}</p>
    </v-flex>
    <v-flex xs2 class="text-xs-left">
      <label class="info_sucess">Bairro:</label>
      <p>{{imovel[0].bairro}}</p>
      <label class="info_sucess">Telefone:</label>
      <p>SEM NUMERO AINDA</p>
      <label class="info_sucess">Tipo de escola:</label>
      <p>{{imovel[0].modalidade}}</p>
    </v-flex>
    <v-flex xs2 class="text-xs-left">
      <label class="info_sucess">Cep:</label>
      <p>{{imovel[0].cep}}</p>
      <label class="info_sucess">Regional:</label>
      <p>{{imovel[0].regional}}</p>
      <label class="info_sucess">Tipo de Ensino:</label>
      <p>NÃO INFORMADO</p>
    </v-flex>

    <!-- Dados do gestor -->
    <v-flex xs8 offset-xs2 class="text-xs-left">
      <p class="destaque">Dados do Gestor</p>
      <v-list two-line>
          <template v-for="gestor in gestores">
            <v-list-tile>
              <v-list-tile-avatar>
               <img src=""/>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Nome: {{gestor.nome}} Tipo: {{gestor.cargo}}</v-list-tile-title>
                <v-list-tile-sub-title>Email: {{gestor.email}} Celular: {{gestor.celular}} Forma de seleção: {{gestor.tipo_eleito}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
    </v-flex>

    <!-- Tabela de dados Sala Fora -->
    <v-flex xs8 offset-xs2 class="text-xs-left">
      <p class="destaque">Dados de Sala Fora</p>
    </v-flex>

    <!-- Abas com informações financeiro -->
    <v-flex xs8 offset-xs2 class="text-xs-left">
      <p class="destaque">Financeiro</p>
    </v-flex> 
    <v-flex xs8 offset-xs2 class="text-xs-left">
      <p class="destaque">Repasses</p>
    </v-flex> 

    <v-flex xs2 offset-xs3 class="text-xs-left">
      <label class="info_sucess">Caixa Escolar:</label>
      <p>{{manutencaoCalculada}}</p>
    </v-flex>
    <v-flex xs2 class="text-xs-left">
      <label class="info_sucess">PMAE:</label>
      <p></p>
    </v-flex>
    <v-flex xs2 class="text-xs-left">
      <label class="info_sucess">PDDE:</label>
      <p></p>
    </v-flex>

    <v-flex xs2 class="text-xs-left">
      <label class="info_sucess">Outros:</label>
      <p></p>
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
      repasses:[],
      terceirizados:[],
      msg: 'Welcome to Your Vue.js App',
      codigoEscola: '',
      headers:[
        {
          text: 'tipo',
          align: 'left',
          sortable: false,
          value: 'terceirizado.tipo'
        },
        { text: 'Posto Trabalho', value: 'terceirizado.posto_trabalho' },
        { text: 'Valor', value: 'terceirizado.valor' },
        { text: 'Data da ultima atualização', value: 'terceirizado.data_ultima_atualizacao' },
      ]
    };
  },
  methods: {
    situacao(){
      if(this.imovel[0].situacao === 'EM ATIVIDADE') {
       return true;
      }
       return false;
     },
     tipoDeEscola(){
      if(this.imovel[0].anexo === 'MAE') {
       return true;
      }
       return false;
     },
  },
  computed: {
    manutencaoCalculada(){
      let total = this.repasses.reduce( (total, currentElement)=>{
        parseFloat(total) + parseFloat(currentElement.valor);
      },0);
    }
  },
  created() {
    //console.log(this.$route.params.codigoEscola);
    this.codigoEscola = this.$route.params.codigoEscola;
    axios.get(`http://127.0.0.1:8000/api/imoveis?where[codigo]=${this.codigoEscola}`)
      .then((response) => {
        this.imovel = response.data.data;
      });
    axios.get(`http://127.0.0.1:8000/api/gestores?where[codigo_imovel]=${this.codigoEscola}`)
      .then((response) => {
        this.gestores = response.data.data;
      });
    axios.get(`http://127.0.0.1:8000/api/repasses?where[codigo_imovel]=${this.codigoEscola}&limit=999`)
      .then((response) => {
        this.repasses = response.data.data;
      });
    axios.get(`http://127.0.0.1:8000/api/terceirizados?where[codigo_imovel]=${this.codigoEscola}`)
      .then((response) => {
        this.terceirizados = response.data.data;
      });  
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.titulo {
  font-size: 1.6em;
}
.destaque{
  font-size: 1.2em;
  font-weight: bold;
}
.detalhe{
  font-size: 1em;
}
.info_sucess{
  color: #1F8A70;
}

</style>
