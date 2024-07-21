import React from 'react'
import '@/app/globals.css'


export async function getServerSideProps(context){
    const { id } = context.params;

    const creditResponse = await axios.get(`https://api.themoviedb.org/3/credit/${id}`, {
        params: {
          api_key: process.env.API_KEY,
        },
      });

      return {
        props: { cast:creditResponse.data },
      };

}

function id() {
  return (
    <div>[id]</div>
  )
}
import '@/app/globals.css'
import { getServerSideProps } from '../movies/[id]'
export default id