import { sleep } from "./sleep";

export async function retryCall(
  calledFunction: () => unknown,
  delay = 1000,
  tries = 5
) {
  let triesLeft = tries;
  async function onError(err: Error) {
    triesLeft = tries - 1;
    if (!triesLeft) {
      throw err;
    }
    await sleep(delay);
    return await retryCall(calledFunction, delay, triesLeft);
  }
  try {
    await calledFunction();
  } catch (error) {
    onError(error as unknown as Error);
  }
}
