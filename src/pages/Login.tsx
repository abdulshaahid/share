import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validate form
    const newErrors: Record<string, string> = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // TODO: Implement actual login logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsLoading(false);
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <AuthInput
            id="email"
            label="Email address"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            error={errors.email}
            required
          />
          <AuthInput
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={errors.password}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-700 rounded bg-gray-900"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="#" className="font-medium text-blue-400 hover:text-blue-300">
              Forgot your password?
            </a>
          </div>
        </div>

        <AuthButton type="submit" isLoading={isLoading}>
          Sign in
        </AuthButton>

        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <a href="/signup" className="font-medium text-blue-400 hover:text-blue-300">
            Sign up
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}