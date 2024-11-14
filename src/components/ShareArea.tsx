import React, { useState } from 'react';
import { Upload, Clock } from 'lucide-react';
import DynamicTextArea from './DynamicTextArea';
import ShareOptionsModal from './ShareOptionsModal';

export default function ShareArea() {
  const [text, setText] = useState('');
  const [expiry, setExpiry] = useState('1h');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShare = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full max-w-3xl mx-auto p-6 bg-white dark:bg-pitch-800 rounded-2xl shadow-lg">
        <div className="space-y-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="content" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Share Text or Code
            </label>
            <DynamicTextArea
              id="content"
              value={text}
              onChange={setText}
              placeholder="Paste your text or code here..."
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Expiry Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="expiry"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-pitch-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="10m">10 minutes</option>
                  <option value="1h">1 hour</option>
                  <option value="24h">24 hours</option>
                  <option value="7d">7 days</option>
                </select>
              </div>
            </div>

            <div className="flex-1 min-w-[200px]">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Or Upload Files
              </label>
              <div className="relative">
                <input
                  type="file"
                  className="hidden"
                  id="file-upload"
                  multiple
                  onChange={(e) => console.log(e.target.files)}
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center justify-center w-full px-4 py-2 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 cursor-pointer"
                >
                  <Upload className="w-5 h-5 text-gray-400 mr-2" />
                  <span className="text-gray-600 dark:text-gray-400">Choose files or drag here</span>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleShare}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Share
            </button>
          </div>
        </div>
      </div>

      <ShareOptionsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        shareData={{
          url: 'https://share.example.com/abc123',
          code: 'ABC-123-XYZ',
        }}
      />
    </>
  );
}