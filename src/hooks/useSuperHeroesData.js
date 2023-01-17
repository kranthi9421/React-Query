import { useQuery, useMutation, useQueryClient } from "react-query";
import { request } from "../utils/axios-utils";

const fetchSuperHeroes = () => {
  return request({url : '/superheroes'});
};

const addSuperHero = (hero) => {
  return request({url:'/superheroes', method:'post', data:hero});
};

export const useSuperHeroesData = (onSuccess, onError) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },
  });
};

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient();
  return useMutation(addSuperHero, {
    // onSuccess: (data) => {
    //   queryClient.setQueriesData('super-heroes', (oldQuerData) => {
    //     return {
    //       ...oldQuerData,
    //       data:[...oldQuerData.data, data.data]
    //       }
    //   })
    //   // queryClient.invalidateQueries('super-heroes')
    // }
    onMutate: async (newHero) => {
      await queryClient.cancelQueries("super-heroes");
      const previousHeroData = queryClient.getQueryData("super-heroes");
      queryClient.setQueriesData("super-heroes", (oldQuerData) => {
        return {
          ...oldQuerData,
          data: [
            ...oldQuerData.data,
            { id: oldQuerData.data.length + 1, ...newHero },
          ],
        };
      });
      return {
        previousHeroData,
      }
    },
    onError: (_error, _hero, context) => {
      queryClient.setQueryData('super-heroes',context.previousHeroData)
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heroes')
    },
  });
};
