import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

const AboutUs = () => {
    return (
        <div>
            <Navbar/>

            <section className='w-11/12 mx-auto pb-20'>

                
            <div className='my-10'>
                <h1 className='text-5xl font-bold'>About Us</h1>
                <span className='divider'></span>
            </div>
      {/* about us banner */}   
            <div className='relative'>
                <div className='flex gap-15'>
                    <div className='w-1/2'>
                        <img src="https://i.ibb.co.com/YBWh2rMk/frame-155.webp" alt=""  className='w-full h-full'/>
                    </div>
                    <div className='w-1/2 space-y-5 my-auto'>
                        <p className='text-lg font-semibold text-gray-600'>Quality & Efficience</p>
                        <h1 className='text-5xl font-bold'>Exceptional <br /> Craftsmanship, Endless Possibilities</h1>
                        <p className='text-lg text-gray-600'>
                        At our Company, we have been a trusted name in the industry for many years. We specialize in providing top-notch electronics and IT solutions for homeowners, contractors, and designers. Our commitment to excellence starts from the moment you step into our showroom or browse our online catalog. With a wide range of high-quality products, personalized services, and a team of knowledgeable professionals, we are here to make your home transformation dreams a reality.
                        </p>
                    </div>
                </div>

                <div className='bg-black/80 p-6 text-center w-1/2 absolute top-4/5 left-1/6  rounded-xl  '>
                    <h1 className='text-4xl font-bold text-white uppercase'>
                    Where every detail matters in crafting your perfect floor
                    </h1>

                </div>


            </div>

      {/* about us banner end */}
</section>

<div style={{backgroundImage: `url("https://i.ibb.co.com/0yPcrQcv/lonovo-think-x1-5-scaled.webp")`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat',objectFit: 'cover' }} className='my-20' >

      <div className='py-28 w-11/12 mx-auto'>
        <div className='w-6/12 space-y-5'>
            <h3 className='text-3xl font-semibold text-white'>
            Sustainable Electronics 
            </h3>
            <h1 className='text-5xl font-bold text-white'>Affordable Electronics Rental for Everyone</h1>
            <p className='text-lg font-gray-600'>With years of experience and a passion for design, we specialize in creating stunning kitchens that combine functionality and style. From concept to delivery, our team of experts will work closely with you to bring your vision to life.</p>
            <button className='btn bg-blue-500 text-white border-none text-xl font-bold'>Explore Products</button>
      
        </div>
      </div>


      </div>



            <Footer/>
            
            
        </div>
    );
};

export default AboutUs;