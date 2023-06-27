import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delayInput = document.querySelector('input[name="delay"]');
const stepInput = document.querySelector('input[name="step"]');
const amountInput = document.querySelector('input[name="amount"]');
const NOTIFLIX_OPTIONS = { width: '300px' };
const PROMISE_SUCCESS_MESSAGE = '✅ Fulfilled promise';
const PROMISE_FAILURE_MESSAGE = '❌ Rejected promise';
const INVALID_AMOUNT_MESSAGE = 'Amount must be a non-negative integer and more than 0.';
const INVALID_DELAY_MESSAGE = 'Delay must be a non-negative integer.';
const INVALID_STEP_MESSAGE = 'Step must be a non-negative integer.';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      const message = shouldResolve ? PROMISE_SUCCESS_MESSAGE : PROMISE_FAILURE_MESSAGE;
      const notification = `${message} ${position} in ${delay}ms`;
      shouldResolve ? resolve(notification) : reject(notification);
    }, delay);
  });
};

function handleFormSubmit(e) {
  e.preventDefault();

  const firstDelay = parseInt(delayInput.value);
  const step = parseInt(stepInput.value);
  const amount = parseInt(amountInput.value);

  if (amount <= 0 || isNaN(amount)) {
    Notiflix.Notify.failure(INVALID_AMOUNT_MESSAGE);
    return;
  }
  if (firstDelay < 0 || isNaN(firstDelay)) {
    Notiflix.Notify.failure(INVALID_DELAY_MESSAGE);
    return;
  }
  if (step < 0 || isNaN(step)) {
    Notiflix.Notify.failure(INVALID_STEP_MESSAGE);
    return;
  }

  Notiflix.Notify.init(NOTIFLIX_OPTIONS);

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const delay = firstDelay + step * i;

    createPromise(position, delay)
      .then((notification) => {
        Notiflix.Notify.success(notification);
      })
      .catch((notification) => {
        Notiflix.Notify.failure(notification);
      });
  }
};

form.addEventListener('submit', handleFormSubmit);