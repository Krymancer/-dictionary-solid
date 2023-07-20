import PlayButton from "../PlayButton";
import Meanings from "./Meanings";
import Source from "./Source";

interface WordProps {
  word: string;
  phonetic: string;
  audio?: string;
  meanings: {
    partOfSpeech: string,
    definitions: {
      definition: string,
      example?: string,
    }[],
    synonyms: string[],
  }[],
  source: string,
}

const Word = ({word, phonetic, audio, meanings, source} : WordProps) => {
return (
    <div id="word" class="mt-11">
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">{word}</h1>
        <span class="text-purple">{phonetic}</span>
      </div>

      <PlayButton audio={audio} />
    </div>

    <Meanings meanings={meanings} />

    <Source source={source} />
  </div>
  );
};

export default Word;