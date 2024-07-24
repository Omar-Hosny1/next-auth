'use client';

import { useCurrentRole } from '@/hooks/use-current-role';
import { UserRole } from '@prisma/client';

interface RoleGateProps {
  children: React.ReactNode;
  allowedRole: UserRole;
}

import React from 'react';
import { FormError } from '../form-error';

function RoleGate({ allowedRole, children }: RoleGateProps) {
  const role = useCurrentRole();
  if (role !== allowedRole) {
    return (
      <FormError message="You do not have the permission to view this content" />
    );
  }
  return <>{children}</>;
}

export default RoleGate;
