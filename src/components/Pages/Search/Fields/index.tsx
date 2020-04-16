import React, { useState, useEffect } from 'react';
import Checkbox from 'components/Layout/Form/Checkbox';
import Row from 'components/Layout/Row';
import Input from 'components/Layout/Form/Input';
import Form from 'components/Layout/Form';
import Col from 'components/Layout/Col';
import { ButtonsStyled } from './styled';
import Select from 'components/Layout/Form/Select';
import { Search } from 'store/modules/search/types';
import { OnChange } from 'utils/OnChange';
import { GoLocation } from 'react-icons/go';
import { useSelector, useDispatch } from 'react-redux';
import { ApplicationState } from 'store';
import { requestMakes, requestModels, requestVersions } from 'store/modules/search/actions';
import SelectWithChildren from 'components/Layout/Form/SelectWithChildren';

export default function Fields() {
  const dispatch = useDispatch();
  const initialState = {
    new: true,
    used: true,
    where: 'São Paulo - SP',
    arouund: 1,
    make: 0,
    model: 0,
    year: { from: 0, to: 0 },
    price: { from: 0, to: 0 },
    version: 0,
  };
  const [data, setData] = useState<Search>(initialState);
  const [url, setUrl] = useState<string>('carros');
  const [labelYear, setLabelYear] = useState<string>('Ano Desejado');
  const [labelPrice, setLabelPrice] = useState<string>('Faixa de Preço');
  const { makes, models, versions, type, years, prices } = useSelector((state: ApplicationState) => state.search);

  useEffect(() => {
    dispatch(requestMakes());
  }, [dispatch]);

  useEffect(() => {
    if (type === 1) {
      setUrl('carros');
    } else {
      setUrl('motos');
    }
  }, [type]);

  useEffect(() => {
    if (data.make) {
      setData(aux => {
        let newData = { ...aux };
        newData.model = 0;
        newData.version = 0;
        return newData;
      });

      dispatch(requestModels(data.make));
    }
  }, [data.make, dispatch]);

  useEffect(() => {
    if (data.model) {
      setData(aux => {
        let newData = { ...aux };
        newData.version = 0;
        return newData;
      });
      dispatch(requestVersions(data.model));
    }
  }, [data.model, dispatch]);

  useEffect(() => {
    if (data.year) {
      if (data.year.from && data.year.to) {
        setLabelYear(`De: <b>${data.year.from}</b> &nbsp; Até: <b>${data.year.to}</b>`);
      } else if (data.year.from) {
        setLabelYear(`A partir de <b>${data.year.from}</b>`);
      } else if (data.year.to) {
        setLabelYear(`Até <b>${data.year.to}</b>`);
      }
    }
  }, [data]);

  useEffect(() => {
    if (data.price) {
      if (data.price.from && data.price.to) {
        setLabelPrice(`De: <b>${data.price.from}</b> &nbsp; Até: <b>${data.price.to}</b>`);
      } else if (data.price.from) {
        setLabelPrice(`A partir de <b>${data.price.from}</b>`);
      } else if (data.price.to) {
        setLabelPrice(`Até <b>${data.price.to}</b>`);
      }
    }
  }, [data]);

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>, name: string) => {
    OnChange(event, name, data, setData);
  };

  const resetFilter = () => {
    setData(initialState);
  };

  return (
    <Form url={url}>
      <Row>
        <Col col={12}>
          <Checkbox text={'Novos'} value={data.new} onChange={(event: any) => handleOnChange(event, 'new')} />
          <Checkbox
            text={'Usados'}
            value={data.used}
            style={{ marginLeft: 50 }}
            onChange={(event: any) => handleOnChange(event, 'used')}
          />
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <Col col={8} style={{ padding: 0 }}>
            <Input
              value={data.where}
              col={9}
              Icon={GoLocation}
              label="Onde"
              style={{ borderRadius: '3px 0 0 3px' }}
              onChange={(event: any) => handleOnChange(event, 'where')}
            />
          </Col>
          <Col col={4} style={{ padding: 0 }}>
            <Select
              label="Raio"
              col={6}
              value={data.arouund}
              options={[
                { id: 1, text: '100km' },
                { id: 2, text: '75km' },
                { id: 3, text: '25km' },
              ]}
              onChange={(event: any) => handleOnChange(event, 'arouund')}
              style={{ borderRadius: '0 3px 3px 0', borderLeft: 'none' }}
              className="around"
            />
          </Col>
        </Col>
        <Col col={6}>
          <Col col={6}>
            <Select
              label="Marca"
              col={6}
              value={data.make}
              options={[{ id: 0, text: 'Todas' }, ...makes]}
              onChange={(event: any) => handleOnChange(event, 'make')}
            />
          </Col>
          <Col col={6}>
            <Select
              label="Modelo"
              col={6}
              value={data.model}
              options={[{ id: 0, text: 'Todos' }, ...models]}
              onChange={(event: any) => handleOnChange(event, 'model')}
            />
          </Col>
        </Col>
      </Row>
      <Row>
        <Col col={6}>
          <Col col={6}>
            <SelectWithChildren col={6} label={labelYear}>
              <>
                <Select
                  label="De"
                  col={6}
                  value={data.year?.from}
                  options={[{ id: 0, text: 'Todos' }, ...years]}
                  onChange={(event: any) => handleOnChange(event, 'year.from')}
                />
                <Select
                  label="Até"
                  col={6}
                  value={data.year?.to}
                  options={[{ id: 0, text: 'Todos' }, ...years]}
                  onChange={(event: any) => handleOnChange(event, 'year.to')}
                />
              </>
            </SelectWithChildren>
          </Col>
          <Col col={6}>
            <SelectWithChildren col={6} label={labelPrice}>
              <>
                <Select
                  label="De"
                  col={6}
                  value={data.price?.from}
                  options={[{ id: 0, text: 'Todos' }, ...prices]}
                  onChange={(event: any) => handleOnChange(event, 'price.from')}
                />
                <Select
                  label="Até"
                  col={6}
                  value={data.price?.to}
                  options={[{ id: 0, text: 'Todos' }, ...prices]}
                  onChange={(event: any) => handleOnChange(event, 'price.to')}
                />
              </>
            </SelectWithChildren>
          </Col>
        </Col>
        {type === 1 && (
          <Col col={6}>
            <Select
              label="Versão"
              col={6}
              value={data.version}
              options={[{ id: 0, text: 'Todas' }, ...versions]}
              onChange={(event: any) => handleOnChange(event, 'version')}
            />
          </Col>
        )}
      </Row>
      <Row>
        <ButtonsStyled>
          <button type="button">> Busca Avançada</button>
          <div>
            <button className="limpar" type="button" onClick={resetFilter}>
              Limpar filtros
            </button>
            <button className="ofertas">VER OFERTAS</button>
          </div>
        </ButtonsStyled>
      </Row>
    </Form>
  );
}
