import React, { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestVehicles } from 'store/modules/vehicles/actions';
import { ApplicationState } from 'store';
import { Vehicle } from 'store/modules/vehicles/types';
import { Container, List, SideSearch } from './styled';
import { GoDashboard, GoCalendar } from 'react-icons/go';
import { convertStringToCurrency } from 'utils';
import { Loading } from 'components/Layout/Icons';

export default function Vehicles() {
  const bottomRef = useRef<any>();
  const dispatch = useDispatch();
  const { list, loading, page } = useSelector((state: ApplicationState) => state.vehicles);

  // LOAD THE FIRST 10 VEHICLES
  useEffect(() => {
    dispatch(requestVehicles());
  }, [dispatch]);

  // CALLBACK INFINITE SCROLL
  const scrollCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (page > 0 && list.length > 0) {
      if (entries[0].isIntersecting) {
        dispatch(requestVehicles());
      }
    }
  }, [dispatch, list, page]);

  // INFINITE SCROLL
  useEffect(() => {
    const scroll = new IntersectionObserver(scrollCallback, {
      root: null,
      rootMargin: '50px',
    });
    scroll.observe(bottomRef.current);
    return () => {
      scroll.disconnect();
    };
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [bottomRef, scrollCallback]);

  return (
    <Container>
      <SideSearch>Busca Lateral</SideSearch>
      <div>
        <List>
          {list.length > 0 &&
            list.map((item: Vehicle) => (
              <li key={item.ID}>
                <div className="image">
                  <img src={item.Image} alt={item.Model} />
                </div>
                <div className="description">
                  <div className="title">
                    {item.Make.toUpperCase()} {item.Model.toUpperCase()}
                    <span>{item.Version.toUpperCase()}</span>
                  </div>
                  <div className="price">{convertStringToCurrency(item.Price)}</div>
                  <div className="others">
                    <span>
                      <GoCalendar />
                      {item.YearFab}/{item.YearModel}
                    </span>
                    <span>
                      <GoDashboard />
                      {item.KM} km
                    </span>
                  </div>
                </div>
              </li>
            ))}
          <div ref={bottomRef} />
        </List>
        {loading && (
          <div className="loading">
            <Loading />
          </div>
        )}
      </div>
    </Container>
  );
}
