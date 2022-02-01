import { customElement } from "solid-element";
import { createSignal, onCleanup, onMount } from "solid-js";

function getRemainSeconds(dueDate: number): number {
  const now = Date.now();
  const diff = dueDate - now;
  return diff < 0 ? 0 : Math.round(diff / 1000);
}

function formatRemains(remains: bigint): string {
  let n = remains;
  const days = n / 86400n;
  n %= 86400n;
  const hours = n / 3600n;
  n %= 3600n;
  const minutes = n / 60n;
  n %= 60n;
  const seconds = n % 60n;
  return `${days}D ${hours}H ${minutes}M ${seconds}S`;
}

interface Props {
  date: number;
  interval: number;
}

customElement<Props>(
  "my-custom-component",
  {
    date: Date.now(),
    interval: 1000,
  },
  (props) => {
    const [remains, setRemains] = createSignal(0);
    const [intervalId, setIntervalId] = createSignal(-1);
    onMount(() => {
      const updateRemains = () => {
        const remainSeconds = getRemainSeconds(props.date);
        setRemains(remainSeconds);
        if (remainSeconds <= 0) {
          clearInterval(intervalId());
        }
      };
      updateRemains();
      const handle = setInterval(updateRemains, props.interval);
      setIntervalId(handle);
    });
    onCleanup(() => clearInterval(intervalId()));

    return <div>{formatRemains(BigInt(remains()))}</div>;
  }
);
