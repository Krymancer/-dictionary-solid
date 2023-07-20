const FontSelector = () => {
  const handleFontChange = (font: string) => {
    document.body.style.fontFamily = font;
  };


  return (
    <select name="font-selector" class="appearance-none border-0 bg-white dark:bg-gray-900 font-bold" onChange={(e) => handleFontChange(e.target.value) }>
      <option class="font-sans" selected value="Inter">Sans Serif</option>
      <option class="font-serif" value="Lora">Serif</option>
      <option class="font-mono" value="Inconsolata">Monospace</option>
    </select>
  )

};

export default FontSelector;