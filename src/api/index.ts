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

type Word = {
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

export const getWord = async (word: string) => {
  const response = await fetch(`${baseUrl}${word}`);
  const data : APIResponse = await response.json();

  const [audio] = data.phonetics.map(phonetic => {
    if (phonetic.audio) return phonetic.audio;
  });

  const wordData : Word = {
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


  return data;
}