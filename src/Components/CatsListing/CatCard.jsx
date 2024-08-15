import React from 'react'

const CatCard = ({ data }) => {
    if (!data) {
        return <p>Loading...</p>;
    }

    const { image, name, description, origin, temperament, life_span } = data;

    return (
        <div className='h-auto sm:h-[643px] w-72 sm:w-[375px] rounded-[18px] bg-[#FFFFFF] border'>
            <div className="card-top">
                <img 
                    className='rounded-t-[18px] h-52 sm:h-[325px] w-full object-cover' 
                    src={image} 
                    alt={`${name} image`} 
                />
            </div>

            <div className="card-bottom p-2 relative">
                <p className='mb-1 font-medium text-xl sm:text-3xl leading-9'>{name}</p>
                <p className='text-xs sm:text-sm leading-4 mb-1'>{description || 'No description available.'}</p>

                <div className="origin flex justify-between items-center w-1/2 mb-1">
                    <span className='font-medium italic text-xs sm:text-sm'>Origin</span>
                    <span className='text-xs sm:text-sm leading-5'>{origin || 'Unknown'}</span>
                </div>
                
                <div className="temperament mb-2">
                    <p className='font-medium italic text-xs sm:text-sm'>Temperament</p>
                    <div className='flex gap-2'>
                    {
                        temperament.split(" ").slice(0, 4).map((word, index) => (
                            <p key={index} className='text-[#353535] text-xs font-sans bg-[#EFEFEF] rounded-md px-1'>
                                {word.slice(0, 4)}
                            </p>
                        ))
                    }
                    </div>
                </div>
                
                <div className="life-span flex justify-between items-center w-1/2 mb-1">
                    <span className='font-medium italic text-xs sm:text-sm'>Life-Span</span>
                    <span className='text-xs sm:text-sm font-sans'>{life_span || 'Unknown'}</span>
                </div>
                <button className=" text-[#7D99E2] absolute top-60 sm:top-[268px]" onClick={() =>{
                    window.open(data.wikipedia_url, "_blank")
                }}>
                    Learn More
            </button>
            </div>
        </div>
    );
};

export default CatCard;
