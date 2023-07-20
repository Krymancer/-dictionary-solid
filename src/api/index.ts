const baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

interface APIResponse {
  word: string
  phonetic: string
  phonetics: {
    text: string
    audio: string
    sourceUrl?: string
    license?: {
      name: string
      url: string
    }
  }[]
  meanings:  {
    partOfSpeech: string
    definitions: {
      definition: string
      synonyms: string[]
      antonyms: any[]
      example?: string
    }[]
    synonyms: string[]
    antonyms: string[]
  }[]
  license: {
    name: string
    url: string
  }
  sourceUrls: string[]
}

export type WordType = {
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
};

type WordResponseType = {
  data: WordType,
  sucess: boolean,
};

export const getWord = async (word: string) : Promise<WordResponseType> => {
  word = word.trim().toLowerCase();

  const response = await fetch(`${baseUrl}${word}`);

  if (!response.ok) {
    return {
      data: {} as WordType,
      sucess: false
    }
  }

  const [data] : APIResponse[] = await response.json();

  const [audio] = data.phonetics.map(phonetic => {
    if (phonetic.audio) return phonetic.audio;
  });

  const wordData : WordType = {
    word: data.word,
    phonetic: data.phonetic,
    audio: audio,
    meanings: data.meanings.map((meaning) => ({
      partOfSpeech: meaning.partOfSpeech,
      definitions: meaning.definitions.map((definition) => ({
        definition: definition.definition,
        example: definition.example,
      })),
      synonyms: meaning.definitions[0].synonyms,
    })),
    source: data.sourceUrls[0],
  };
  
  return {
    data: wordData,
    sucess: true,
  };

  
}