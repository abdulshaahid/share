import React from 'react';
import Header from './components/Header';
import ShareArea from './components/ShareArea';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Receiver from './pages/Receiver';
import ShareHistory from './pages/ShareHistory';

export default function App() {
  // TODO: Add proper routing
  const currentPage = window.location.pathname;

  if (currentPage === '/login') {
    return <Login />;
  }

  if (currentPage === '/signup') {
    return <Signup />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-pitch-900 text-gray-900 dark:text-gray-100">
      <Header currentPage={currentPage} />
      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        {currentPage === '/receive' ? (
          <Receiver />
        ) : currentPage === '/history' ? (
          <ShareHistory />
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Share Instantly Across Devices
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Securely share text, code, and files between your devices with just a few clicks.
                No account required.
              </p>
              <div className="mt-8">
                <a
                  href="/receive"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors"
                >
                  Access Shared Content
                </a>
              </div>
            </div>
            <ShareArea />
          </div>
        )}
      </main>
    </div>
  );
}