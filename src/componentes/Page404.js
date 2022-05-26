import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {

  const imgSrc = 'https://static.vecteezy.com/ti/vetor-gratis/p1/1812604-page-not-found-404-design-vector-illustration-404-error-web-page-concept-minimal-cartoon-flat-style-vetor.jpg';

  return(
    <>
      <img
        width='70%'
        height='70%'
        src={imgSrc}
        alt='Mensagem 404 - página não encontrada'
      />
      <p>
        Página Não Encontrada
      </p>
      <p style={{ margin: '10px 10px 40px 10px'}}>
        <Link to='/'>
          Voltar
        </Link>
      </p>
    </>
  )
}


// export default connect(state => ({ status: state }))(Card);
export default Page404;
