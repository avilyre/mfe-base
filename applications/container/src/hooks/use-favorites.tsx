import { useEffect, useState } from "react";
import { StorageKey } from "../@types/storage-key";
import { useLocalStorage } from "../hooks/use-local-storage";

export const useFavorites = () => {
  const { getItem, setItem } = useLocalStorage<string[]>({
    key: StorageKey.FAVORITED_MOVIES,
    defaultValue: []
  });

  const [favorites, setFavorites] = useState<string[]>(() => getItem());

  const favoriteAction = (favoritedMovieId: string) => {
    const isAlreadyFavorited = favorites.some(favorited => favorited === favoritedMovieId);

    if (isAlreadyFavorited) {
      return setFavorites(() => favorites.filter(favorited => favorited !== favoritedMovieId));
    };

    const favoritedMoviesUpdatedWithNewOne = [...favorites, favoritedMovieId];
    setFavorites(favoritedMoviesUpdatedWithNewOne);
  }

  const effectSaveToLocalStorage = () => {
    setItem(favorites);
  }

  useEffect(effectSaveToLocalStorage, [favorites]);

  return {
    favorites,
    favoriteAction,
  };
}