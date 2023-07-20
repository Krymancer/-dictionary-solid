interface SynonymsProps {
  synonyms: string[];
}

const Synonyms = ({ synonyms }: SynonymsProps) => {
  return(
    <div class="mt-10">
      Synonyms <span class="text-purple font-bold hover:underline cursor-pointer">{synonyms.join(' ')}</span>
    </div>
  )
};

export default Synonyms;