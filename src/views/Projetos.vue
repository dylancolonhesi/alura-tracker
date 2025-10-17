<template>
    <section class="projetos">
        <h1>Projetos</h1>
        <form @submit.prevent="adicionarProjeto">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input type="text" id="nomeDoProjeto" class="input" v-model="nomeDoProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">Adicionar</button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import IProjeto from '@/interfaces/IProjeto';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Projetos',
  data () {
    return {
      nomeDoProjeto: '',
      projetos: [] as IProjeto[]
    }
  },
  methods: {
    adicionarProjeto() {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: this.nomeDoProjeto
      }
      this.projetos.push(projeto)
      this.nomeDoProjeto = ''
    }
  }
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>