export const convertToOptions = (data: object[], id: any, text: any): any => {
  let options: any = [];

  data.forEach((item: any) => {
    options.push({ id: item[id], text: item[text].toString().toUpperCase() });
  });

  options = Array.from(options.reduce((m: any, t: any) => m.set(t.id, t), new Map()).values());
  return options;
};

export const convertStringToCurrency = (value: string) => {
  return `R$ ${parseFloat(value).toLocaleString('pt-BR')}`;
};
