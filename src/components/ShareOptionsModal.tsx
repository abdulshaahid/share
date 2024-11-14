import React, { useState } from 'react';
import { Link as LinkIcon, QrCode, Key, X } from 'lucide-react';
import ShareModal from './ShareModal';

interface ShareOptionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareData: {
    url: string;
    code: string;
  };
}

export default function ShareOptionsModal({ isOpen, onClose, shareData }: ShareOptionsModalProps) {
  const [selectedOption, setSelectedOption] = useState<'link' | 'code' | 'qr' | null>(null);

  if (!isOpen) return null;

  const handleOptionSelect = (option: 'link' | 'code' | 'qr') => {
    setSelectedOption(option);
  };

  return (
    <>
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
                  Choose Share Option
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <button
                    onClick={() => handleOptionSelect('link')}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-pitch-700 transition-colors"
                  >
                    <LinkIcon className="w-6 h-6 mb-2" />
                    <span>Share Link</span>
                  </button>
                  <button
                    onClick={() => handleOptionSelect('code')}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-pitch-700 transition-colors"
                  >
                    <Key className="w-6 h-6 mb-2" />
                    <span>Access Code</span>
                  </button>
                  <button
                    onClick={() => handleOptionSelect('qr')}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-pitch-700 transition-colors"
                  >
                    <QrCode className="w-6 h-6 mb-2" />
                    <span>QR Code</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedOption && (
        <ShareModal
          isOpen={true}
          onClose={() => setSelectedOption(null)}
          type={selectedOption}
          shareData={shareData}
        />
      )}
    </>
  );
}