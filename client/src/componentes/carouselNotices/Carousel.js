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

  const domain = 'https://mpdchaco.com.ar/admin';

  async function getData(url) {
    const response = await fetch(url);
    if (!response.ok) {
      const message = `Ocurrió un error: ${response.status}`;
      throw new Error(message);
    }
    const data = await response.json();

    setCards(
      data.map(
        (noticia, i) => (
          <div key={i}>
            <Card
              img={noticia.acf.cover}
              web={true}
              title={noticia.title.rendered}
              description={noticia.acf.short_description}
              meta={noticia.acf.fecha}
            />
          </div>
        )
      )
    )
  }

  useEffect(() => {

    getData(`${domain}/wp-json/wp/v2/noticias`);

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
