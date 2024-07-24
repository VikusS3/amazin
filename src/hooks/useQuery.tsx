import { useEffect, useRef, useState } from "react";

export function useQuery() {
  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = query === "";
      return;
    }

    if (query === "") {
      setError("Debes ingresar un valor");
      return;
    }

    if (query.length < 3) {
      setError("Debes ingresar al menos 3 caracteres");
      return;
    }

    if (query.match(/^[a-zA-Z0-9_]*$/)) {
      setError("Solo se permiten letras y números");
      return;
    }
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  return { query, handleChange, error };
}
