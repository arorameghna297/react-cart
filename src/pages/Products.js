

const Products = () => {
    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-24">
                <div>
                    <img src="/images/images.jpeg" alt="book"/>
                    <h2 className="text-lg font-bold py-2">Anne frank </h2>
                    <span className="bg-gray-200 py-1 rounded-full text-sm px-4"> Biography</span>
                    <div>
                        <span>₹ 425</span>
                        <button></button>
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default Products;
