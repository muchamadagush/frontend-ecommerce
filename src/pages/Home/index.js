import styles from "./home.module.css";
import Card from "../../components/module/Card"
import { Link, useLocation } from "react-router-dom";
import Slider from "react-slick";
import qs from 'query-string'
import image1 from '../../assets/images/1.png'
import image2 from '../../assets/images/2.png'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../configs/redux/actions/productAction";
import { fetchCategories } from "../../configs/redux/actions/categoryAction";
import Nav from "../../components/module/Navbar";

const Home = (props) => {
  const dispatch = useDispatch()
  const [query, setQuery] = useState('')

  const { search } = useLocation()
  const data = qs.parse(search)
  const q = data.search || ''

  useEffect(() => {
    dispatch(fetchProducts(q))
    dispatch(fetchCategories())
  }, [dispatch, q])

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

  const { products } = useSelector(state => state.products)
  const { categories } = useSelector(state => state.categories)

  return (
    <>
      <Nav handleInputSearch={handleInputSearch} handleSearch={handleSearch} />

      <div className={`container ${styles.marginTopBody}`}>
        {q === '' ?
          <>
            <div class="my-slider">
              <Slider {...bannerSlider}>
                <div class="img-slider">
                  <img src={image1} alt="" />
                </div>
                <div class="img-slider">
                  <img src={image2} alt="" />
                </div>
                <div class="img-slider">
                  <img src={image1} alt="" />
                </div>
                <div class="img-slider">
                  <img src={image2} alt="" />
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

            <div className="mt-5">
              <h3 className={styles.title}>New</h3>
              <h5 className={styles.description}>You’ve never seen it before!</h5>
              <div className="row row-cols-2">
                {products.data && products.data.map((product, index) => (
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
                {products.data && products.data.map((product, index) => (
                  <div className={`col-xs-6 col-sm-4 mt-3 ${styles.colMd}`}>
                    <Link className={styles.link} to={`product/${product.id}`} key={index}>
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
              {products.data && products.data.map((product, index) => (
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