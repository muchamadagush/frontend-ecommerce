import styles from "./allItem.module.css";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, fetchProducts } from "../../../../../../../configs/redux/actions/productAction";
import Input from "../../../../../../base/Input";
import imgSearch from '../../../../../../../assets/images/Search.svg'

const AllItem = () => {
  const dispatch = useDispatch()
  const [success, setSuccess] = useState("")
  const [totalPage, setTotalPage] = useState(0)
  const [perPage, setPerPage] = useState(5)
  const [page, setPage] = useState(1)
  const [orderBy, setOrderBy] = useState("title")
  const [sort, setSort] = useState("ASC")
  const [search, setSearch] = useState('')

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
      .then((res) => setSuccess(res),
        (err) => alert(err))
  }

  useEffect(() => {
    dispatch(fetchProducts(search, page, perPage, orderBy, sort))
      .then((res) => setTotalPage(res))
  }, [dispatch, sort, page, perPage, success, orderBy, search])


  const { products } = useSelector(state => state.products)

  const handleChangePage = (e) => {
    setPage(e.selected + 1)
  }

  const handlePerPage = (e) => {
    setPerPage(e.target.value)
  }

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value)
  }

  const handleSortBy = (e) => {
    setSort(e.target.value)
  }

  const handleInputSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log("jalan nih")
  }

  return (
    <>
      <form className="mt-3" onSubmit={handleSearch}>
        <img className={`${styles.search} position-absolute`} src={imgSearch} alt="" />
        <Input type="text" name="search" id="search" myClass='smallSearch' placeholder="Search" actionChange={handleInputSearch} />
      </form>
      {success.length ? <p className={styles.success}>{success}</p> : ''}
      <div className="d-flex flex-row my-2">
        <select className={`form-select form-select-sm ${styles.select}`} aria-label="Default select example" onChange={handleOrderBy}>
          <option value="title" checked>title</option>
          <option value="price">price</option>
          <option value="stock">stock</option>
        </select>
        <select className={`form-select form-select-sm ${styles.select}`} aria-label="Default select example" onChange={handleSortBy}>
          <option value="ASC" checked>ASC</option>
          <option value="DESC">DESC</option>
        </select>
        <select className={`form-select form-select-sm ${styles.select}`} aria-label="Default select example" onChange={handlePerPage}>
          <option value="5" checked>5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
      <table className='table table-hover table-bordered'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.data &&
            products.data.map((item, index) => (
              <tr key={index}>
                <td className={styles.mainImageBox}>
                  <img className={styles.mainImage} src={`${process.env.REACT_APP_API_URL}files/${item.image[0]}`} alt="product" />
                </td>
                <td>{item.title}</td>
                <td>{item.stock}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/seller/update/${item.id}`} products={products} className="btn btn-warning btn-sm mx-1 my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </Link>
                  <Link onClick={() => { if (window.confirm('Delete the item?')) { handleDelete(item.id) }; }} className="btn btn-danger btn-sm mx-1 my-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"breack-me"}
          pageCount={totalPage}
          marginPagesDisplayed={5}
          containerClassName={"pagination"}
          subContainerClassName={"pages-pagination"}
          activeClassName={"active"}
          onPageChange={handleChangePage} />
      </table>
    </>
  );
};

export default AllItem;
