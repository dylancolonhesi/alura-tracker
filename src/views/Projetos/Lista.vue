<template>
    <table class="table is-fullwidth">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>
                    Ações
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="projeto in projetos" :key="projeto.id">
                <td>{{ projeto.id }}</td>
                <td>{{ projeto.nome }}</td>
                <td>
                    <router-link :to="`/projetos/${projeto.id}`" class="button is-small is-info">
                        <span class="icon is-small">
                            <i class="fas fa-edit"></i>
                        </span>
                        <span>Editar</span>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Lista',
  setup() {
    const store = useStore()
    return {
      projetos: computed(() => store.state.projetos)
    }
  }
});
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>