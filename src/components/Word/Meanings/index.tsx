import { For } from "solid-js";
import Definition from "./Definition";
import Synonyms from "../Synonyms";

interface MeaningsProps {
  meanings: {
    partOfSpeech: string,
    definitions: {
      definition: string,
      example?: string,
    }[],
    synonyms: string[],
  }[],
}

const Meanings = ({meanings}: MeaningsProps) => {
  return(
    <For each={meanings} fallback={null}>
      {(meaning, index) => (
            <div>
            <div class="flex items-center gap-4 mt-10">
              <span class="font-bold italic">{meaning.partOfSpeech}</span>
              <div class="border border-gray-300 h-0 w-full"></div>
            </div>
      
            <div class="mt-10">
              Meaning:
            <div class="flex items-center px-8 pt-4">
              <ul class="list-disc marker:text-purple flex flex-col gap-4" >
                <For each={meaning.definitions} fallback={null}>
                  {(definition, index) => (
                    <li>
                    <Definition definition={definition.definition} example={definition.example} />
                    </li>
                  )}
                </For>
                
              </ul>
            </div>
          </div>
          <Synonyms synonyms={meaning.synonyms} />
        </div>
      )}
  </For>
  );
};

export default Meanings;