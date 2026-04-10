/**
Copyright (c) [2025] [ankhemanta]
Filename: AnkThemeProvider.tsx
*/

import React from 'react';
import useDefaultThemeColors from '../hooks/useDefaultThemeColors';
import { PageProps } from '../types/pageviewType'


const PageView = (props: PageProps) => {
  const {
    children,
    style,
    onClick,
    onKeyDown,
    onKeyUp,
    onPress,
    themeMode = "light"
  } = props;


  const onClickHendel = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onPress?.(event);
    onClick?.(event);
  }
  const colors = useDefaultThemeColors(themeMode);
  const bg = colors?.backgroundColor;

  return (
    <div
      style={{
        backgroundColor: style?.backgroundColor || bg,
        ...style
      }}
      onClick={onClickHendel}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      {children}
    </div >
  )
};
export default PageView;
/*
const styleArray = [{ color: 'red' }, { fontSize: '16px' }];

// Merge the array of objects into a single object {}
const mergedStyle = Object.assign({}, ...styleArray);

// ...
<div style={mergedStyle}>Hello</div>
*/