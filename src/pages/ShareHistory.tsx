import React from 'react';
import { Clock, Link as LinkIcon, File, Trash2 } from 'lucide-react';

interface ShareItem {
  id: string;
  type: 'text' | 'file';
  name: string;
  date: string;
  expiresIn: string;
  accessCount: number;
}

const mockHistory: ShareItem[] = [
  {
    id: '1',
    type: 'text',
    name: 'Code snippet',
    date: '2024-02-20 14:30',
    expiresIn: '23 hours',
    accessCount: 3,
  },
  {
    id: '2',
    type: 'file',
    name: 'presentation.pdf',
    date: '2024-02-20 12:15',
    expiresIn: '2 days',
    accessCount: 1,
  },
];

export default function ShareHistory() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold sm:text-4xl mb-4">
          Share History
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Track and manage your recently shared content
        </p>
      </div>

      <div className="bg-white dark:bg-pitch-800 rounded-2xl shadow-lg overflow-hidden">
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {mockHistory.map((item) => (
            <div key={item.id} className="p-6 hover:bg-gray-50 dark:hover:bg-pitch-700/50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  {item.type === 'text' ? (
                    <LinkIcon className="w-5 h-5 text-blue-500 mt-1" />
                  ) : (
                    <File className="w-5 h-5 text-purple-500 mt-1" />
                  )}
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <div className="mt-1 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span>{item.date}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Expires in {item.expiresIn}</span>
                      </div>
                      <span>•</span>
                      <span>{item.accessCount} {item.accessCount === 1 ? 'access' : 'accesses'}</span>
                    </div>
                  </div>
                </div>
                <button
                  className="p-2 text-gray-400 hover:text-red-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}