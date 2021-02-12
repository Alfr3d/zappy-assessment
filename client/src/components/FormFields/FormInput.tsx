import React from 'react'

interface Props {
  inputLabel?: string,
  type: string
  // any other props that come into the component
}

export default ({inputLabel, type: enumType, ...rest}: Props) => {
  // @ts-ignore
  const { name } = rest;
  const type = enumType.toLowerCase();
  return (
    <div>
      {inputLabel && <label htmlFor={name}>{inputLabel || name}</label>}
      <input id={name} type={type} {...rest} />
    </div>
  );
}
