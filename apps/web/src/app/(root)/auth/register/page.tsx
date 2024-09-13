// pages/register.tsx
'use client';
import { NextPage } from 'next';
import { useState } from 'react';
import { apiRegister } from '@/utils/api';
import RegisterForm from '@/components/auth/registerForm';

const RegisterPage: NextPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (formValues.password !== formValues.confirmPassword) {
        throw new Error('Passwords do not match');
      }
      await apiRegister(formValues.email, formValues.password);
      // Handle successful registration (e.g., redirect, show message)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <RegisterForm
      formValues={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default RegisterPage;
