import mastercard from "../../../assets/images/Group 1250.svg";
import gopay from "../../../assets/images/Group 1251.svg";
import pos from "../../../assets/images/Group 1249.svg";

const ModalPayment = ({ handlePayment, subTotal }) => {
  return (
    <>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
        tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content payment">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              <h5 class="modal-title filter" id="exampleModalToggleLabel">Payment</h5>
            </div>
            <div class="modal-body">
              <div class="payment-method">
                <h5 class="title">Payment method</h5>
                <ul class="list-payment">
                  <li class="list-item-payment">
                    <img src={gopay} alt="" />
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                  </li>
                  <li class="list-item-payment">
                    <img src={pos} alt="Pos" />
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                  </li>
                  <li class="list-item-payment">
                    <img src={mastercard} alt="" />
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault10" />
                  </li>
                </ul>
              </div>
              <div class="shopping">
                <h5 class="title">Shopping Summary</h5>
                <div class="sub-total order">
                  <span>Order</span>
                  <span class="price">Rp {subTotal}</span>
                </div>
                <div class="sub-total">
                  <span>Delivery</span>
                  <span class="price">Rp 0</span>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="shop">
                <span class="title">Shopping Summary</span>
                <span class="total">Rp {subTotal}</span>
              </div>
              <button class="btn btn-danger" data-bs-dismiss="modal" aria-label="Close" onClick={handlePayment}>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalPayment
