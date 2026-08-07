import { useState, useEffect } from 'react';
import api from '../services/api';

// Simple GET data-fetching hook: const { data, loading, error } = useFetch('/appointments');
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    api
      .get(url)
      .then((res) => {
        if (isMounted) setData(res.data.data);
      })
      .catch((err) => {
        if (isMounted) setError(err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [url]);

  return { data, loading, error };
}
