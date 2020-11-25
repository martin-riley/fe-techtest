// source goes here
const app = () => {
  let noOfButtons = 0;
  let multiple = 0;

  const createNumberButtons = (noOfButtons, multiple) => {
    const NumberArray = [...Array(noOfButtons + 1).keys()]; // adding 1 to get from 0 to full number
    const buttons = NumberArray.map((number) => {
      const isMultiple = number % multiple === 0 ? ' button__multiple' : '';

      if (number !== 0) {
        return `<button class="button${isMultiple}">${number}</button>`;
      }
    });
    return buttons.join('');
  }

  const updateButtons = (e) => {
    multiple = parseInt(e.target.innerHTML);
    root.innerHTML = createNumberButtons(noOfButtons, multiple);
  }

  const init = () => {
    noOfButtons = 144;
    document.body.innerHTML += '<div id="root" class="container"></div>';
    const root = document.querySelector('#root');
    root.innerHTML = createNumberButtons(noOfButtons, multiple);
    root.addEventListener('click', updateButtons, false);
  }

  init(144);
}

export default app;
