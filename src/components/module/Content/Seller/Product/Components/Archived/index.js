import React from 'react'
import { Link } from 'react-router-dom'

const Archived = () => {
  return (
    <>
      <table class="table table-sm table-bordered">
        <thead>
          <tr>
            <th>
              <Link class="dropdown-toggle" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false">Product name</Link>
            </th>
            <th>
              <Link class="dropdown-toggle" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">Price</Link>
            </th>
            <th>
              <Link class="dropdown-toggle" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">Stock</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" class="text-center">
              <img class="empty" src="../../asset/empty.svg" alt="Empty" />
              <br />
              <span>You don't have a product yet</span>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Archived
