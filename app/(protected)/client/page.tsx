'use client';

import { auth } from '@/auth';
import UserInfo from '@/components/user-info';
import { useUser } from '@/hooks/use-user';
import { currentUser } from '@/lib/auth';
import React from 'react';

function ClientPage() {
  const user = useUser();
  return <UserInfo label="📱 Client Component" user={user} />;
}

export default ClientPage;
