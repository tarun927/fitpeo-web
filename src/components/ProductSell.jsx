
export default function ProductSell() {

  
  return (
    <div className="product-container bg-w">
        <div className="sell-row">
            <div className="product-info fw900 mar-l8 f-head">Product Sell</div>
            <div className="product-subInfo center-data">Search</div>
            <div className="product-subInfo center-data"></div>
            <div className="product-subInfo center-data">last 30 days</div>
        </div>
        <div className="sell-row clr-db" style={{borderBottom:"1px solid #dbdbdb"}}>
            <div className="product-info  mar-l8">Product name</div>
            <div className="product-subInfo center-data">Stock</div>
            <div className="product-subInfo center-data">price</div>
            <div className="product-subInfo center-data">total sales</div>
        </div>
        <div className="sell-row">
            <div className="product-info">
                <div className="mar-l8"> <img className="product-img" src="https://img.freepik.com/premium-photo/abstract-3d-landscape-minimal-data-building_954894-29022.jpg" alt="" /></div>
                <div className="mar-l8">
                    <div className="fw900">Abstract 3d</div>
                    <div className="clr-db">Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <div className="product-subInfo center-data">32 in stock</div>
            <div className="product-subInfo center-data fw900">$ 45.99</div>
            <div className="product-subInfo center-data">20</div>
        </div>
        <div className="sell-row">
            <div className="product-info">
            <div className="mar-l8"> <img className="product-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqOEGHLGsveMYxRRcEEZWmSZ2uwQoqtxYOuQ&usqp=CAU" alt="" /></div>
                <div className="mar-l8">
                    <div  className="fw900">Srphens illustration</div>
                    <div className="clr-db">Lorem ipsum dolor sit amet</div>
                </div>
            </div>
            <div className="product-subInfo center-data">32 in stock</div>
            <div className="product-subInfo center-data fw900">$ 45.99</div>
            <div className="product-subInfo center-data">20</div>
        </div>
    </div>
  )
}
