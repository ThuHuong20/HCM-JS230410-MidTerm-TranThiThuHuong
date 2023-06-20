import React from 'react'
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_icon'>
                <div >
                    <span style={{ padding: " 20px" }} >Blog</span>
                    <span style={{ padding: " 20px" }}>FAQs</span>
                    <span style={{ padding: " 20px" }}>Contact us</span>
                </div>
                <div>
                    <i style={{ padding: "10px 20px" }} class="fa-brands fa-facebook-f"></i>
                    <i style={{ padding: "10px 20px" }} class="fa-brands fa-twitter"></i>
                    <i style={{ padding: "10px 20px" }} class="fa-brands fa-instagram"></i>
                    <i style={{ padding: "10px 20px" }} class="fa-brands fa-pinterest"></i>
                </div>
            </div>
            <div style={{ marginTop: "40px" }}>
                <i style={{ marginLeft: "18px" }} class="fa-regular fa-copyright"></i>
                <span>2018 All Right Reserved.This Templateis made with by <span style={{ color: "red" }}>Quintus Labs</span></span>
            </div>
        </div>
    )
}
