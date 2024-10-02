import React from 'react'
import { IoEarth } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import { AiOutlineMenuFold } from "react-icons/ai";

import './Header.css'

function Header() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-lg-12">
            
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
              <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png" style={{width:'250px',height:'60px'}} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
               <div className="col-lg-8">
               <div className="d-flex flex-wrap justify-content-center">
               <a href="#">Stays</a>
               <a href="#">Experiences</a>
             </div>
               </div>
                </div>
             
             <div className="col-lg-4">
             <div className="list d-flex justify-content-end">
              <span><a href="#">Airbnb your home <IoEarth />
              </a></span>
              <span><a href="#"><MdOutlineMenu />
              </a></span>
              <span><a href="#"><FaCircleUser />
              </a></span>
            </div>
             </div>
            </nav>
          
          </div>
        </div>
        <div className="header d-flex flex-wrap mt-3">
          <div className="item col-lg-10 mt-3 mb-3   d-flex flex-wrap justify-content-around  pe-3">
            <span><a href="#"><img src="https://a0.muscache.com/im/pictures/mediaverse/category_icon/original/3e5243c8-4d15-4c6b-97e3-7ba2bb7bb880.png" style={{width:'25px'}} alt="" /> Icone</a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"  style={{width:'25px'}} alt="" /> Amazing views </a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"  style={{width:'25px'}} alt="" /> Amazing pools</a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg" style={{width:'25px'}}  alt="" /> Farms</a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg" style={{width:'25px'}}  alt="" /> Top kities</a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/3271df99-f071-4ecf-9128-eb2d2b1f50f0.jpg" style={{width:'25px'}}  alt="" /> Tiny homes</a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg" style={{width:'25px'}}  alt="" /> OMG!</a></span>
            <span><a href="#"><img src="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"  style={{width:'25px'}} alt="" /> Beachfront</a></span>
          </div>
          <div className="filter col-lg-2 mb-3 mt-3" align="center">
          <span><AiOutlineMenuFold /> Filters</span>
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Header