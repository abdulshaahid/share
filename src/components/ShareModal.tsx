import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Copy, X } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'link' | 'code' | 'qr';
  shareData: {
    url: string;
    code: string;
  };
}

export default function ShareModal({ isOpen, onClose, type, shareData }: ShareModalProps) {
  if (!isOpen) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // TODO: Show success toast
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative transform overflow-hidden rounded-lg bg-white dark:bg-pitch-800 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
          <div className="absolute right-0 top-0 pr-4 pt-4">
            <button
              type="button"
              className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-white mb-4">
                {type === 'link' && 'Share Link'}
                {type === 'code' && 'Access Code'}
                {type === 'qr' && 'QR Code'}
              </h3>

              <div className="mt-2">
                {type === 'link' && (
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      readOnly
                      value={shareData.url}
                      className="flex-1 p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-pitch-900 text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(shareData.url)}
                      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Copy className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {type === 'code' && (
                  <div className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-mono tracking-wider bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded-lg">
                        {shareData.code}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                      Share this code with others to grant them access
                    </p>
                    <button
                      onClick={() => copyToClipboard(shareData.code)}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy Code</span>
                    </button>
                  </div>
                )}

                {type === 'qr' && (
                  <div className="flex flex-col items-center space-y-4">
                    <div className="p-4 bg-white rounded-lg">
                      <QRCodeSVG
                        value={shareData.url}
                        size={200}
                        level="H"
                        includeMargin
                      />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Scan this QR code to access the shared content
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}