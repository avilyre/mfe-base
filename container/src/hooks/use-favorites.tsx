import { useEffect, useState } from "react";

import { StorageKey } from "../@types/storage-key";
import { useLocalStorage } from "../hooks/use-local-storage";

export const useFavorites = () => {
  const { getItem, setItem } = useLocalStorage<string[]>({
    key: StorageKey.FAVORITED_MOVIES,
    defaultValue: []
  });

  const [favorites, setFavorites] = useState<string[]>(getItem());

  const setFavorite = (favoritedMovieId: string) => {
    const isAlreadyFavorited = favorites.some(favorited => favorited === favoritedMovieId);

    if (isAlreadyFavorited) return;

    const favoritedMoviesUpdatedWithNewOne = [...favorites, favoritedMovieId];
    setItem(favoritedMoviesUpdatedWithNewOne);
  }

  const removeFavorite = (favoritedMovieId: string) => {
    const favoritesWithoutUnfavoritedOne = favorites.filter(favorited => favorited !== favoritedMovieId);
    setItem(favoritesWithoutUnfavoritedOne);
  }

  return {
    favorites,
    setFavorite,
    removeFavorite,
  };
}