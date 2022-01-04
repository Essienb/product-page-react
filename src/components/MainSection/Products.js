

function Products(props) {
    return(

                <div className= {props.outerBox}>
                    <h1 className="pt-5 fw-light">Another headline</h1>
                    <p className="pb-5">And an even wittier subheading.</p>

                    <div className= {props.innerBox}></div>

                </div>

    )
}
export default Products;