function component() {
  const element = document.createElement('div');

  element.innerHTML = 'teste'

  return element;
}

let source = component()

document.body.appendChild(source);