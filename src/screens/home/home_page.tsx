import { ArrowRight, CircleHelp, Globe, Zap } from 'lucide-react';
import NavBar from '../../components/nav_bar';
import Section from '../../components/section';
import Intro_Header from '../../components/intro_header';
import Cards from '../../components/cards';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';

function Home_Page() {
    return (
        <div className=' h-screen bg-gradient-to-tr bg-gradient-to-tr from-gray-20 via-slate-50 to-slate-200'>
            <NavBar 
                properties={
                    {
                        showLogo : true,
                        showCenterText : false,
                        showTextNextToLogo : false,
                        showLoginAndGetStarted : false,
                        showNotificationAndProfile : false,
                    }
                } 
            />

            <Intro_Header properties={
                    {
                        sectionHeader : "Scale Your Business with Top Global Talent at a Fraction of the Cost",
                        sectionSubHeader : "Access a curated network of skilled professionals from emerging markets—Bangladesh, Nigeria, and more—without sacrificing quality or breaking the bank.",
                        sectionImage : "/src/assets/image_1.png",
                    }
                }            
            />
            

            <Section 
                sectionProperties={
                    {
                        sectionHeader : "Why Choose UpShore?",
                        sectionSubHeader : "Connect with pre-vetted professionals ready to join your team and deliver exceptional results.",
                        sectionStyle : "bg-white-100 ",
                    }
                } 
            />

            <div className="mx-auto w-full ">
                <div className="grid grid-cols-1 gap-2 px-0 py-0 lg:py-8 md:grid-cols-3">
                    <div>
            
                        <Cards properties={
                            {
                                cardHasNumbers : false,
                                children: <Globe color='blue'  size={50} className='ml-0 "blue-500 hover:blue-700 caret-blue-600'/>,
                                sectionHeader : "Global Reach, Local Prices",
                                sectionSubHeader : "Access top talent from emerging markets at rates that make sense for your business.",
                                cardHasImage: true,
                                cardImage : "/src/assets/image_2.png",
                                sectionStyle : "bg-white-100 ",
                            }
                        } />

                    </div>
                    <div>

                        <Cards properties={
                            {
                                cardHasNumbers : false,
                                children: <CircleHelp color='blue'  size={50} className='ml-0 "blue-500 hover:blue-700 caret-blue-600'/>,
                                sectionHeader : "Vetted Professionals",
                                sectionSubHeader : "Every candidate undergoes thorough screening for skills and professionalism.",
                                cardHasImage: true,
                                cardImage : "/src/assets/image_2.png",
                                sectionStyle : "bg-white-100 ",
                            }
                        } />

                    </div>
                    <div>

                        <Cards properties={
                            {
                                cardHasNumbers : false,
                                children: <Zap color='blue'  size={50} className='ml-0 "blue-500 hover:blue-700 caret-blue-600'/>,
                                sectionHeader : "Seamless Process",
                                sectionSubHeader : "From discovery to hiring, our platform streamlines every step.",
                                cardHasImage: true,
                                cardImage : "/src/assets/image_2.png",
                                sectionStyle : "bg-white-100 ",
                            }
                        } />

                    </div>
                    
                </div>
            </div>

            <div className="flex items-center justify-center mt-0 mb-0 ">
                <Link to="/signUp" >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-6 rounded-full w-1/4.7 flex items-center justify-center">
                        Get started for $200/month <ArrowRight color="white" size={20} className='ml-1'/>
                    </button>
                </Link>
            </div>

            <Footer/>

        </div>
    );
}

export default Home_Page;