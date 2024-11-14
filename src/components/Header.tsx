import React, { useState, useRef } from 'react';
import { Menu, Moon, Sun, User, X, Share2, Clock } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import UserMenu from './UserMenu';

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 dark:bg-pitch-800/30 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-800/30 supports-[backdrop-filter]:bg-white/10 dark:supports-[backdrop-filter]:bg-pitch-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/20 lg:hidden transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
              <a href="/" className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ShareSync
              </a>
              
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center ml-8 space-x-4">
                <a
                  href="/"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    currentPage === '/' || currentPage === ''
                      ? 'bg-white/20 dark:bg-gray-800/20'
                      : 'hover:bg-white/20 dark:hover:bg-gray-800/20'
                  }`}
                >
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </a>
                <a
                  href="/history"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    currentPage === '/history'
                      ? 'bg-white/20 dark:bg-gray-800/20'
                      : 'hover:bg-white/20 dark:hover:bg-gray-800/20'
                  }`}
                >
                  <Clock className="w-5 h-5" />
                  <span>History</span>
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
              <button
                ref={userButtonRef}
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="p-2 rounded-lg hover:bg-white/20 dark:hover:bg-gray-800/20 transition-colors relative"
                aria-label="User menu"
              >
                <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-0 left-0 w-64 h-full bg-white dark:bg-pitch-800 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-4 space-y-4">
            <nav className="space-y-2">
              <a
                href="/"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === '/' || currentPage === ''
                    ? 'bg-gray-100 dark:bg-gray-700/50'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Share2 className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">Share</span>
              </a>
              <a
                href="/history"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  currentPage === '/history'
                    ? 'bg-gray-100 dark:bg-gray-700/50'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700/50'
                }`}
              >
                <Clock className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">History</span>
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* User Menu */}
      <UserMenu
        isOpen={isUserMenuOpen}
        onClose={() => setIsUserMenuOpen(false)}
        anchorRef={userButtonRef}
      />
    </>
  );
}