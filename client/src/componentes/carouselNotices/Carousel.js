import React, { useState, useEffect, createRef } from "react";
import "antd/dist/antd.css";
import "./Carousel.scss";
import { Carousel, Avatar } from "antd";
import Card from "../card";
import DummyData from "dummyData/dummyDataCarousel";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ApiService from '../../services/ApiService'

const CarouselNotice = () => {
  const [cards, setCards] = useState();
  const [toShow, setToShow] = useState(window.innerWidth <= 600?1:2);

  const carousel = createRef();

  const handleNext = () => carousel.current.next();

  const handlePrev = () => carousel.current.prev();

  useEffect(() => {
    ApiService.getNoticia().then(
      (data) => {
          console.log('retorno',data); 
          if (data.noticias.length > 0) {
            console.log(data.noticias);
            setCards(
              data.noticias.map(
                (item, i) => (
                  <div key={i}>
                    <Card
                      img={item.img}
                      web={true}
                      title={item.title}
                      description={item.description}
                      meta={item.meta}
                    />
                  </div>
                )
              )
            )
          }else{
            setCards(
              DummyData.map(
                (item, i) => (
                  <div key={i}>
                    <Card
                      img={item.img}
                      web={false}
                      title={item.title}
                      description={item.description}
                      meta={item.meta}
                    />
                  </div>
                )
              )
            )
          }
      },
      error => {
        console.log(error);
      }
    )

    function handleResize() {
      setToShow(window.innerWidth >= 800 ?2:1)
    }
    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  }, []);
  
  return (
    <div className="carouselContainer">
      <div className="carousel">
        <Carousel
          autoplay
          dots={false}
          infinite={true}
          slidesToShow={toShow}
          slidesToScroll={1}
          speed={2000}
          autoplaySpeed={4000}
          ref={carousel}
        >
          {cards}
        </Carousel>
      </div>
      <div className="iconContainer">
        <Avatar onClick={handlePrev} shape="circle" className="iconCarousel" size={45} icon={<LeftOutlined />} />
        <Avatar onClick={handleNext} shape="circle" className="iconCarousel" size={45} icon={<RightOutlined />} />
      </div>
    </div>
  );
};

export default CarouselNotice;
