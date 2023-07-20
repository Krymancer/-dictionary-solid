import { Show } from "solid-js";

interface DefinitionProps{
  definition: string;
  example?: string;
}

const Definition = ({definition, example}: DefinitionProps) => {
  return(
    <div class="flex flex-col">
      <span>{definition}</span>
      <Show when={example} fallback={null}>
        <span class="text-gray-400">“{example}”</span>
      </Show>
  </div>
  );
};

export default Definition;