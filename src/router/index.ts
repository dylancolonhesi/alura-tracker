import Projetos from "@/views/Projetos.vue";
import Tarefas from "@/views/Tarefas.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "tarefas",
    component: Tarefas,
  },
{
    path: "/projetos",
    name: "projetos",
    component: Projetos,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default router;