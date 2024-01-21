"use client"
import React, { useState, useRef } from 'react'
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [active, setActive] = useState(true)
  const currentValue = useRef(null)
  const options = [
    { value: 'DEHRADUN', label: 'Dehradun' },
    { value: 'SAHARANPUR', label: 'Saharanpur' },
    // Add more options as needed
  ];
  const handleChange = (selectedOption) => {
    setActive(true)
    setSelectedOption(selectedOption);
    currentValue.current.innerText = ""
  };
  const checkAvailability = () => {
    if (selectedOption.value === "DEHRADUN") {
      setActive(false)
      currentValue.current.innerText = ""
    } else {
      setActive(true)
      currentValue.current.innerText = "Unfortunately, we are not delivering in your area, yet."
    }
  }

  const handleOrderClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const phoneNumber = '+918077989600';

    if (isIOS) {
      // Open in WhatsApp app for iOS
      window.location.href = `whatsapp://send?phone=${phoneNumber}`;
    } else {
      // Open in web fallback for other browsers
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    }
  };
  return (
    <div>
      <div className='logo-1' >
        <img src='\img\pharmo.jpg' className='log' alt='log' />
      </div>
      <div className='container mt-4 mb-4 section'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-5'>
            <h1 className='hedding pb-4'>Same Day Medicine Delivery</h1>
            <img src='/img/heroDesktop.png' className='img-right-mobile' />
            <h3 className='hedding-1 pb-4'>Get <span>15% off </span> on orders</h3>
            <div className='pb-0 input-section'>
              <div className='input  '>
                {/* <Locuctions />
                <input type='text' placeholder=' Enter PIN code' /> */}
                <Select
                  className='w-100'
                  value={selectedOption}
                  onChange={handleChange}
                  options={options}
                  isSearchable={true} // Enables search functionality
                  placeholder="Search or select..."
                                />
              </div>
              <button className='btns ' onClick={checkAvailability}>
                Check Availability
              </button>
            </div>
            <div className="" style={{ height: "30px", color: "red", fontSize: "12px" }}>
              <p className='ms-5 ms-md-0 mb-0' ref={currentValue}></p>
            </div>
            <div className='pb-4 orders1'>
              {/* active */}


              {!active ? <button className='orders' onClick={handleOrderClick}  >
                Order now
              </button> : <button className='orders-disbal' >
                Order now
              </button>}


            </div>
          </div>
          <div className='col-12 col-md-7'>
            <img src='/img/heroDesktop.png' className='img-right-web' />
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ background: "#10C3C7" }}>
        <div className='row'>
          <h3 className='medicinec text-center pt-5 pb-5 '>Get medicines in 3 simple steps</h3>
          <div className='section-2'>
            <div className='card1'>
              <p>Prescription</p>
              <img src='/img/page2_1.png' />
              <span className='text-center'>Take a picture of the medicine or share the prescription on whatsapp</span>
            </div>
            <div className='card1'>
              <p>Location</p>
              <img src='/img/page2_2.png' />
              <span className='text-center'>Share your current/ live location on whatsapp</span>
            </div>
            <div className='card1'>
              <p>Payment on delivery</p>
              <img src='/img/page2_3.png' />
              <span className='text-center'>After receiving medicines pay directly via preferred method</span>
            </div>

          </div>
        </div>
      </div>
      <div className='section-3'>
        <p className='foter pt-3 mb-0'>Supported By</p>
        <img src='\img\runway.jpeg' />
        <img src='\img\startup.jpeg' />
        <h3 className='mt-1'>Email for queries:<span>querypharmos@gmail.com</span></h3>
        <h4 className='pt-0'>Kanhaiya Vihar Kargi Grant Dehradun Uttarakhand -248001</h4>
      </div>
      <ToastContainer />

      <style jsx>{
        `
 .logo-1{
  padding-top: 0px;
  padding-bottom: 0px;
 }
 .log{
  height:199px;
  margin-top:-50px;
   width:200px;

 }
 .hedding{
  font-size: 2.25rem;
  font-weight:300;
 }
   .input{
    width: 50%;
    border: none;
  }
  // input:focus-visible {
  //   outline: none;
  //   border: none;
  // }
 .hedding span{
  color: #10C3C7;
 }
 .hedding-1{
  font-size: 1.5rem;
    line-height: 2rem;
    color: #646464;
 }
 .input-section{
  display:flex;
  justify-content:space-between;
  gap:15px;
 }
 .hedding-1 span{
  font-size: 1.5rem;
    line-height: 2rem;
    color: #FE5B00;
    font-weight: 700;
 }
 .img-right-web{
  width:80%;
  height:50vh
  display:block;
 }
 .img-right-mobile{
  display:none;
 }
 .input{
  // border-bottom: 2px solid #3E6CD1;
 }
 .btns{
  border-color: #10C3C7;
  border-width: 2px;
  color: #10C3C7;
  border-radius:10px;
  background:#FFFF;
  height:40px;
  
  width:50%;
  outline:none;
   border:1px solid #10C3C7;
 }
 .orders{
  background-color: #10C3C7;
  color:#FFFF;
  height:50px;
  border-radius:10px;
  width:160px;
  border:none;
 }
 .orders-disbal{
  background-color: #10C3C7;
  color:#FFFF;
  height:50px;
  border-radius:10px;
  width:160px;
  border:none;
  cursor:not-allowed !important;
  opacity: 0.4;
 }
 .section-2{
  display:flex;
  justify-content: space-around;
  height:80vh
 }
 .card1{
  width:20rem;
display:flex;
justify-content: space-betwwen;
    align-items: center;
    height: 400px;
    flex-direction: column;
    background:#FFFF;
    border-radius:24px;
    padding:14px;
 }
 .card1 p{
  font-weight: 600;
  font-size:24px;
 }
 .card1 img{
  weight:100%;
  height:250px;
 }
 .card1 span{
  width:20vw;
  padding-top:15px;
 }
 .section-3{
  background:black;
  text-align: center;
  padding-bottom:20px;
 }
 .section-3 p{
color:#FFFF;
font-size:24px;
 }
 .section-3 img{
  weight:200px;
  height:50px;
   }
 .section-3 h3{
  font-size:16px;
  color:#FFFF;
   }
   .section-3 h3 span{
    color:#7EA6FF;
   }
   .section-3 h4{
    color:#FFFF;
    font-size:16px;
    padding-top:10px;
   }
   .section{
    width:70%;
   }
   .medicinec{
    font-size:30px;
    color:#FFFF;
   }
   :global(.css-13cymwt-control){
border:1px solid #10C3C7 !important;
border-radius:10px !important;
   }
   :global(.css-t3ipsp-control:hover){
    border-color:#10C3C7 !important;
    border:1px solid #10C3C7 !important;
    box-shadow: none !important;
    border-radius:10px !important;
    height:48px !important;
       }
   :global(.css-1u9des2-indicatorSeparator){
    border:none !important;
   }
   :global(.css-1xc3v61-indicatorContainer){
    color:#10C3C7 !important;
   }
   :global(.css-tj5bde-Svg){
    color:#10C3C7 !important;
   }
   @media only screen and (min-width: 300px) and (max-width: 767px) {
    .section{
      width:100%;
     }
     .img-right-mobile{
      display:block;
      width:80%;
      height:50vh
      margin:auto;
     }
     .img-right-web{
      display:none;
     }
     .section-2{
      flex-direction: column;
      height:auto;
      align-items: center;
      padding-bottom:40px;
     }
     .card1{
      margin-top:20px;
      width:19.66rem;
      height:340px;
      justify-content: space-between;
     }
     .card1 img{
      height:150px;
     }
     .card1 span{
      width:100%;
      font-weight:16px;
     }
     .foter {
      display: flex;
    flex-direction: column;
    width:200px;
    margin:auto;
    padding-top:20px;
     }
     :global(.css-13cymwt-control){
      border:1px solid #10C3C7 !important;
      heigth:50px !important;
      padding:5px;
      border-radius:10px !important;
         }
     .section-3 img{
      weight:30px;
      height:40px;
       }
       .section-3 h4{
        font-size:12px;
       }
       .hedding{
        text-align: center;
       }
       .hedding-1{
        text-align: center;
       }
       .input-section{
        display:flex;
        justify-content:space-between;
        flex-direction: column;
        width:80%;
        margin:auto;
        align-items: center;
       }
       .input{
        width:100%;
       }
       .btns{
        margin-top:10px;
        width: 100%;
        height:48px;
       }
       .orders1{
        display: flex;
    align-items: center;
    justify-content: center;
       }
       .orders {
width:80%;
height:44px;

       }
       .orders-disbal{
        width:80%;
       }
       .log{
        height:150px;
        margin-top:-20px;
       }
          }
   
 `
      }</style>
    </div>
  )
}

export default Home
