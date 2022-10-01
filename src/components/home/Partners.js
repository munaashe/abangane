import React from "react";
import { Container, Typography, Card, CardMedia } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import smhzw from '../../assets/partners/smhzw.png';
import boldDialogue from '../../assets/partners/boldDialogue.png';
import contact from '../../assets/partners/contact.png';
import dignityAfrica from '../../assets/partners/dignityAfrica.png';
import friendship from '../../assets/partners/friendship.png';
import life from '../../assets/partners/life.png';
import ocdtrust from '../../assets/partners/ocdtrust.png';
import saywhat from '../../assets/partners/saywhat.png';
import srczim from '../../assets/partners/src.png';

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: '#551b10', fontSize: '30px', marginRight: '-20px' }} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: '#551b10', fontSize: '30px', marginLeft: '-20px' }} />
    </div>
  );
}

const Partners = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };




  const data = [
    {
      image: contact,
    },
    {
      image: dignityAfrica,
    },
    {
      image: friendship,
    },
    {
      image: life,
    },
    {
      image: ocdtrust,
    },
    {
      image: smhzw,
    },
    {
      image: boldDialogue,
    },
    {
      image: saywhat,
    },
    {
      image: srczim,
    },
  ];


  return (
    <div className="container">
      <Container maxWidth='lg' sx={{ padding: '20px' }}>
        <Typography variant='h4' align='center' sx={{ color: '#551b10', fontWeight: 'bold' }}>
          Our Partners
        </Typography>
        <Container maxWidth='sm' sx={{ paddingBottom: '20px' }}>
          <Typography variant='subtitle1' align='center' sx={{ color: '#333' }}>
            We take pride in partnering with various organisations
            in delivering mental health solutions to the people. The
            organisations we have partnered with include:
          </Typography>
        </Container >
        <Container maxWidth='lg' sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <Slider {...settings}>
            {data.map((slide, i) => {
              return (
                <div>
                  <Card sx={{ height: '230px', display: 'flex', backgroundColor: 'transparent', border: 'none', boxShadow: 'none' }}>
                    <CardMedia
                      sx={{ objectFit: 'contain' }}
                      height='230px'
                      component='img'
                      image={slide.image}
                      alt={slide.caption}
                    />
                  </Card>
                </div>
              )
            })}
          </Slider>
        </Container>
      </Container>
    </div >
  )
}
export default Partners;