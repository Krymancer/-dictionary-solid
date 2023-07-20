const Error = () => {
  return(
    <div class="flex flex-col items-center justify-center mt-36">
      <h1 class="text-2xl">😕</h1>
      <h3 class="text-gray-600 dark:text-white font-bold text-lg mt-11">No Definitions Found</h3>
      <p class="text-gray-400 text-base mt-6 text-center">Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
  );
};

export default Error;