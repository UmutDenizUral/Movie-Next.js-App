import React, { useState } from 'react'

function ActorCard({ data }) {


    return (
        <div key={data.id} className="relative">
            {data.profile_path ? (
                <img
                    src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
                    alt={data.name}
                   
                    className="rounded-lg object-cover"
                />
            ) : (
                <div className=" bg-gray-300 flex items-center justify-center rounded-lg">
                    <span>{data.name}</span>
                </div>
            )}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-2 text-white">
                <h4 className="text-left">{data.name}</h4>
                <p className="text-left  text-sm">{data.character}</p>
            </div>
        </div>
    )
}

export default ActorCard