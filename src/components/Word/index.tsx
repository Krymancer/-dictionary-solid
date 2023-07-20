import { Accessor } from "solid-js";
import PlayButton from "../PlayButton";
import Meanings from "./Meanings";
import Source from "./Source";
import Error from '../Error';

import type { WordType } from "../../api";

interface WordProps {
  data: Accessor<WordType>;
}

const Word = ({ data } : WordProps) => {
  return (
      <div id="word" class="mt-11">
      <div class="flex justify-between">
        <div>
          <h1 class="text-2xl font-bold">{data().word}</h1>
          <span class="text-purple">{data().phonetic}</span>
        </div>

        <PlayButton data={data} />
      </div>

      <Meanings data={data} />

      <Source data={data} />
    </div>
    );
};

export default Word;