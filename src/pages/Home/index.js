import styles from "./home.module.css";
import Card from "../../components/module/Card"
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import qs from 'query-string'
import image1 from '../../assets/images/1.png'
import React, { useEffect, useState } from 'react'
import Navbar from "../../components/module/Navbar/Core";
import Brand from "../../components/module/Navbar/Brand";
import Toggler from "../../components/module/Navbar/Toggler";
import Filter from "../../components/module/Navbar/Filter";
import NavRight from "../../components/module/Navbar/NavRight";
import Cart from "../../components/module/Navbar/Cart";
import Auth from "../../components/module/Navbar/Auth";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../configs/redux/actions/productAction";

const Home = (props) => {
  const products = useSelector(state => state)
  const dispatch = useDispatch()
  
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState('')
  
  const { search } = useLocation()
  const data = qs.parse(search)
  const q = data.search || ''
  
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

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
          slidesToShow: 2,
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
  }

  const email = useSelector(state => state.email)

  return (
    <>
      <Navbar>
        <Brand />
        <Toggler>
          <Filter
            handleInputSearch={handleInputSearch}
            handleSearch={handleSearch} />
          <NavRight>
            <Cart />
            <Auth />
          </NavRight>
        </Toggler>
      </Navbar>

      <div className={`container ${styles.marginTopBody}`}>
        {q === '' ?
          <>
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

            <div class={styles.categoryProduct}>
              <h3 class={styles.title}>Category</h3>
              <span class={styles.description}>What are you currently looking for</span>
              <Slider {...categorySlider}>
                {/* <div className={styles.imgSlider}> */}
                {categories && categories.map((item, index) => (
                  <img key={index} className={styles.sliderImage} src={`${process.env.REACT_APP_API_URL}files/${item.image}`} alt={item.title} />
                ))}
                {/* </div> */}
              </Slider>
            </div>

            <h1>{email}</h1>

            <div className="mt-5">
              <h3 className={styles.title}>New</h3>
              <h5 className={styles.description}>You’ve never seen it before!</h5>
              <div className="row row-cols-2">
                {products && products.map((product, index) => (
                  <div key={index} className={`col-xs-6 col-sm-4 mt-3 ${styles.colMd}`}>
                    <Link className={styles.link} to={`product/${product.id}`}>
                      <Card
                        image={`${process.env.REACT_APP_API_URL}files/${product.image[0]}`}
                        title={product.title.substring(0, 35)}
                        price={'Rp ' + product.price}
                        store="Zalora Cloth"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <h3 className={styles.title}>Popular</h3>
              <h5 className={styles.description}>Find clothes that are trending recently</h5>
              <div className="row row-cols-2">
                {products && products.map((product, index) => (
                  <div className={`col-xs-6 col-sm-4 mt-3 ${styles.colMd}`}>
                    <Link className={styles.link} to="product/id" key={index}>
                      <Card
                        image={`${process.env.REACT_APP_API_URL}files/${product.image[0]}`}
                        title={product.title.substring(0, 35)}
                        price={'Rp ' + product.price}
                        store="Zalora Cloth"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </>
          :
          <div className="mt-5">
            <h3 className={styles.title}>Hasil pencarian untuk "{q}"</h3>
            <h5 className={styles.description}>Find clothes that are trending recently</h5>
            <div className="row row-cols-2">
              {products && products.map((product, index) => (
                <div className={`col-xs-6 col-sm-4 mt-3 ${styles.colMd}`}>
                  <Link className={styles.link} to="product/id" key={index}>
                    <Card
                      image={`${process.env.REACT_APP_API_URL}files/${product.image[0]}`}
                      title={product.title.substring(0, 35)}
                      price={'$ ' + product.price}
                      store="Zalora Cloth"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Home