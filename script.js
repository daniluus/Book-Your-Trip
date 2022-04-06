const cadastro = document.querySelector('#cadastro');

function handleKeyUP(event){
  const target = event.target

  // não remove invalido após ok
  if(!target.checkValidity()){
    target.classList.add('invalido')
    cadastro.firstName.setCustomValidity('Fisrt name is important');
    cadastro.lastName.setCustomValidity('Last name is important')
    cadastro.email.setCustomValidity('Email is important')
    target.nextElementSibling.innerText = target.validationMessage;
  }
  
}

cadastro.addEventListener('keyup', handleKeyUP)