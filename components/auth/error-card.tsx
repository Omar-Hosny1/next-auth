import React from 'react';
import { Card, CardFooter, CardHeader } from '../ui/card';
import { Header } from './header';
import BackButton from './back-button';

function ErrorCard() {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="Oops! Somthing Went Wrong!" />
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
}

export default ErrorCard;
