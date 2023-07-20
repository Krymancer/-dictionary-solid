const ThemeToggle = () => {
  function getPreferedTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  function setTheme() {
    document.documentElement.classList.add(getPreferedTheme());
  }

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark')
  }

  setTheme();

  return (
    <div class="flex gap-4">
      <div class="w-10 bg-gray-400 rounded-full flex items-center dark:bg-purple dark:justify-end cursor-pointer" onclick={toggleDarkMode}>
        <div class="rounded-full bg-white dark:self-end w-[14px] h-[14px] m-1 transition-all"></div>
      </div>
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="dark:stroke-purple" stroke="#757575" fill-rule="evenodd" clip-rule="evenodd" d="M1 10.449C0.998458 12.8283 1.80169 15.1383 3.27914 17.0033C4.75659 18.8683 6.82139 20.1788 9.13799 20.7218C11.4545 21.2647 13.8866 21.0082 16.039 19.994C18.1912 18.9797 19.9373 17.2673 20.9931 15.1352C11.5442 15.1352 6.85799 10.4479 6.85799 1C5.09842 1.87311 3.61767 3.22033 2.58266 4.88981C1.54765 6.5593 0.999502 8.48469 1 10.449Z" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
  </div>
  )
};

export default ThemeToggle;