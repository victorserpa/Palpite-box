import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-700 flex md:inline-flex'>
      <div className='container mx-auto text-center font-bold text-white' >
        Projeto desenvolvido por: Victor Serpa / {}
        <a className='hover:underline' href='https://linkedin.com/in/victorserpa'>Linkedin</a> / {}
        <a onClick className='hover:underline' href='https://github.com/victorserpa' target="_blank">Github</a>
        <div className='mt-2'>
          <img className='inline p-4' src='/logo_semana_fsm.png' />
          <img className='inline p-4' src='/logo_devpleno.png' />
        </div>
      </div>
    </div>
  )
}

export default Footer