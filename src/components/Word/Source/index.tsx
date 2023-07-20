interface SourceProps {
  source: string;
}

const Source = (props: SourceProps) => {
  return (
    <div class="mt-10">
      <div class="border border-gray-300 h-0 w-full"></div>
      <div class="text-gray-400 mt-4">Source <a class="text-gray-600 dark:text-white underline" href="#">{props.source}</a></div>
    </div>
  );
};

export default Source;