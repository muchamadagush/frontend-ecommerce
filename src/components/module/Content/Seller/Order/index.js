import AllItems from "./AllItems";
import styles from "./order.module.css";

const Order = () => {
  return (
    <>
      <div className={styles.contentBody}>
        <h3 className={styles.title}>My Order</h3>

        <ul class={`nav ${styles.tabBar}`} id="pills-tab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              className={`${styles.myTabs} nav-link tab active`}
              id="pills-all-item-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-all-item"
              type="button"
              role="tab"
              aria-controls="pills-all-item"
              aria-selected="true"
            >
              All items
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={`nav-link tab ${styles.myTabs}`}
              id="pills-sold-out-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-sold-out"
              type="button"
              role="tab"
              aria-controls="pills-sold-out"
              aria-selected="false"
            >
              Get paid
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={`nav-link tab ${styles.myTabs}`}
              id="pills-processed-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-processed"
              type="button"
              role="tab"
              aria-controls="pills-processed"
              aria-selected="false"
            >
              Processed
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={`nav-link tab ${styles.myTabs}`}
              id="pills-sent-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-sent"
              type="button"
              role="tab"
              aria-controls="pills-sent"
              aria-selected="false"
            >
              Sent
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={`nav-link tab ${styles.myTabs}`}
              id="pills-completed-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-completed"
              type="button"
              role="tab"
              aria-controls="pills-completed"
              aria-selected="false"
            >
              Completed
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              className={`nav-link tab ${styles.myTabs}`}
              id="pills-cancel-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cancel"
              type="button"
              role="tab"
              aria-controls="pills-cancel"
              aria-selected="false"
            >
              Order cancel
            </button>
          </li>
        </ul>

        <hr className="mt-0" />

        <form class="mt-3">
          <img class="search" src="../../asset/Search Glyph.svg" alt="" />
          <input type="search" name="search" id="search" placeholder="Search" />
        </form>

        <div class="data mt-3">
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-all-item"
              role="tabpanel"
              aria-labelledby="pills-all-item-tab"
            >
              <AllItems />
            </div>
            <div
              class="tab-pane fade"
              id="pills-sold-out"
              role="tabpanel"
              aria-labelledby="pills-sold-out-tab"
            >
              <h1>In development stage</h1>
            </div>
            <div
              class="tab-pane fade"
              id="pills-archived"
              role="tabpanel"
              aria-labelledby="pills-archived-tab"
            >
              <h1>In development stage</h1>
            </div>
            <div
              class="tab-pane fade"
              id="pills-processed"
              role="tabpanel"
              aria-labelledby="pills-processed-tab"
            >
              <h1>In development stage</h1>
            </div>
            <div
              class="tab-pane fade"
              id="pills-completed"
              role="tabpanel"
              aria-labelledby="pills-completed-tab"
            >
              <h1>In development stage</h1>
            </div>
            <div
              class="tab-pane fade"
              id="pills-cancel"
              role="tabpanel"
              aria-labelledby="pills-cancel-tab"
            >
              <h1>In development stage</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
