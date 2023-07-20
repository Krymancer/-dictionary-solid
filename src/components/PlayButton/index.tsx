import { Accessor } from "solid-js";
import type { WordType } from "../../api";

interface PlayButtonProps {
  data: Accessor<WordType>;
}

const PlayButton = ({data}: PlayButtonProps) => {
  let audio : HTMLAudioElement = {} as HTMLAudioElement;

  const play = () => {
    audio.play();
  }

  return (
    <div class="rounded-full bg-purple/25 w-20 h-20 flex items-center justify-center cursor-pointer text-purple hover:bg-purple hover:text-white transition-all">
      <svg class="ml-1" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" onclick={play}>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0V21L21 10.5L0 0Z" fill="currentColor"/>
      </svg>
      <audio id="audio" src={data().audio} ref={audio}></audio>
  </div>
  );
}

export default PlayButton;