import iziToast from "izitoast";


const form = document.querySelector('.form')
form.addEventListener('submit', handlerForm)

function handlerForm(e) {
  e.preventDefault();

  const formDelay = document.querySelector('[name="delay"]');
  const formState = document.querySelector('[name = "state"]');

  const delay = parseInt(formDelay.value);
  const state = formState.value;

  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        res(delay);
      } else { rej(delay) };
    }, delay);
  });

  promise
    .then((value) => {
      iziToast.show({
        backgroundColor: '#59a10d',
        messageColor: '#fff',
        messageSize: '16px',
        position: 'topRight',
        message: `✅ Fulfilled promise in ${value} ms`
      });
    })
    .catch((value) => {
      iziToast.show({

        message: `❌ Rejected promise in ${value} ms`
      });
    });

}






