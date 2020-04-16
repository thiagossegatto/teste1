import React, { CSSProperties } from 'react';
import { InputStyled } from './styled';

interface IInput {
  style?: CSSProperties;
  col?: number;
  Icon?: any;
  label: string;
  value: any;
  onChange: any;
  className?: string;
}

export default function Input({ style, col = 12, label, Icon, value, onChange, className = '' }: IInput) {
  // useEffect(() => {
  //   options &&
  //     options.forEach(item => {
  //       if (item.text === value) {
  //         setText(item.text);
  //       }
  //     });
  // }, [value]);
  return (
    <InputStyled col={col} hasIcon={Icon ? true : false} className={`${className}`}>
      {Icon && <Icon />}
      <label>{label}:</label>
      <input style={style} value={value} onChange={onChange} />
      {/* <select onChange={onChange}>
        {options.map(item => (
          <option value={item.id}>{item.text}</option>
        ))}
      </select> */}
    </InputStyled>
  );
}
