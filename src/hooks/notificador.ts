import { store } from '@/store';
import { TipoNotificacao } from '@/interfaces/INotificacao';

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void;
}

export default (): Notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string): void => {
        store.commit('NOTIFICAR', {
            titulo: titulo,
            texto: texto,
            tipo: tipo,
        });
    }

    return {
        notificar
    }
}