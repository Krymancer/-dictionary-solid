import { Accessor } from "solid-js";
import type { WordType } from "../../../api";

interface SourceProps {
  data: Accessor<WordType>;
}

const Source = ({data}: SourceProps) => {
  return (
    <div class="mt-10">
      <div class="border border-gray-300 h-0 w-full"></div>
      <div class="text-gray-400 mt-4">Source <a class="text-gray-600 dark:text-white underline" target="_blank" href={data().source} >{data().source}</a></div>
    </div>
  );
};

export default Source;