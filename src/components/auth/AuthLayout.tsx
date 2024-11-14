import React from 'react';
import { LockKeyhole } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <LockKeyhole className="h-6 w-6 text-black" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
        </div>
        {children}
      </div>
    </div>
  );
}