import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Word from "../components/Word";

const word = {
  word: 'word',
  phonetic: '/wɜːd/',
  audio: 'https://lex-audio.useremarkable.com/mp3/word_us_1.mp3',
  meanings: [
    {
      partOfSpeech: 'noun',
      definitions: [
        {
          definition: 'The smallest unit of language that has a particular meaning and can be expressed by itself; the smallest discrete, meaningful unit of language. (contrast morpheme.)',
          example: null,
        },
        {
          definition: 'Something like such a unit of language:',
          example: null,
        },
        {
          definition: 'The fact or act of speaking, as opposed to taking action.',
          example: null,
        },
        {
          definition: 'Something that someone said; a comment, utterance; speech.',
          example: null,
        },
        {
          definition: 'A watchword or rallying cry, a verbal signal (even when consisting of multiple words).',
          example: "mum\'s the word",
        },
        {
          definition: 'A proverb or motto.',
          example: null,
        },
        {
          definition: 'News; tidings (used without an article).',
          example: "Have you had any word from John yet?",
        },
        {
          definition: 'An order; a request or instruction; an expression of will.',
          example: "Don\'t fire till I give the word",
        },
        {
          definition: 'A promise; an oath or guarantee.',
          example: "I give you my word that I will be there on time.",
        },
        {
          definition: 'A brief discussion or conversation.',
          example: "Can I have a word with you?",
        },
        {
          definition: '(in the plural) See words.',
          example: "There had been words between him and the secretary about the outcome of the meeting.",
        },
        {
          definition: '(sometimes Word) Communication from God; the message of the Christian gospel; the Bible, Scripture.',
          example: "Her parents had lived in Botswana, spreading the word among the tribespeople.",
        },
        {
          definition: '(sometimes Word) Logos, Christ.',
          example: null,
        },
      ],
      synonyms: [
        'Bible',
        'word of God',
        'God',
        'Logos',
        'promise',
        'vocable',
      ],
    },
    {
      partOfSpeech: 'verb',
      definitions: [
        {
          definition: 'To say or write (something) using particular words; to phrase (something).',
          example: "I’m not sure how to word this letter to the council.",
        },
        {
          definition: 'To flatter with words, to cajole.',
          example: null,
        },
        {
          definition: 'To ply or overpower with words.',
          example: null,
        },
        {
          definition: 'To conjure with a word.',
          example: null,
        },
        {
          definition: 'To speak, to use words; to converse, to discourse.',
          example: null,
        },
      ],
      synonyms: [
        'express',
        'phrase',
        'put into words',
        'state',
      ],
    },
    {
      partOfSpeech: 'interjection',
      definitions: [
        {
          definition: 'Truth, indeed, that is the truth! The shortened form of the statement "My word is my bond."',
          example: "\"Yo, that movie was epic!\" / \"Word?\" (\"You speak the truth?\") / \"Word.\" (\"I speak the truth.\")",
        },
        {
          definition: '(stereotypically) An abbreviated form of word up; a statement of the acknowledgment of fact with a hint of nonchalant approval.',
          example: null,
        },
      ],
      synonyms: [],
    }
  ],
  source: 'https://en.wiktionary.org/wiki/word',
};

const Main = () => {
  return (
    <div class="bg-white dark:bg-gray-900 text-gray-600 dark:text-white flex justify-center p-10 transition-all">
      <div class="flex w-1/2 flex-col">
        <Header />
        <SearchBar />
        <Word {...word}  />
      </div>
    </div>
  );
}

export default Main;