import React from 'react';

type Props = {
  title: string;
};

const TitleBar = ({ title }: Props) => {
  return (
    <div className={'mb-10'}>
      <h1>{title}</h1>
    </div>
  );
};

export default TitleBar;
