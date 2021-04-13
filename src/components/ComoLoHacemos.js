import React from 'react'

import howitsWork from '../images/how-its-work.png'
import styled from 'styled-components'


const FirstTry = styled.section`

    margin: 4rem;
    color: #4d4d4d;

.content{
    display:flex;
    justify-content:center;
    align-items:center;
}
.how-its-work-content{
    max-width: 600px;
    margin-right: 3rem;
}

.how-its-work-content h2 {
  margin-bottom: 15px;
  
}

.how-its-work-content .inner-box {
  margin-top: 35px;
}

.how-its-work-content .inner-box .single-item {
  position: relative;
  z-index: 1;
  padding-left: 100px;
  padding-bottom: 15px;
}

.how-its-work-content .inner-box .single-item .count-box {
  width: 65px;
  height: 65px;
  position: absolute;
  left: 8px;
  top: 8px;
  line-height: 65px;
  text-align: center;
  color: #6698ff;
  border-radius: 50%;
  background-color: #ffffff;
  -webkit-box-shadow: #edf1fe 0px 0px 0px 7px;
          box-shadow: #edf1fe 0px 0px 0px 7px;
  font-size: 30px;
  font-weight: 800;
  font-style: italic;
}

.how-its-work-content .inner-box .single-item h3 {
  margin-bottom: 5px;
  /* font-size: 24px; */
}

.how-its-work-content .inner-box .single-item::before {
  content: '';
  position: absolute;
  top: 20px;
  width: 1px;
  height: 100%;
  background-color: #6698ff;
  z-index: -1;
  left: 40px;
}


.how-its-work-content .inner-box .single-item:last-child {
  padding-bottom: 0;
}

.how-its-work-content .inner-box .single-item:last-child::before {
  display: none;
}

.how-its-work-content .inner-box .single-item:last-child::after {
  display: none;
}
.how-its-work-image{
    margin-top: auto;
}

`;

const ComoLoHacemos = () => {
    return (
        <FirstTry className="how-its-work-area" >
            <div className="container" style={{margin:'auto'}}>
                <div className="content" >
                   
                        <div className="how-its-work-content">
                            <p className= 'preHeading'>Como lo hacemos</p>
                            <h1>Outstanding Digital Experience</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>

                            <div className="inner-box">
                                <div className="single-item">
                                    <div className="count-box">
                                        1
                                    </div>
                                    <h3>Best Performence</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        2
                                    </div>
                                    <h3>Dedicated Team Member</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                                <div className="single-item">
                                    <div className="count-box">
                                        3
                                    </div>
                                    <h3>24/7 Support</h3>
                                    <p>Dolor sit amet consectetur elit eiusmod tempor incidi dunt labore dolore magna aliqua enim.</p>
                                </div>
                            </div>
                        </div>
                    

                   
                        <div className="how-its-work-image">
                            <img src={howitsWork} alt="choose" />
                        </div>
                   
                </div>
            </div>
        </FirstTry>
    )
}

export default ComoLoHacemos