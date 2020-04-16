import React, { CSSProperties } from 'react';
import { FaCheck } from 'react-icons/fa';
import { CheckboxStyled } from './styled';

interface ICheckbox {
  text: string;
  style?: CSSProperties;
  value: boolean;
  onChange: any;
}

export default function Checkbox({ text, style, value, onChange }: ICheckbox) {
  const handleClick = () => {
    onChange(!value);
  };
  return (
    <CheckboxStyled onClick={handleClick} style={style} className="checkbox">
      <button type="button">{value && <FaCheck />}</button>
      <label>{text}</label>
    </CheckboxStyled>
  );
}
