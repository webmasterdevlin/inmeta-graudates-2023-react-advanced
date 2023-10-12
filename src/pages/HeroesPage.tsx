import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import Button from '../components/Button';
import TitleBar from '../components/TitleBar';
import UpdateUiLabel from '../components/UpdateUiLabel';
import useFetchHeroes from '../features/heroes/hooks/useFetchHeroes';
import { keys } from '../features/keyNames';
import type { HeroModel } from '../features/heroes/hero';

export default function HeroesPage() {
  const queryClient = useQueryClient(); // holds the cache which your server data is located
  const { data: response, status } = useFetchHeroes();

  /* local state */
  const [tracker, setTracker] = useState('0');

  const handleSoftDelete = (id: string) => {
    // no HTTP DELETE Request here. Only mutating the server data state
    queryClient.setQueryData<{ data: HeroModel[] }>([keys.heroes], prevData => {
      return {
        data: prevData?.data?.filter(h => {
          return h.id !== id;
        }) as HeroModel[],
      };
    });
  };

  if (status === 'error') return <p>Error 😢</p>;

  return (
    <div>
      <TitleBar title="Heroes Page" />
      <UpdateUiLabel />
      {status === 'loading' ? (
        <h2>Loading.. Please wait..</h2>
      ) : (
        response?.data?.map(h => {
          return (
            <div key={h.id} className="flex items-center justify-between">
              <h1>
                <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
                {tracker === h.id && <span> - marked</span>}
              </h1>
              <div>
                <Button
                  color="primary"
                  onClick={() => {
                    setTracker(h.id);
                  }}
                >
                  Mark
                </Button>
                <Button
                  onClick={() => {
                    handleSoftDelete(h.id);
                  }}
                >
                  Remove
                </Button>
                <Button
                  color="secondary"
                  onClick={() => {
                    console.log('delete in db');
                  }}
                >
                  DELETE in DB
                </Button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
