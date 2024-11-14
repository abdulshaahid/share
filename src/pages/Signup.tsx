import React, { useState } from 'react';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import AuthButton from '../components/auth/AuthButton';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});

    // Validate form
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    // TODO: Implement actual signup logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsLoading(false);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start sharing files securely across your devices"
    >
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <AuthInput
            id="name"
            label="Full name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            error={errors.name}
            required
          />
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
            autoComplete="new-password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            error={errors.password}
            required
          />
          <AuthInput
            id="confirm-password"
            label="Confirm password"
            type="password"
            autoComplete="new-password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            error={errors.confirmPassword}
            required
          />
        </div>

        <AuthButton type="submit" isLoading={isLoading}>
          Create account
        </AuthButton>

        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-blue-400 hover:text-blue-300">
            Sign in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
}