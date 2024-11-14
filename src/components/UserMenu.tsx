import React, { useRef, useEffect } from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface UserMenuProps {
  isOpen: boolean;
  onClose: () => void;
  anchorRef: React.RefObject<HTMLButtonElement>;
}

export default function UserMenu({ isOpen, onClose, anchorRef }: UserMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !anchorRef.current?.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose, anchorRef]);

  if (!isOpen) return null;

  // Calculate position based on anchor element
  const anchorRect = anchorRef.current?.getBoundingClientRect();
  const menuStyle = anchorRect ? {
    position: 'fixed' as const,
    top: `${anchorRect.bottom + 8}px`,
    right: `${window.innerWidth - anchorRect.right}px`,
  } : {};

  return (
    <div
      ref={menuRef}
      className="z-50 min-w-[200px] rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-pitch-800 border border-gray-200 dark:border-gray-700"
      style={menuStyle}
    >
      <div className="py-1">
        <a
          href="/login"
          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
        >
          <LogIn className="w-4 h-4 mr-2" />
          Login
        </a>
        <a
          href="/signup"
          className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Sign Up
        </a>
      </div>
    </div>
  );
}