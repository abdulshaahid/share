import React from 'react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function AuthInput({ label, error, ...props }: AuthInputProps) {
  return (
    <div className="space-y-1">
      <label htmlFor={props.id} className="block text-sm font-medium text-gray-300">
        {label}
      </label>
      <input
        {...props}
        className={`appearance-none relative block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-800'
        } placeholder-gray-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-900/50 backdrop-blur-sm transition-colors`}
      />
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}