export const OnChange = (event: React.FormEvent<HTMLInputElement>, name: string, data: any, setData: any) => {
  let value;
  if (event && event.currentTarget) {
    if (event.currentTarget) {
      value = event.currentTarget.value;
    }
  } else {
    value = event;
  }

  let newData = { ...data };
  let obj = [];
  let auxObj: any = [];
  if (name.indexOf('.') !== -1) {
    obj = name.split('.');
    obj.forEach(item => {
      auxObj.push(item);
    });
    if (auxObj.length === 2) {
      newData[auxObj[0]][auxObj[1]] = value;
    }
  } else {
    newData[name] = value;
  }

  setData(newData);
};
