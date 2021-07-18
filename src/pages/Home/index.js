import styles from "./home.module.css";
import Navbar from "../../components/module/Navbar"
import Card from "../../components/module/Card"
import { Link, useLocation } from "react-router-dom";
import axios from "axios"
import { API_URL } from "../../api/index"
import Slider from "react-slick";
import qs from 'query-string'
import image1 from '../../assets/images/1.png'

import React, { useEffect, useState } from 'react'

const Home = (props) => {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState('')

  const { search } = useLocation()
  const data = qs.parse(search)
  const q = data.search || ''

  useEffect(() => {
    axios
      .get(`${API_URL}products/?search=${q}`)
      .then((response) => {
        const products = response.data.data
        setProducts(products)
      })
      .catch((error) => {
        console.log(error);
      })

    axios
      .get(`${API_URL}category`)
      .then((response) => {
        const categories = response.data.data
        setCategories(categories)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [q])

  const categorySlider = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  };

  const bannerSlider = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  const handleInputSearch = (e) => {
    setQuery(e.target.value)
  }

  const handleSearch = () => {
    props.history.push(`/?search=${query}`)
    window.location.reload();
  }

  return (
    <>
      <Navbar handleInputSearch={handleInputSearch} handleSearch={handleSearch} />
      <div className={`container ${styles.marginTopBody}`}>
        {/* Banner */}
        <div class="my-slider">
          <Slider {...bannerSlider}>
            <div class="img-slider">
              <img src={image1} alt="" />
            </div>
            <div class="img-slider">
              <img src={image1} alt="" />
            </div>
            <div class="img-slider">
              <img src={image1} alt="" />
            </div>
            <div class="img-slider">
              <img src={image1} alt="" />
            </div>
          </Slider>
        </div>

        {/* Slider category */}
        <div class={styles.categoryProduct}>
          <h3 class={styles.title}>Category</h3>
          <span class={styles.description}>What are you currently looking for</span>
          <Slider {...categorySlider}>
            {categories && categories.map((item, index) => (
              <div className={styles.imgSlider} key={index}>
                <img className={styles.sliderImage} src={`${API_URL}files/${item.image}`} alt={item.title} />
              </div>
            ))}
          </Slider>
        </div>

        {/* New Product */}
        <div className="mt-5">
          <h3 className={styles.title}>New</h3>
          <h5 className={styles.description}>You’ve never seen it before!</h5>
          <div className="row row-cols-2">
            {products && products.map((product, index) => (
              <div key={index} className={`col-xs-6 col-sm-4 mt-3 ${styles.colMd}`}>
                <Link className={styles.link} to={`product/${product.id}`}>
                  <Card
                    image={product.mainImage}
                    title={product.title}
                    price={'$ ' + product.price}
                    store="Zalora Cloth"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Popular product */}
        <div className="mt-5">
          <h3 className={styles.title}>Popular</h3>
          <h5 className={styles.description}>Find clothes that are trending recently</h5>
          <div className="row row-cols-2">
            {products && products.map((product, index) => (
              <div className={`col-xs-6 col-sm-4 mt-3 ${styles.colMd}`}>
                <Link className={styles.link} to="product/id" key={index}>
                  <Card
                    image={product.mainImage}
                    title={product.title}
                    price={'$ ' + product.price}
                    store="Zalora Cloth"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home