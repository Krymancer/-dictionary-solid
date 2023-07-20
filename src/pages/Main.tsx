import { Match, Switch, createSignal } from "solid-js";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Word from "../components/Word";
import Error from "../components/Error";

import {getWord} from '../api';
import type {WordType} from '../api';

const Main = () => {
  const [word, setWord] = createSignal('');
  const [error, setError] = createSignal(false);
  const [wordData, setWordData] = createSignal({} as WordType);

  const handleWord = async (word: string) => {
    setWord(word);

    if(word === '') return;

    const response = await getWord(word);
    setWordData(response.data);
    setError(!response.sucess);
  }

  handleWord("keyboard");

  return (
    <main class="bg-white dark:bg-gray-900 text-gray-600 dark:text-white flex justify-center p-10 transition-all min-h-screen">
      <div class="flex w-1/2 flex-col">
        <Header />
        <SearchBar word={word} setWord={handleWord} />
        <Switch fallback={null}>
          <Match when={error()}><Error /></Match>
          <Match when={!error()}><Word data={wordData} /></Match> 
        </Switch>
      </div>
    </main>
  );
}

export default Main;