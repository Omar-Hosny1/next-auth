'use client';

import React, { useEffect, useState } from 'react';
import { CardWrapper } from './card-wrapper';
import { BeatLoader } from 'react-spinners';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { newVerification } from '@/actions/new-verification';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

function NewVerificationForm() {
  const params = useSearchParams();
  const token = params.get('token');
  const { isLoading, data, mutate, isError, isSuccess, isIdle } =
    useMutation(newVerification);

  useEffect(() => {
    if (isError || isSuccess || !isIdle) return;
    mutate(token || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isSuccess, isIdle]);

  return (
    <CardWrapper
      headerLabel={
        token ? 'Confirming your verification' : 'We are Missing the token'
      }
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
    >
      <div className="flex items-center w-full justify-center">
        {isLoading ? <BeatLoader /> : null}
      </div>
      {data?.error ? (
        <FormError message={data.error} />
      ) : (
        <FormSuccess message={data?.success} />
      )}
    </CardWrapper>
  );
}

export default NewVerificationForm;
