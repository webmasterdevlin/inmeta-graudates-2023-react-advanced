import React from 'react';

import type { FieldErrorsImpl, UseFormRegisterReturn } from 'react-hook-form';

type Props = {
  register: () => UseFormRegisterReturn<any>;
  name: string;
  label: string;
  errors: FieldErrorsImpl<any>;
};

const InputBox = () => {
  return <div>InputBox</div>;
};

export default InputBox;
