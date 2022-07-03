

const Product = () => {
    return (
                <div>
                    <img src="/images/images.jpeg" alt="book"/>
                    <div className="text-center">
                    
                      <h2 className="text-lg font-bold py-2">Anne frank </h2>
                      <span className="bg-gray-200 py-1 rounded-full text-sm px-4"> Biography</span>
                    </div>
                    <div className="flex-justify-between items-center mt-4">

                        <span>₹ 425</span>
                        <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold"> ADD</button>
                    </div>
                </div>
    )
}

export default Product;
