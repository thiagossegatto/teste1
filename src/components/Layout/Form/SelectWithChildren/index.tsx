import React, { CSSProperties, useState, useEffect, useRef } from 'react';
import { SelectWithChildrenStyled } from './styled';
import { GoTriangleDown } from 'react-icons/go';

interface IInput {
  style?: CSSProperties;
  col?: number;
  label: any;
  className?: string;
  children: any;
}

export default function SelectWithChildren({ style, col = 12, label, className = '', children }: IInput) {
  const [visible, setVisible] = useState<Boolean>(false);
  const refApp = useRef<any>();

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
    <SelectWithChildrenStyled col={col} style={style} ref={refApp} focus={visible} className={`${className}`}>
      <label onClick={e => handleVisible()} dangerouslySetInnerHTML={{ __html: label }} />
      {visible && <div className="box">{children}</div>}
      <GoTriangleDown />
    </SelectWithChildrenStyled>
  );
}
