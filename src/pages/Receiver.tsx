import React, { useState } from 'react';
import { QrCode, Key } from 'lucide-react';

export default function Receiver() {
  const [accessCode, setAccessCode] = useState('');
  const [isScanning, setIsScanning] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement access code verification
    console.log('Verifying code:', accessCode);
  };

  return (
    <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Access Shared Content
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Enter an access code or scan a QR code to retrieve shared content
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-pitch-800 rounded-2xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Access Code Input */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Key className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold">Enter Access Code</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    placeholder="Enter code (e.g., ABC-123-XYZ)"
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-pitch-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
                  >
                    Access Content
                  </button>
                </form>
              </div>

              {/* QR Code Scanner */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <QrCode className="w-5 h-5 text-gray-400" />
                  <h3 className="text-lg font-semibold">Scan QR Code</h3>
                </div>
                <div className="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="animate-pulse">Scanning...</div>
                    </div>
                  ) : (
                    <button
                      onClick={() => setIsScanning(true)}
                      className="text-center p-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                    >
                      <QrCode className="w-8 h-8 mx-auto mb-2" />
                      <span>Click to scan QR code</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}