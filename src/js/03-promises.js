import Notiflix from 'notiflix';

document.querySelector('.form').addEventListener('submit', (evt) => {
    evt.preventDefault();

    const inputDelay = document.querySelector('input[name="delay"]');
    const inputStep = document.querySelector('input[name="step"]');
    const inputAmount = document.querySelector('input[name="amount"]');

    const delay = parseInt(inputDelay.value);
    const step = parseInt(inputStep.value);
    const amount = parseInt(inputAmount.value);

    for (let i = 1; i <= amount; i++) {
        const position = i;
        const promiseDelay = delay + (i - 1) * step;
    
        createPromise(position, promiseDelay)
          .then(({ position, delay }) => { 
            Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          });
      }
    });

    function createPromise(position, delay) {
        return new Promise((resolve, reject) => {
          setTimeout(() => { 
          const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
            resolve({ position, delay }); 
            } else {
            reject({ position, delay }); 
            }
          }, delay);
        });
      }