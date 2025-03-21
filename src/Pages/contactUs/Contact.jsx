import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto mt-10 mb-12 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left Side - Information */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Our Information</h2>
                        <p className="text-gray-600 mb-6">
                            Our web company consists of web programmers and designers with extensive experience in the web market. Each of us worked as hired workers to create templates for Magento, Shopify, WordPress, and others.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <span className="text-2xl mr-4">🏠</span>
                                <div>
                                    <h4 className="font-semibold">Address</h4>
                                    <p className="text-gray-600">1010-White Street Block, USA</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📞</span>
                                <div>
                                    <h4 className="font-semibold">Phone</h4>
                                    <p className="text-gray-600">+01 0123 456 789</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-2xl mr-4">📧</span>
                                <div>
                                    <h4 className="font-semibold">Email</h4>
                                    <p className="text-gray-600">admin@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <span className="text-2xl mr-4">⏰</span>
                                <div>
                                    <h4 className="font-semibold">Open Hours</h4>
                                    <p className="text-gray-600">Monday to Friday 09:30 - 18:30</p>
                                    <p className="text-gray-600">Saturday & Sunday 10:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Contact Form</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 border border-gray-300 rounded"
                                />
                            </div>
                            <input
                                type="tel"
                                placeholder="Phone number"
                                className="w-full p-3 border border-gray-300 rounded"
                            />
                            <textarea
                                placeholder="Comment"
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded"
                            />
                            <button
                                type="submit"
                                className="w-full md:w-auto border-1 border-black hover:bg-black hover:text-white uppercase bg-white text-black py-3 px-8 rounded"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        <Footer></Footer>
        </div>

    );
};

export default Contact;
