import React, { useState, ReactElement, ReactNode } from 'react';
import { Container } from './styled';
import Tab from './Tab';

interface ITabs {
  initialIndex?: number;
  children: ReactNode[];
}

export default function Tabs({ initialIndex = 1, children }: ITabs): ReactElement {
  const [selected, setSelected] = useState(initialIndex);

  const handleSelected = (index: number) => {
    setSelected(index);
  };

  return (
    <Container>
      <div className="menu-tab">
        {children.map((item: any) => {
          let aux = {
            ...item,
            props: {
              ...item.props,
              children: null,
              onClick: () => {
                handleSelected(item.props.index);
                item.props.onClick();
              },
              active: item.props.index === selected ? true : false,
            },
          };
          return aux;
        })}
      </div>
      <div className="container-tab">
        {children.map((item: any) => {
          if (item.props.index === selected) {
            return item.props.children;
          }
          return false;
        })}
      </div>
    </Container>
  );
}

export { Tab };
