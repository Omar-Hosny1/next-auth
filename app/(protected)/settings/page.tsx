'use client';

import { settings } from '@/actions/settings';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useSession } from 'next-auth/react';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { ErrorMessage, Field, Formik } from 'formik';
import { SettingsSchema } from '@/schemas';
import * as z from 'zod';
import { useUser } from '@/hooks/use-user';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';
import { UserRole } from '@prisma/client';
import { Select, Switch } from '@chakra-ui/react';
import { useEffect } from 'react';

const fieldStyles = {
  padding: '8.5px 16px',
  borderWidth: '1px',
  transition: '0.3s',
  borderColor: 'black',
  margin: '5px 0 0 0',
  borderRadius: '0.375rem',
};

function SettingsPage() {
  const { update } = useSession();
  const user = useUser();

  const { isLoading, mutate } = useMutation(settings, {
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data?.success);
        update();
      } else {
        toast.error(data?.error);
      }
    },
  });

  const initialValues: z.infer<typeof SettingsSchema> = {
    name: user?.name || undefined,
    role: (user?.role as UserRole) || undefined,
    email: user?.email || undefined,
    isTwoFactorEnabled: user?.isTwoFactorEnabled,
    newPassword: undefined,
    password: undefined,
  };

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">✅ Settings</p>
      </CardHeader>
      <CardContent>
        <Formik
          onSubmit={mutate}
          initialValues={initialValues}
          validationSchema={toFormikValidationSchema(SettingsSchema)}
        >
          {(formik) => (
            <>
              <div className="space-y-4 flex-col flex">
                <label htmlFor="name">Name</label>
                <Field
                  className="hover-input"
                  name="name"
                  placeholder="Name"
                  type="text"
                  disabled={isLoading}
                  style={fieldStyles}
                />
                <ErrorMessage
                  component={'span'}
                  className="text-red-600"
                  name="name"
                />
                {!user?.isOAuth ? (
                  <>
                    <label htmlFor="email">Email</label>
                    <Field
                      className="hover-input"
                      name="email"
                      placeholder="joe.doe@example.com"
                      type="email"
                      disabled={isLoading}
                      style={fieldStyles}
                    />
                    <ErrorMessage
                      component={'span'}
                      className="text-red-600"
                      name="email"
                    />
                    <label htmlFor="password">Password</label>
                    <Field
                      className="hover-input"
                      name="password"
                      placeholder="13245Oo"
                      type="password"
                      disabled={isLoading}
                      style={fieldStyles}
                    />
                    <ErrorMessage
                      component={'span'}
                      className="text-red-600"
                      name="password"
                    />
                    <label htmlFor="newPassword">New Password</label>
                    <Field
                      className="hover-input"
                      name="newPassword"
                      placeholder="13245Oo"
                      type="password"
                      disabled={isLoading}
                      style={fieldStyles}
                    />
                    <ErrorMessage
                      component={'span'}
                      className="text-red-600"
                      name="newPassword"
                    />
                  </>
                ) : null}
                <label htmlFor="role">Role</label>
                <Select
                  placeholder="Select option"
                  className="w-full relative bottom-[10px]"
                  style={fieldStyles}
                  defaultValue={formik.values.role}
                  {...formik.getFieldProps('role')}
                >
                  <option value={UserRole.ADMIN}>Admin</option>
                  <option value={UserRole.USER}>User</option>
                </Select>

                <ErrorMessage
                  component={'span'}
                  className="text-red-600"
                  name="role"
                />
                {!user?.isOAuth ? (
                  <>
                    <div className=" flex items-center justify-between rounded-lg border p-3 shadow-sm">
                      <div>
                        <p>2 Factor Authentication</p>
                        <p className="text-gray-400 text-sm">
                          Enable two factor authentication for your account
                        </p>
                      </div>

                      <Switch
                        id="email-alerts"
                        isChecked={formik.values.isTwoFactorEnabled}
                        {...formik.getFieldProps('isTwoFactorEnabled')}
                      />
                    </div>
                  </>
                ) : null}
                <ErrorMessage
                  component={'span'}
                  className="text-red-600"
                  name="isTwoFactorEnabled"
                />
                <Button
                  disabled={!formik.isValid || isLoading}
                  type="button"
                  onClick={() => formik.handleSubmit()}
                >
                  Save
                </Button>
              </div>
            </>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export default SettingsPage;
