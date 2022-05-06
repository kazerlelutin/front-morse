import translator from "./translator.mjs";

async function timer(func, time, response = true) {
  const promiseTimer = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        func();
        resolve(response);
      }, time);
    });

  return await promiseTimer();
}

export default async function submitButton(func) {
  const container = document.getElementById("container_submit_button"),
    submitButton = document.getElementById("submit_button"),
    clockEl = document.createElement("div"),
    height = container.offsetHeight,
    width = container.offsetWidth;

  submitButton.disabled = true;

  clockEl.classList.add("clock");
  container.appendChild(clockEl);

  await timer(() => {
    submitButton.style.opacity = 0;
    clockEl.setAttribute("data-clock", "true");
  }, 100);

  clockEl.style.left = width / 2 - height / 2 + "px";
  clockEl.style.right = width / 2 - height / 2 + "px";

  const response = await func();

  clockEl.setAttribute("data-clock", "false");
  clockEl.style.left = 0;
  clockEl.style.right = 0;
  clockEl.style.borderRadius = "10px";
  clockEl.innerText = translator("Done !");
  clockEl.style.background = "#93764b";

  await timer(() => {
    submitButton.style.opacity = 1;
    clockEl.style.borderRadius = "0";
    clockEl.style.background = "#9f8053";
  }, 1500);

  await timer(() => {
    clockEl.style.top = "70%";
    clockEl.style.bottom = "-70%";
    clockEl.style.opacity = "0";
  }, 300);

  await timer(() => {
    container.removeChild(clockEl);
    submitButton.disabled = false;
  }, 300);

  return response;
}
