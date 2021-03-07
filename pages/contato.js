import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Contato = () => {
  return (
    <div>
      <PageTitle title='Contato' />
      <h1 className='text-center my-10 mb-6 text-2xl'>Para entrar em contato acesse os links no rodapé da página.</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Contato