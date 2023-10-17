import React from 'react';
import { useDarkMode } from './DarkModeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className={`bg-${isDarkMode ? 'gray' : 'yellow'}-500 text-${isDarkMode ? 'white' : 'black'} px-4 py-2 rounded-md`}
    >
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
