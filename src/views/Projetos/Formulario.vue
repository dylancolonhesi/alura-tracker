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
  </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Formulario',
  props: {
    id: {
      type: String
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find((p: any) => p.id === Number(this.id));
      if (projeto) {
        this.nomeDoProjeto = projeto.nome;
      }
    }
  },
  data() {
    return {
      nomeDoProjeto: ''
    }
  },
  methods: {
    adicionarProjeto() {
      if (this.id) {
        this.store.commit('ATUALIZAR_PROJETO', {
          id: Number(this.id),
          nome: this.nomeDoProjeto
        });
        this.$router.push('/projetos');
        return;
      }
      this.store.commit('ADICIONAR_PROJETO', this.nomeDoProjeto)
      this.nomeDoProjeto = '';
      this.$router.push('/projetos');
    }
  },
  setup() {
    const store = useStore()
    return {
      store,
    }
  }
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>