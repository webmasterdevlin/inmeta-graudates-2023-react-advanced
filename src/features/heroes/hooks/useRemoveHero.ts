import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EndPoints } from '../../../axios/api-config';
import { deleteAxios } from '../../../axios/generic-api-calls';
import { keys } from '../../keyNames';
import type { HeroModel } from '../hero';

export default function useRemoveHero() {
  const queryClient = useQueryClient();

  return useMutation(
    (heroId: string) => {
      return deleteAxios<void>(EndPoints.heroes, heroId);
    },
    {
      onMutate: async (heroId: string) => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries([keys.heroes]);

        // Snapshot the previous value
        const backup = queryClient.getQueryData<{ data: HeroModel[] }>([keys.heroes]);

        if (backup) {
          queryClient.setQueryData<{ data: HeroModel[] }>([keys.heroes], {
            data: [
              ...backup.data.filter(h => {
                return h.id !== heroId;
              }),
            ],
          });

          return { backup };
        }
      },
    },
  );
}
