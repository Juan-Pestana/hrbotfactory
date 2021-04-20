import React, { Component } from "react";
import Img from 'gatsby-image'
import Slider from "react-slick";




export default class CenterMode extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
      }
      play() {
        this.slider.slickPlay();
      }
      pause() {
        this.slider.slickPause();
      }


      

      render() {

        

    


        var settings = {
          className: 'center',
          centerMode: true,
          dots: false,
          arrows: false,
          centerPadding: '0px',
          autoplay: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
          
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
            
              
              }
            },
            
          ]
        };

        const images = [...this.props.data.clients.nodes]

       

        

    return (
      <div style={{padding: '6rem'}}>
       
        <Slider {...settings}>
          {images.map(image =>
          <div key={image.id} >
            <Img fluid={image.childImageSharp.fluid} className='slide'/>
          </div>)}
          
        </Slider>
      </div>
    );
  }
}


