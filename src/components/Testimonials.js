import React, { Component } from "react";
import Slider from "react-slick";
import {BsChatQuote} from 'react-icons/bs'

import styled from 'styled-components'

const TestimonialStyles = styled.div`
    padding: 6rem 0;
    position: relative;

    svg{
      position: absolute;
      font-size: 150px;
      transform: rotate(-10deg);
      color: #0050f5;
      opacity: 0.2;
      left: 80%;
      top: 40px;
    }

    .slick-slide{
        opacity: 1;
        
    }
    .slick-slide > div{
      outline: none;
    }

    .testimonialWrapper{
        text-align: center;
        color: #f2f2f2;
        max-width: 700px;
        margin: auto;
        padding: 1rem 2rem;
        border: 1px solid #f2f2f2;
        border-radius: 20px;

        .comment{
            max-width: 600px;
            margin: auto;
            padding: 15px;
        }
    }
  
  @media(max-width:800px){

    svg{
      position: absolute;
      font-size: 100px;
      transform: rotate(-10deg);
      color: #0050f5;
      opacity: 0.2;
      left: 65%;
      top: 60px;
    }
    .testimonialWrapper{
      margin: 0rem 1rem;
    }
      
    
  }
`;



export default class Testimonials extends Component {
  render() {
    const settings = {
     
      dots: true,
      focusOnSelect: false,
      infinite: true,
      autoplay: false,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    return (
      <TestimonialStyles>
        <BsChatQuote/>
        <Slider {...settings} style={{opacity: 1, outline: 'none'}}>
          <div>
            <div className = 'testimonialWrapper'>
                <h3>Maria lupita de los dolores</h3>
                <p className= 'preHeading'>CEO Emergia España</p>
                <p className='comment'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur unde quae accusantium voluptatum. Amet consectetur, reiciendis corporis provident delectus dolorum?
                </p>
            </div>
          </div>
          <div>
            <div className = 'testimonialWrapper'>
                <h3>Maria lupita de los dolores</h3>
                <p className= 'preHeading'>CEO Emergia España</p>
                <p className='comment'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur unde quae accusantium voluptatum. Amet consectetur, reiciendis corporis provident delectus dolorum?
                </p>
            </div>
          </div>
          <div>
            <div className = 'testimonialWrapper'>
                <h3>Maria lupita de los dolores</h3>
                <p className= 'preHeading'>CEO Emergia España</p>
                <p className='comment'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur unde quae accusantium voluptatum. Amet consectetur, reiciendis corporis provident delectus dolorum?
                </p>
            </div>
          </div>
          <div>
            <div className = 'testimonialWrapper'>
                <h3>Maria lupita de los dolores</h3>
                <p className= 'preHeading'>CEO Emergia España</p>
                <p className='comment'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur unde quae accusantium voluptatum. Amet consectetur, reiciendis corporis provident delectus dolorum?
                </p>
            </div>
          </div>
         
        </Slider>
      </TestimonialStyles>
    );
  }
}