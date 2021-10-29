import React, { useState, useRef, useEffect } from "react"
import ImgCard from "./ImgCard";
import bottle from "../../assets/media/bottlle1.jpeg"
import handles from "../../assets/media/handles.jpg"
import pump from "../../assets/media/pump.jpg"
import nozzleStand from "../../assets/media/nozzle&stand.jpg"
import manualdispenser from "../../assets/media/mnaualdispenser.jpg"
import gradientVideo from "../../assets/media/grad_compressed.mp4"

const productList = [
  {
    title: "20 ltr bottle",
    imgSrc: bottle,
    imgAlt: "sample img",
    price: 120,
    extraText: "+Rs.700 refundable desposit",
  },
  {
    title: "Handle Pair",
    imgSrc: handles,
    imgAlt: "sample img",
    price: 350,
  },
  {
    title: "Pump",
    imgSrc: pump,
    imgAlt: "sample img",
    // price: 120,
  },
  {
    title: "Nozzle & Stand",
    imgSrc: nozzleStand,
    imgAlt: "sample img",
    price: 450,
  },
  {
    title: "Manual Dispenser",
    imgSrc: manualdispenser,
    imgAlt: "sample img",
    price: 1500,
  }
];

function Products() {
  const svgRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  console.log("rerender outside useEffect");
  useEffect(()=> {
    console.log("rerender");
    const bodyEl = document.querySelector("body");
    const checkIsMobile = () => setIsMobile(bodyEl.offsetWidth > 640);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const getSvgViewBox = () => {
    console.log("---==", isMobile);
    if ( isMobile ) {
      return "0 0 1200 1000";
    } else {
      //mobile or tablet
      return "-100 -100 200 600";
    }
  };
  return (
    <section id="products">
      <h1>Our Products</h1>
      <div className="p-4 relative gap-5 leading-7 flex flex-row flex-wrap justify-between items-center">
        {
          productList.map(product => (
            <ImgCard {...product}/>
          ))
        }
      <video src={gradientVideo} muted autoPlay loop playsinline className="filter blur-xl absolute mobile-grad sm:mid-grad" style={{zIndex: -1}}/>
      {/* <svg ref={svgRef} className="absolute mobile-grad sm:mid-grad" style={{zIndex: -1}} id="eC8geQ0GU6O1" xmlns="http://www.w3.org/2000/svg"
          viewBox={getSvgViewBox()} shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
          <defs>
              <filter id="eC8geQ0GU6O2-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O2-filter-blur-0" stdDeviation="50,50" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O3-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O3-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O4-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O4-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O5-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O5-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O6-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O6-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O7-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O7-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O8-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O8-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
              <filter id="eC8geQ0GU6O9-filter" x="-400%" width="600%" y="-400%" height="600%">
                  <feGaussianBlur id="eC8geQ0GU6O9-filter-blur-0" stdDeviation="30,30" result="result" />
              </filter>
          </defs>
          <g id="eC8geQ0GU6O2" transform="matrix(0.75 0 0 0.75 97.945938 200.328638)" paint-order="stroke fill markers"
              filter="url(#eC8geQ0GU6O2-filter)">
              <circle id="eC8geQ0GU6O3" style={{mixBlendMode:"color"}} r="150"
                  transform="matrix(2.638035 -0.459112 0.270938 1.556797 445.144024 546.498096)" opacity="0.7"
                  filter="url(#eC8geQ0GU6O3-filter)" fill="rgb(241,163,87)" stroke="none" stroke-width="1" />
              <circle id="eC8geQ0GU6O4" style={{mixBlendMode:"color"}} r="150"
                  transform="matrix(1.980221 0 0 1.632376 366.720198 317.446655)" opacity="0.7"
                  filter="url(#eC8geQ0GU6O4-filter)" fill="rgb(255,251,0)" stroke="none" stroke-width="1" />
              <circle id="eC8geQ0GU6O5" style={{mixBlendMode:"color"}} r="150" transform="matrix(1 0 0 1 395.430144 362.446658)"
                  opacity="0.7" filter="url(#eC8geQ0GU6O5-filter)" fill="rgb(0,147,255)" stroke="none" stroke-width="1" />
              <circle id="eC8geQ0GU6O6" style={{mixBlendMode:"color"}} r="150"
                  transform="matrix(1.068642 1.336818 -1.939377 1.550324 504.179925 278.293635)" opacity="0.7"
                  filter="url(#eC8geQ0GU6O6-filter)" fill="rgb(0,255,255)" stroke="none" stroke-width="1" />
              <circle id="eC8geQ0GU6O7" style={{mixBlendMode:"color"}} r="150"
                  transform="matrix(1.969261 0 0 1.576577 470.286762 467.446654)" opacity="0.7"
                  filter="url(#eC8geQ0GU6O7-filter)" fill="rgb(0,255,255)" stroke="none" stroke-width="1" />
              <circle id="eC8geQ0GU6O8" style={{mixBlendMode:"color"}} r="150"
                  transform="matrix(1.840619 -0.49982 0.351191 1.293285 293.10118 432.09045)" opacity="0.7"
                  filter="url(#eC8geQ0GU6O8-filter)" fill="rgb(0,147,255)" stroke="none" stroke-width="1" />
              <circle id="eC8geQ0GU6O9" style={{mixBlendMode:"color"}} r="150"
                  transform="matrix(2.335088 -0.406389 0.247648 1.422972 720.404124 379.074321)" opacity="0.7"
                  filter="url(#eC8geQ0GU6O9-filter)" fill="rgb(145,89,255)" stroke="none" stroke-width="1" />
          </g>
      </svg> */}
      </div>
    </section>
  )
}

export default Products
