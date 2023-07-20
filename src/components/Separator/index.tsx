import { Switch, Match } from "solid-js";

interface SeparatorProps {
  orientation: 'horizontal' | 'vertical';
}

const Separator = ({orientation}: SeparatorProps) => {
  return (
    <Switch fallback={<div />}>
    <Match when={orientation === 'horizontal'}>
      <div class="border border-gray-300 h-0 w-full"></div>
    </Match>
    <Match when={orientation === 'vertical'}>
      <div class="border border-gray-300 h-full"></div>
    </Match>
  </Switch>
  )
};

export default Separator;