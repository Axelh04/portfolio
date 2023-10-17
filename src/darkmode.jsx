
import { useDarkMode } from './Darkmode/DarkModeContext';

const { isDarkMode } = useDarkMode();

// Check if dark mode is enabled and set the body background color accordingly
const body = document.body;
body.classList.add(isDarkMode ? 'dark-mode' : 'light-mode');
