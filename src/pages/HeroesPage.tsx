import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import useFetchHeroes from '../features/heroes/hooks/useFetchHeroes';

export default function HeroesPage() {
  const queryClient = useQueryClient(); // holds the cache which your server data is located
  const { data: response, status } = useFetchHeroes();

  if (status === 'error') return <p>Error 😢</p>;

  return (
    <div>
      {status === 'loading' ? (
        <h2>Loading.. Please wait..</h2>
      ) : (
        response?.data?.map(h => {
          return <div key={h.id}>{h.firstName}</div>;
        })
      )}
    </div>
  );
}
