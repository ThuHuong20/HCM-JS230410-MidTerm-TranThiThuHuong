import React from 'react'

export default function Banner({ listCard }) {
    return (
        <div className='banner_container'>
            {
                listCard.map((item, index) => (
                    <div key={index} style={{ position: "relative" }}>
                        <img src={item.img} alt="" />
                        <div className='itemt_content' style={{ position: "absolute" }}>
                            <button >
                                {item.content}
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
