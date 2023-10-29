import React from 'react'

const Home = () => {
  return (
    <div className='container pt-12 '>
      <p>
          Al iniciar en RIVAL REGIONS apareces en la <a href="">region </a>
          puesta por el admin del juego ejemplo si eres colombiano apareces en
          Bogota con una cuenta de nivel 30 y sus habilidad en nivel 30 cada una
          una cantidad de oro y dinero. segun la plataforma de uno puede variar
          un poco si es pc o es en el movil.
        </p>
        <div className='grid grid-cols-2'>
        <div className='m-2 flex-col justify-center items-center'>
          <h1>en el pc puede tener una vista asi</h1>
          <img src="/home.png" alt="imagen de inicio" />
        </div>
        <div className='m-2 flex flex-col justify-center items-center'>
          <h1>en el movil puede tener una vista asi</h1>
          <img src="/homemovil.png" alt="imagen de inicio" />
        </div>
        </div>
    </div>
  )
}

export default Home;
