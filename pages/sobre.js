import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      <PageTitle title='Sobre' />
      <p className='text-center my-10 mb-6 text-2xl'>Meu nome é Victor Schmucker Serpa, 
        apaixonado por tecnologia, iniciante na programação.</p>
      <h1 className='text-center font-italic my-4 text-2xl mb-6'>PalpiteBox é um site criado no primeiro módulo do FullStack Master curso do DevPleno</h1>
      <div>
        <Link href='/'>
          <a className='self-end underline'>Home</a>
        </Link>
      </div>
    </div>
  )
}

export default Sobre