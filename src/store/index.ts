import IProjeto from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projetos: [],
  },
    mutations: {
    'ADICIONAR_PROJETO'(state, nomeDoProjeto: string) {
      const novoProjeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto,
      };
      state.projetos.push(novoProjeto);
    },
    'ATUALIZAR_PROJETO'(state, payload: IProjeto) {
      const projetoIndex = state.projetos.findIndex(p => p.id === payload.id);
      if (projetoIndex !== -1) {
        state.projetos[projetoIndex].nome = payload.nome;
      }
    },
  }
});
export default store;

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
