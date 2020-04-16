import React, { ReactNode, CSSProperties } from 'react';
import { ColStyled } from './styled';

interface IProps {
  children: ReactNode;
  col?: number;
  style?: CSSProperties;
}

export default function Col({ col = 12, children, style }: IProps) {
  return (
    <ColStyled col={col} style={style}>
      {children}
    </ColStyled>
  );
}
