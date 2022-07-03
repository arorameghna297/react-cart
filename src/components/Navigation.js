import {Link }  from 'react-router-dom';

const Navigation = () => {
    const cartstyle ={
        background:'#F59E0D',
        display:'flex',
        padding:'6px 12px',
        width:'40%',
        borderRadius:'50px',
    }
    return (
        <>
           <nav className="container mx-auto flex items-center justify-between py-4">
               
                   <Link to="/">
                     <img style={{height:60}} src="/images/download (1).png" alt ="logo" />
                    
                   </Link>
                   <ul className="flex items-center"> 
                      <li className="ml-6"> <Link to= "/">Home</Link></li>
                       <li className="ml-6"> <Link to= "/products">Products</Link></li>
                        <li className="ml-6"> 
                            <Link to= "/cart">
                                <div style={cartstyle}>
                                    <span>10</span>
                                    <img className="ml-2" src="/images/shopping-cart-icon-flat-design-260nw-570153007.jpg" alt="cart -icon"/>
                                </div>
                            </Link>
                        </li>

                   </ul>
              
           </nav>
        </>
    )
}

export default Navigation
