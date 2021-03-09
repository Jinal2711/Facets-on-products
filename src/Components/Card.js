import React from 'react';

function Card({ productInfo }) {
    return (
        <div className="col-md-4 mb-3" style={{ cursor: 'pointer' }}>
            <div className="card">
                <div className="card-header">
                    <img src={productInfo.thumbnail} class="card-img-top" alt="..." />
                </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" style={{ background: `${productInfo.color}` }}></li>
                        <li class="list-group-item"><b>Size</b> {productInfo.size}</li>
                        <li class="list-group-item"><b>Price</b> ${productInfo.price}</li>
                    </ul>
                <div className="card-body">
                    <p className="card-title">{productInfo.name.substring(0, 40)}...</p>

                    <a href="#" class="btn">Add to Cart</a>
                    <a href="#" className="btn">Remove from Cart</a>

                </div>
            </div>
        </div>
    )
}
export default Card;