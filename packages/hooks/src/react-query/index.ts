// @ts-ignore
import { useMutation, UseQueryOptions, MutationOptions, useQuery, QueryKey, MutationFunction } from '@umijs/max';
import { fetchFn } from './fetch'
import { ReactQueryOptions, ReactMutationOptions, QueryFnOptions } from './type'

export function useReactQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData>(
  options: ReactQueryOptions<TQueryFnData, TError, TData, QueryKey>,
) {
  const {
    url = '',
    cache,
    credentials = 'include',
    headers,
    integrity,
    keepalive,
    method = 'GET',
    mode,
    redirect,
    referrer,
    referrerPolicy,
    signal,
    window,
    contentType = 'json',
    ...opts
  } = options || {};
  const fetchOption: RequestInit = {
    cache,
    credentials,
    headers,
    integrity,
    keepalive,
    method,
    mode,
    redirect,
    referrer,
    referrerPolicy,
    signal,
    window,
  };
  const queryOptions: UseQueryOptions<TQueryFnData, TError, TData, QueryKey> = { ...opts };
  if (url) {
    const Fn = () => fetchFn(url, { contentType, ...fetchOption });
    queryOptions.queryFn = queryOptions.queryFn || Fn;
  }
  return useQuery({ ...queryOptions });
}

export function useReactMutation<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  options: ReactMutationOptions<TData, TError, TVariables, TContext>,
) {
  const {
    url,
    cache,
    credentials,
    headers,
    integrity,
    keepalive,
    method = 'POST',
    mode,
    redirect,
    referrer,
    referrerPolicy,
    signal,
    window,
    contentType = 'json',
    ...opts
  } = options || {};
  const fetchOption: RequestInit = {
    cache,
    credentials,
    headers,
    integrity,
    keepalive,
    method,
    mode,
    redirect,
    referrer,
    referrerPolicy,
    signal,
    window,
  };
  const mutationOptions: MutationOptions<TData, TError, TVariables, TContext> = { ...opts };
  if (url) {
    const Fn: MutationFunction<TData, TVariables> = (newData: TVariables) => {
      let body = newData;
      if (Object.prototype.toString.call(newData).slice(8, -1) !== 'FormData') {
        body = JSON.stringify(newData) as TVariables;
      }
      return fetchFn(url, { contentType, ...fetchOption, body: body as BodyInit });
    };
    mutationOptions.mutationFn = mutationOptions.mutationFn || Fn;
  }
  return useMutation(mutationOptions);
}

export type {
  ReactQueryOptions,
  ReactMutationOptions,
  QueryFnOptions
}
export * from "./fetch"
