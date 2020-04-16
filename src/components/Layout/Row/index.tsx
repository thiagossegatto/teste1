import React, { ReactNode } from 'react';
import { RowStyled } from './styled';

interface IProps {
  children: ReactNode;
}

export default function Row({ children }: IProps) {
  return <RowStyled>{children}</RowStyled>;
}
