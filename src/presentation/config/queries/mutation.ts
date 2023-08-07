import {useMutation} from 'react-query';

export class Mutation<ReturnType, ApiCallerType> {
  constructor(private apiCaller: (formPayload: ReturnType) => ApiCallerType) {}

  createTask = async (formPayload: ReturnType) => {
    return this.apiCaller(formPayload);
  };

  createTaskMutation = useMutation({
    mutationFn: (formPayload: ReturnType) => {
      return this.createTask(formPayload);
    },
  });
}
