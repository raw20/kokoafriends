import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialState: T) {
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(key) || "{}") || initialState
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}

export default useLocalStorage;
