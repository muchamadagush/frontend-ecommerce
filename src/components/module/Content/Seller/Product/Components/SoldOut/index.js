import React from 'react'
import { Link } from 'react-router-dom'
import progress from '../../../../../../../assets/images/progress.svg'
import styles from './soldOut.module.css'

const SoldOut = () => {
  return (
    <>
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th>Product name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" class="text-center">
              <img className={styles.image} src={progress} alt="Empty" />
              <br />
              <p className={styles.info}>In the development stage</p>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SoldOut
