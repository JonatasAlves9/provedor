export type TaskListModel = {
  feedback_required: boolean;
  nome: string;
  feedback: string;
  descricao: string;
  autorizado: boolean;
  entidade_id?: string | null;
  codigo_integracao: string;
  id?: string;
};
