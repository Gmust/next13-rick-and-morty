import React, { FC } from 'react';

type Tag = 'div' | 'h1' | 'h2' | 'span' | 'p'
type Variant = 'title-1' | 'body-1' | 'label' | 'body-2' | 'title-2' | 'title-3' | 'label-2'


interface TypographyProps {
  tag: Tag,
  variant: Variant,
  children: string
}

export const Typography: FC<TypographyProps> = ({ variant, tag, children }) => {
  const Component = tag;

  return <Component className={variant}>{children}</Component>;
};

