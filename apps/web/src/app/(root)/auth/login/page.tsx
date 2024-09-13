'use client';

import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import router for navigation
import Cookies from 'js-cookie'; // Import js-cookie
import { apiLogin } from '@/utils/api';
import LoginForm from '@/components/auth/loginForm';

const LoginPage: NextPage = () => {
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    // Check if the user is already logged in by checking the auth token cookie
    const token = Cookies.get('LOGIN_INFO');
    if (token) {
      // Redirect to the dashboard or home page if the user is already logged in
      router.push('/'); // Adjust the redirect path as necessary
    }
  }, [router]);

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
      const response = await apiLogin(formValues.email, formValues.password);

      // Log the response for debugging
      console.log('API Response:', response);

      // Check if response and response.data are defined
      if (response) {
        const { token, role } = response;

        // Check if token and role are present
        if (token && role) {
          // Set cookies
          Cookies.set('LOGIN_INFO', token, {
            secure: true,
            sameSite: 'Strict',
            expires: 7, // Use days instead of hours
          });
          Cookies.set('ROLE_INFO', role, {
            secure: true,
            sameSite: 'Strict',
            expires: 7, // Use days instead of hours
          });

          // Redirect to a different page after successful login
          router.push('/dashboard'); // Redirect to a dashboard or home page
        } else {
          throw new Error('Token or role is missing in the response');
        }
      } else {
        throw new Error('Response data is undefined');
      }
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
    <LoginForm
      formValues={formValues}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      loading={loading}
      error={error}
    />
  );
};

export default LoginPage;
