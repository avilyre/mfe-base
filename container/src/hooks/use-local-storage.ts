import { LocalStorageError } from "../@data/errors/local-storage-error";

export const useLocalStorage = <T>(key: string) => {
  const setItem = (data: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data));
    } catch {
      throw new LocalStorageError("Failed to SET data from localStorage");
    }
  }

  const getItem = () => {
    try {
      const result = window.localStorage.getItem(key);
      return result ? JSON.parse(result) as T : undefined;
    } catch {
      throw new LocalStorageError("Failed to GET data from localStorage");
    }
  }

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch {
      throw new LocalStorageError("Failed to REMOVE data from localStorage");
    }
  }

  return {
    setItem,
    getItem,
    removeItem,
  };
}