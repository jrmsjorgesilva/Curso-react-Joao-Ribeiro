import React from 'react';

const SocialWidget = () => {

  const today = new Date();

  return (
    <footer className='app__footer center'>
      <h3> Copyright &copy; {today.getFullYear()}</h3>
      <small>Todos os direitos reservados - JM Softwares</small>
    </footer>
  );
}

export default SocialWidget
