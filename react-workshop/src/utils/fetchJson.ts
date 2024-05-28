const withJsonHeaders = (init?: RequestInit) => ({
  ...init,
  headers: {
    ...init?.headers,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

let cache: Record<string, unknown> = {};

export const fetchJson = <T>(url: string, init?: RequestInit): Promise<T> => {
  const cacheHit = cache[url];
  if (cacheHit) return Promise.resolve(cacheHit) as Promise<T>;

  const promise = fetch(url, withJsonHeaders(init))
    .then((res) => (res.ok ? res.json() : Promise.reject(res)))
    .then((data) => {
      cache[url] = data;
      return data;
    });

  cache[url] = promise;
  return promise;
};
