'use client';

import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

function Social() {
  const onClickHandler = (provider: 'github' | 'google') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClickHandler('google')}
      >
        <FcGoogle className="h-5 W-5" />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClickHandler('github')}
      >
        <FaGithub className="h-5 W-5" />
      </Button>
    </div>
  );
}

export default Social;
