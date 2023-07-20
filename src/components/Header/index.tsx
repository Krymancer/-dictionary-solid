import FontSelector from '../FontSelector';
import Separator from '../Separator';
import ThemeToggle from '../ThemeToggle';
import Logo from '../Logo';

const Header = () => {
  return (
    <header class="flex flex-row justify-between w-full items-center">
      <Logo />
      <div class="flex gap-4 items-center h-full">
        <FontSelector />
        <Separator orientation="vertical" />
        <ThemeToggle />
      </div>
  </header>
  );
}

export default Header;