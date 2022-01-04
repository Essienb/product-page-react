import Banners from "./Banners";
import Products from "./Products";


const prodArray = [
                    {
                        outerBox: "col bg-dark text-white pt-5 px-5 ms-3",
                        innerBox: "box1 bg-light w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-light pt-5 px-5 ms-3",
                        innerBox: "box1 bg-dark w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-light pt-5 px-5 ms-3",
                        innerBox: "box1 bg-dark w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-primary text-white pt-5 px-5 mx-3",
                        innerBox: "box1 bg-light w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-light pt-5 px-5 ms-3",
                        innerBox: "box1 bg-white w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-light pt-5 px-5 ms-3",
                        innerBox: "box1 bg-white w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-light pt-5 px-5 ms-3",
                        innerBox: "box1 bg-white w-75 mx-auto",
                    },
                    {
                        outerBox: "col bg-light pt-5 px-5 ms-3",
                        innerBox: "box1 bg-white w-75 mx-auto",
                    },
]

function MainSection() {
    return(
        <div className="container-fluid p-3">
            <Banners />

            <div class="text-center product-content"> 

            <div class="row my-3">

            <Products outerBox={prodArray[0].outerBox} innerBox = {prodArray[0].innerBox} />
            <Products outerBox={prodArray[1].outerBox} innerBox = {prodArray[1].innerBox} />

            </div>

            <div class="row my-3">

            <Products outerBox={prodArray[2].outerBox} innerBox = {prodArray[2].innerBox} />
            <Products outerBox={prodArray[3].outerBox} innerBox = {prodArray[3].innerBox} />

            </div>

            <div class="row my-3">

            <Products outerBox={prodArray[4].outerBox} innerBox = {prodArray[4].innerBox} />
            <Products outerBox={prodArray[5].outerBox} innerBox = {prodArray[5].innerBox} />

            </div>

            <div class="row my-3">

            <Products outerBox={prodArray[6].outerBox} innerBox = {prodArray[6].innerBox} />
            <Products outerBox={prodArray[7].outerBox} innerBox = {prodArray[7].innerBox} />

            </div>

            </div>
        </div>
    )
}

export default MainSection;