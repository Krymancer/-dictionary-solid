
interface FontSelectorProps {
  fonts: string[];
  selectedFont: string;
  onSelect: (font: string) => void;
}

const FontSelector = ({fonts, selectedFont, onSelect} : FontSelectorProps) => {
  return (
    <select class="appearance-none border-0 bg-white dark:bg-gray-900 font-bold">
      <option class="font-sans" selected>Sans Serif</option>
      <option class="font-serif">Serif</option>
      <option class="font-mono">Monospace</option>
    </select>
  )

};

export default FontSelector;