import { PropsWithChildren } from 'react';

export type PropsWithClassName<P = unknown> = P & {
  className?: string | undefined;
};

export type PropsWithClassNameAndChildren<P = unknown> = PropsWithChildren<
  PropsWithClassName<P>
>;

export type StringOrNumber = Exclude<PropertyKey, symbol>;
