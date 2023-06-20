import React from 'react'

export default function Deliverys() {
    return (
        <div className='Delivery_container'>
            <div className='shipping' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)", width: "300px", paddingTop: "10px", paddingLeft: "5px" }}>
                <div>
                    <img src='../images/car.jpg' alt='' />
                </div>
                <div>
                    <b>FREE SHIPPING</b>
                    <p>Suffered Alteration in Some Form</p>
                </div>
            </div>
            <div className='cash ' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)", width: "300px", paddingTop: "10px", paddingLeft: "5px" }}>
                <div>
                    <img src='../images/money.jpg' alt='' />
                </div>
                <div>
                    <b>CASH ON DELIVERY</b>
                    <p>The Internet Tend To Repeat</p>
                </div>
            </div>
            <div className='return' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)", width: "300px", paddingTop: "10px", paddingLeft: "5px" }}>
                <div>
                    <img src='../images/callback.jpg' alt='' />
                </div>
                <div>
                    <b>45 DAYS RETURN</b>
                    <p>Making it look Like Readable</p>
                </div>
            </div>
            <div className='opening' style={{ display: "flex", backgroundColor: "hsl(0, 0%, 95%)", width: "300px", paddingTop: "10px", paddingLeft: "5px" }}>
                <div>
                    <img src='../images/oclock.jpg' alt='' />
                </div>
                <div>
                    <b>OPENING ALL WEEK</b>
                    <p>8AM-09PM</p>
                </div>
            </div>
        </div>
    )
}
