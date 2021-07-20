import styles from "./allItem.module.css";
import { Link } from "react-router-dom";
import Button from "../../../../../../base/Button"
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../../../../../../api";

const AllItem = ({ handleDelete }) => {
  const [products, setProducts] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const [perPage, setPerPage] = useState(5)
  const [page, setPage] = useState(1)
  const [sortData, setSortData] = useState({
    orderBy: '',
    sort: ''
  })

  useEffect(() => {
    axios
      .get(`${API_URL}products?page=${page}&perPage=${perPage}&orderBy=${sortData.orderBy}&sortBy=${sortData.sort}`)
      .then((response) => {
        setTotalPage(response.data.totalPage)
        setProducts(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [page, perPage, sortData])

  const handleChangePage = (e) => {
    setPage(e.selected + 1)
  }

  const handlePerPage = (e) => {
    setPerPage(e.target.value)
  }

  const handleSort = (e) => {
    if (sortData.sort === 'DESC') {
      setSortData({
        orderBy: e.target.ariaValueText,
        sort: 'ASC'
      })
    } else {
      setSortData({
        orderBy: e.target.ariaValueText,
        sort: 'DESC'
      })
    }
  }
  

  return (
    <>
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th className={styles.tableHeader}>
              <Link aria-valuetext="title" onClick={handleSort}>
                Product name
              </Link>
            </th>
            <th className={styles.tableHeader}>
              <Link aria-valuetext="price" onClick={handleSort}>
                Price
              </Link>
            </th>
            <th className={styles.tableHeader}>
              <Link aria-valuetext="stock" onClick={handleSort}>
                Stock
              </Link>
            </th>
            <th>
              <select className="form-select form-select-sm" aria-label="Default select example" onChange={handlePerPage}>
                <option value="5" checked>5</option>
                <option value="10">10</option>
                <option value="20">20</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="4" class="text-center">
              <table className='w-100 table-bordered'>
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
                  {products &&
                    products.map((item, index) => (
                      <tr key={index}>
                        <td className={styles.mainImageBox}>
                          <img className={styles.mainImage} src={item.mainImage} alt="product" />
                        </td>
                        <td>{item.title}</td>
                        <td>{item.stock}</td>
                        <td>{item.price}</td>
                        <td>
                          <Link to={`/seller/update/${item.id}`} products={products} className="btn btn-warning btn-sm">Edit</Link>
                          <Button clickAction={() => { if (window.confirm('Delete the item?')) { handleDelete(item.id) }; }} title="Delete" />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </td>
          </tr>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"breack-me"}
            pageCount={totalPage}
            marginPagesDisplayed={2}
            containerClassName={"pagination"}
            subContainerClassName={"pages-pagination"}
            activeClassName={"active"}
            onPageChange={handleChangePage} />
        </tbody>
      </table>
    </>
  );
};

export default AllItem;
