import React from 'react'

interface Props {
  checkboxLabel?: string
  // any other props that come into the component
}

export default ({checkboxLabel, ...rest}: Props) => {
  // @ts-ignore
  const { name } = rest;
  return (
    <div>
      <label htmlFor={name}>
        <input id={name} type="checkbox" {...rest} />
        {checkboxLabel || name}
      </label>
    </div>
  );
}
