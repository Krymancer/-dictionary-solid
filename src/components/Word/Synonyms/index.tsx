import { Show } from "solid-js";

interface SynonymsProps {
  synonyms: string[];
}

const Synonyms = ({ synonyms }: SynonymsProps) => {
  return(
    <Show when={synonyms.length > 0}>
      
    <div class="mt-10">
      Synonyms <span class="text-purple font-bold hover:underline cursor-pointer">{synonyms.join(' ')}</span>
    </div>
    </Show>
  )
};

export default Synonyms;