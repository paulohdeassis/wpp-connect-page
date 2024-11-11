import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const ConnectForm = () => {
    const [instanceName, setInstanceName] = useState("");


  type connectForm = {
      phoneNumber: string
      instanceName: string
  }

  const axiosConfig = {
      'instanceName': instanceName,
      'instanceStatus': 'connecting',
  }

const url = process.env.WEBHOOK_URL
  const handleSubmit = (): void => {
    console.log(url, '<<<<<<<<<<<<<<<<<<<<');
    axios.post(`${url}`, axiosConfig).then(function (response) {
      console.log(response);
    })
  }

  return (
    <div>
        <form className="submit flex flex-col center text-gray-800 p-8">
          <p className='pb-2 font-semibold'>Nome da Instância</p>
            <input type="text"  className='p-2 rounded-md  bg-gray-100  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100' placeholder='Nome da Sua Empresa' required onChange={(e) => setInstanceName(e.target.value)}/>


        <button type='button' className='bg-main-blue rounded-lg p-2 text-white font-bold mt-4 hover:bg-dark-blue ' onClick={handleSubmit}>Iniciar</button>
        </form>
    </div>
  )
}

export default ConnectForm