import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { CharacterFormSchema } from '../validations/character';
import type { CharacterFormSchemaType } from '../validations/character';
import type { SubmitHandler } from 'react-hook-form';

type Props = {
  handleMutate: (values: any) => any;
};

const FormSubmission = ({ handleMutate }: Props) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, isSubmitting, errors },
  } = useForm<CharacterFormSchemaType>({
    mode: 'all',
    resolver: zodResolver(CharacterFormSchema),
  });

  const onSubmit: SubmitHandler<CharacterFormSchemaType> = data => {
    handleMutate(data);
    reset();
  };

  return <div>FormSubmission</div>;
};

export default FormSubmission;
