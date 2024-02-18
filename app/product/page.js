export default function ProductPage() {
  return (
    <div className="container">
      <div className="product-page">
        <div className="product-details">
          <div className="product-image">
            <img src="/logo192.png" alt="Product" />
          </div>
          <div className="product-info">
            <h2>Product Title</h2>
            <div className="ratings">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="rating-text">(5)</span>
            </div>
            <p className="price">$234</p>
            <button className="add-to-cart-btn">Add to Cart</button>
            <p className="description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <ul className="product-details-list">
              <li>
                <span>Stock:</span> In Stock
              </li>
              <li>
                <span>Category:</span> Electronics
              </li>
              <li>
                <span>Seller / Brand:</span> Apple
              </li>
            </ul>
          </div>
        </div>

        <div className="customer-reviews">
          <h3>Your Review</h3>
          <div className="ratings">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="rating-text">(5)</span>
          </div>
          <textarea
            className="review-textarea"
            placeholder="Your review"
          ></textarea>
          <button className="post-review-btn">Post Review</button>
        </div>

        <div className="other-reviews">
          <h3>Other Customers Reviews</h3>
          <div className="review-card">
            <div className="user-info">
              <img src="/logo192.png" alt="User" />
              <p>Ghulam</p>
            </div>
            <div className="ratings">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="rating-text">(5)</span>
            </div>
            <p className="review-text">This is a user review. Nice product!</p>
            <p className="review-date">Posted on: 12-12-2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
