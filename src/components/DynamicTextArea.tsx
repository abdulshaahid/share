import React, { useState, useRef, useEffect } from 'react';

interface DynamicTextAreaProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id: string;
}

export default function DynamicTextArea({ value, onChange, placeholder, id }: DynamicTextAreaProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${Math.max(100, textAreaRef.current.scrollHeight)}px`;
    }
    setIsEmpty(value.length === 0);
  }, [value]);

  return (
    <div className="relative">
      <textarea
        ref={textAreaRef}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full p-4 rounded-lg border border-gray-200 dark:border-gray-700 
          bg-gray-50 dark:bg-pitch-800 focus:ring-2 focus:ring-blue-500 
          focus:border-transparent transition-all duration-200 ease-in-out
          ${isEmpty ? 'text-sm' : 'text-base'}`}
        style={{ minHeight: '100px', resize: 'none' }}
      />
    </div>
  );
}