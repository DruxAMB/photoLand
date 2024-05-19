import React from "react";

// import components
import CategoryNav from "../components/CategoryNav";
import MainSLider from "../components/MainSlider";

// images
import PromoImg1 from "../img/promo_img1.png";
import PromoImg2 from '../img/promo_img2.png';

const Hero = () => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row lg:gap-x-[20px]">
          {/* sidebar  */}
          <div>
            <CategoryNav />
          </div>
          {/* mainSlider  */}
          <div className="w-full max-w-lg lg:max-w-[674px] mx-auto">
            <MainSLider />
          </div>
          {/* promos  */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[440px]">
            {/* promo 1 */}
            <div className="grad flex-1 h-[230px] rounded-[8px] overflow-hidden relative p-6">
              {/* text  */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight">
                  Save 35% all dslr camera
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop Now
                </a>
              </div>
              {/* img  */}
              <img className="absolute z-20 -top-2 -right-4" src={PromoImg1} />
            </div>
            {/* promo 2  */}
            <div className="grad flex-1 h-[230px] rounded-[8px] overflow-hidden relative p-6">
              {/* text  */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight">
                  Save 25% mirrorless camera
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop Now
                </a>
              </div>
              {/* img  */}
              <img className="absolute z-20 -top-2 -right-4" src={PromoImg2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
