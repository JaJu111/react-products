import React, { useState } from "react";

export function Rroduct({ product }) {
    const [details, setDetails] = useState(false); // 43:49 ga keldim

    return (
        <>
            <div 
                className="border rounded-md py-2 px-4 rounded flex flex-col items-center mb-2"
            >
                <img src={product.image} className="w-1/6" alt={product.title} />
                <p>{product.title}</p>
                <p className="font-bold">{product.price}</p>

                <button 
                    className="py-2 px-4 mb-2 border rounded-md text-white" 
                    style={{outline: 'none', backgroundColor: 'orange'}}
                    onClick={() => setDetails(prev => !prev)}
                >
                    { details ? 'Hide' : 'Show' } Details 
                </button>

                <div>
                    {details && <p>{product.description}</p>} 
                </div>
            </div>
        </>
    );
}