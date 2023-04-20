// @ts-ignore
import { UseQueryOptions, QueryKey, MutationOptions } from '@umijs/max';

export interface ReactQueryOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> extends Omit<RequestInit, 'body'>,
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey> {
  url?: string;
  /** 设置 Content-Type，默认值 `json`，'Content-Type' = 'application/json' */
  contentType?: 'json' | 'form';
}

export interface QueryFnOptions extends RequestInit {
  contentType?: ReactQueryOptions['contentType'];
}

export interface ReactMutationOptions<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>
  extends Omit<RequestInit, 'body'>,
  MutationOptions<TData, TError, TVariables, TContext> {
  url?: string;
  contentType?: ReactQueryOptions['contentType'];
}