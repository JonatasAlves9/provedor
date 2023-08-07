const generateOptions = (values) => {
  return values.map((v) => {
    return {
      value: Number(v.id),
      label: v.nome,
    };
  });
};

const convertEventSelectToTarget = (name, value) => {
  return {
    target: {
      name,
      value,
    },
  };
};

export {convertEventSelectToTarget, generateOptions};
