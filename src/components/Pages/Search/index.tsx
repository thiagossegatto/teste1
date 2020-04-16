import React from 'react';
import { Container } from './styled';
import Tabs, { Tab } from 'components/Layout/Tabs';
import Fields from './Fields';
import { useDispatch } from 'react-redux';
import { setTypeSearch } from 'store/modules/search/actions';
import { Car, Bike } from 'components/Layout/Icons';

export default function Search() {
  const dispatch = useDispatch();

  const handleOnClick = (type: number) => {
    dispatch(setTypeSearch(type));
  };

  return (
    <Container>
      <Tabs>
        <Tab
          Icon={Car}
          sizeIcon={14}
          text="CARROS"
          descricao="COMPRAR"
          index={1}
          link={{ to: 'vender-carro', text: `Vender meu carro` }}
          onClick={() => handleOnClick(1)}
        >
          <Fields />
        </Tab>
        <Tab
          Icon={Bike}
          sizeIcon={16}
          text="MOTOS"
          descricao="COMPRAR"
          index={2}
          link={{ to: 'vender-moto', text: `Vender minha moto` }}
          onClick={() => handleOnClick(2)}
        >
          <Fields />
        </Tab>
      </Tabs>
    </Container>
  );
}
