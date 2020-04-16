import React, { ReactNode } from 'react';
import { Button, LinkButton } from './styled';

export interface ITab {
  Icon?: any;
  sizeIcon?: number;
  text: string | null;
  descricao?: string | null;
  children: ReactNode;
  onClick?: any;
  active?: boolean;
  activeColor?: string;
  index: number;
  link?: {
    to: string;
    text: string;
  };
}

export default function Tabs({
  Icon = null,
  sizeIcon = 20,
  text = null,
  descricao = null,
  children,
  onClick,
  active,
  activeColor = '#B34B53',
  link,
}: ITab) {
  return (
    <>
      <Button onClick={onClick} active={active} activeColor={activeColor} sizeIcon={sizeIcon}>
        {Icon && <Icon />}
        <div>
          {descricao && <span>{descricao}</span>}
          {text && <span>{text}</span>}
        </div>
      </Button>
      {link && active && (
        <LinkButton to={link.to}>
          {link.text}
        </LinkButton>
      )}
      {children}
    </>
  );
}
