import { useEffect, useState } from "react";
import { StorageKey } from "../@types/storage-key";
import { useLocalStorage } from "../hooks/use-local-storage";

export const useFavorites = () => {
  const { getItem, setItem } = useLocalStorage<string[]>({
    key: StorageKey.FAVORITE_MOVIES,
    defaultValue: []
  });

  const [favorites, setFavorites] = useState<string[]>(() => getItem());

  const favoriteAction = (favoriteMovieId: string) => {
    const isAlreadyFavorite = favorites.some(favorite => favorite === favoriteMovieId);

    if (isAlreadyFavorite) {
      return setFavorites(() => favorites.filter(favorite => favorite !== favoriteMovieId));
    };

    const favoriteMoviesUpdatedWithNewOne = [...favorites, favoriteMovieId];
    setFavorites(favoriteMoviesUpdatedWithNewOne);
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