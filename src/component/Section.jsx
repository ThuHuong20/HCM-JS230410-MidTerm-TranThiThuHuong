import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const endDate = new Date("2023-12-31T23:59:59"); // Ngày giờ kết thúc đếm ngược
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = endDate - now;

            if (timeLeft < 0) {
                // Xử lý khi thời gian đếm ngược đã kết thúc
                clearInterval(interval);
            } else {
                const days = Math.floor(timeLeft / (10000 * 60 * 60 * 24));
                const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

                setCountdown({ days, hours, minutes, seconds });
            }
        }, 1000);

        // Xóa interval khi component unmount
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className='section_image'>
            <div>
                <img src='../images/deal_ofthe_week.png' alt='' />
            </div>
            <div className='time'>
                <h1>Deal Of The Week</h1>
                <hr style={{ width: "100px", height: "3px", backgroundColor: "red", color: "red", marginLeft: "190px" }} />
                <div className='countdown'>
                    <div className='countdown_item'>
                        <span style={{ fontSize: "30px", color: "red", fontWeight: "bold" }}>{countdown.days}</span>
                        <p>Days</p>
                    </div>
                    <div className='countdown_item'>
                        <span style={{ fontSize: "30px", color: "red", fontWeight: "bold" }}>{countdown.hours}</span>
                        <p> Hours</p>
                    </div>
                    <div className='countdown_item'>
                        <span style={{ fontSize: "30px", color: "red", fontWeight: "bold" }}>{countdown.minutes}</span>
                        <p>Mins</p>
                    </div>
                    <div className='countdown_item'>
                        <span style={{ fontSize: "30px", color: "red", fontWeight: "bold" }}>{countdown.seconds}</span>
                        <p>Sec</p>
                    </div>
                </div>
                <div >
                    <button className='shop_now'>SHOP NOW</button>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;