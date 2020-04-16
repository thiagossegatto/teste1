import React, { CSSProperties, ReactNode } from 'react';
import { FormStyled } from './styled';

interface IInput {
  style?: CSSProperties;
  children: ReactNode;
  url: string;
}

export default function Form({ style, children, url }: IInput) {
  return (
    <FormStyled action={url} style={style}>
      {children}
    </FormStyled>
  );
}
