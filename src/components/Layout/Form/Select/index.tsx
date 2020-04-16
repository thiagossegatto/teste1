import React, { CSSProperties, useState, useEffect, useRef } from 'react';
import { SelectStyled } from './styled';
import { OptionsProps } from 'store/modules/types';
import { GoTriangleDown } from 'react-icons/go';

interface IInput {
  style?: CSSProperties;
  col?: number;
  options: OptionsProps[];
  value: any;
  label: string;
  onChange: any;
  className?: string;
}

export default function Select({ style, col = 12, options, value, label, onChange, className = '' }: IInput) {
  const [text, setText] = useState<String>();
  const [visible, setVisible] = useState<Boolean>(false);
  const refApp = useRef<any>();

  useEffect(() => {
    options.forEach(item => {
      if (item.id === parseInt(value)) {
        setText(item.text);
      }
    });
  }, [value, options]);

  const handleSelect = (id: number) => {
    setVisible(false);
    onChange(id);
  };

  const handleVisible = () => {
    setVisible(!visible);
  };

  const handleClickOutside = (event: any) => {
    if (refApp && refApp.current && !refApp.current.contains(event.target)) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <SelectStyled col={col} style={style} ref={refApp} focus={visible} className={`${className}`}>
      <label onClick={e => handleVisible()}>
        {label}:<b>{text}</b>
      </label>
      {visible && (
        <ul onChange={onChange}>
          {options.map((item: OptionsProps) => (
            <li key={item.id} className={item.id === value ? 'active' : ''} onClick={e => handleSelect(item.id)}>
              {item.text}
            </li>
          ))}
        </ul>
      )}
      <GoTriangleDown />
    </SelectStyled>
  );
}
