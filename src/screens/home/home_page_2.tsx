import { ArrowRight, ArrowUpDown,Clock, DollarSign, Star } from 'lucide-react';
import NavBar from '../../components/nav_bar';
import Section from '../../components/section';
import Intro_Header from '../../components/intro_header';
import Cards from '../../components/cards';
import Cards_Image_Beside from '../../components/cards_image_beside';
import Footer from '../../components/footer';
import CardsTestimonial from '../../components/cards_testimonial';
import React from "react";

const Home_Page_Two: React.FC = () =>  {
    return (
        <div className=' h-screen bg-gradient-to-tr bg-gradient-to-tr from-gray-20 via-slate-50 to-slate-200'>
            <NavBar 
                properties={
                    {
                        showLogo : true,
                        showCenterText : true,
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
                        sectionImage : "/src/assets/image_2.png",
                    }
                }            
            />

            <Section 
                sectionProperties={
                    {
                        sectionHeader : "Our Solution: UpShore",
                        sectionSubHeader : "UpShore connects you directly with highly skilled developers, AI specialists, project managers, business analysts, and digital marketers from emerging talent hubs around the world. We bridge the gap between world-class expertise and budget-friendly solutions—all under one intuitive platform.",
                        sectionStyle : "bg-white-100 ",
                        // children : <img src="/src/assets/image_2.png" alt="" />
                    }
                } 
            />

            <Section 
                sectionProperties={
                    {
                        sectionHeader : "The Challenge",
                        sectionSubHeader : "In today's fast-paced world, finding high-caliber remote talent is often time-consuming and expensive. Western companies struggle to strike the balance between top-notch skills and sustainable hiring costs.",
                        sectionStyle : "bg-gray-100 ",
                    }
                } 
            />

            <Section 
                sectionProperties={
                    {
                        sectionHeader : "Our Solution: UpShore",
                        sectionSubHeader : "UpShore connects you directly with highly skilled developers, AI specialists, project managers, business analysts, and digital marketers from emerging talent hubs around the world. We bridge the gap between world-class expertise and budget-friendly solutions—all under one intuitive platform.",
                        sectionStyle : "bg-white-100 ",
                    }
                } 
            />

            <Section 
                sectionProperties={
                    {
                        sectionHeader : "Our Solution: UpShore",
                        sectionSubHeader : "UpShore connects you directly with highly skilled developers, AI specialists, project managers, business analysts, and digital marketers from emerging talent hubs around the world. We bridge the gap between world-class expertise and budget-friendly solutions—all under one intuitive platform.",
                        sectionStyle : "bg-white-100 ",
                        // children : <img src="/src/assets/image_2.png" alt="" />
                    }
                } 
            />

            <Section 
                sectionProperties={
                    {
                        sectionId: "how_it_works",
                        sectionHeader : "How It Works",
                        sectionSubHeader : "",
                        sectionStyle : "bg-gray-50 ",
                        children : <div className="mx-auto w-full ">
                        <div className="grid grid-cols-1 gap-2 px-0 py-0 lg:py-8 md:grid-cols-2 lg:grid-cols-4">
                            <div>
        
                                <Cards properties={
                                    {
                                        cardHasNumbers : true,
                                        sectionHeader : "Register on UpShore",
                                        sectionSubHeader : "Sign up in minutes, providing key details about your company and the roles you need to fill.",
                                        cardHasImage: true,
                                        cardImage : "/src/assets/image_2.png",
                                        sectionStyle : "bg-white-100 ",
                                        cardHasNumbersValue : "1"
                                    }
                                } />
        
                            </div>
                            <div>
        
                                <Cards 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "Subscribe for Full Access",
                                            sectionSubHeader : "For $200/month, unlock our diverse database of remote professionals—no hidden fees or long-term contracts.",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/image_2.png",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "2"
                                        }
                                    } 
                                />
        
                            </div>
                            <div>
                                
                                <Cards 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "Browse & Connect",
                                            sectionSubHeader : "Use our advanced filters to find the perfect professional for your needs.",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/image_2.png",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "3"
                                        }
                                    } 
                                />
        
                            </div>
                            <div>
        
                                <Cards 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "Interview & Hire",
                                            sectionSubHeader : "Communicate directly with candidates, schedule interviews, and finalize contracts.",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/image_2.png",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "4"
                                        }
                                    } 
                                />
        
                            </div>
                        </div>
                    </div>
                    }
                } 
            />

            <Section 
                sectionProperties={
                    {
                        sectionId: "benefits",
                        sectionHeader : "Key Benefits",
                        sectionSubHeader : "",
                        sectionStyle : "bg-white-50 mb-0",
                        children : <div className="mx-auto w-full ">
                        <div className="grid grid-cols-1 gap-2 px-0 py-0 lg:py-8 md:grid-cols-2 lg:grid-cols-2">
                            <div>
        
                                <Cards_Image_Beside properties={
                                    {
                                        cardHasNumbers : true,
                                        sectionHeader : "Cost-Effective Talent",
                                        sectionSubHeader : "Reduce staffing expenses by leveraging global hiring markets while maintaining high-quality results.",
                                        cardHasImage: true,
                                        cardImage : "/src/assets/image_2.png",
                                        sectionStyle : "bg-white-100 ",
                                        cardHasNumbersValue : "1",
                                        iconIsBesideHeader : true,
                                        children: <DollarSign color='blue'  size={30} className='mr-5 "blue-500 hover:blue-700 caret-blue-600'/>
                                    }
                                } />
        
                            </div>
                            <div>
        
                                <Cards_Image_Beside 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "Top-Tier Expertise",
                                            sectionSubHeader : "Our meticulous vetting process ensures you're only seeing the best of the best.",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/image_2.png",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "2",
                                            children: <Star color='blue'  size={30} className='mr-5 "blue-500 hover:blue-700 caret-blue-600'/>
                                        }
                                    } 
                                />
        
                            </div>
                            <div>
                                
                                <Cards_Image_Beside 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "Time-Saving Platform",
                                            sectionSubHeader : "Eliminate the hassle of juggling multiple job boards—manage everything from one central hub.",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/image_2.png",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "3",
                                            children: <Clock color='blue'  size={30} className='mr-5 "blue-500 hover:blue-700 caret-blue-600'/>
                                        }
                                    } 
                                />
        
                            </div>
                            <div>
        
                                <Cards_Image_Beside 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "Scalable Workforce",
                                            sectionSubHeader : "Need additional hands for a big project? Hire on-demand without the overhead costs.",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/image_2.png",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "4",
                                            children: <ArrowUpDown color='blue'  size={30} className='mr-5 "blue-500 hover:blue-700 caret-blue-600'/>
                                        }
                                    } 
                                />
        
                            </div>
                        </div>
                    </div>
                    }
                } 
            />


            <Section 
                sectionProperties={
                    {
                        sectionHeader : "What Our Clients Say",
                        sectionSubHeader : "",
                        sectionStyle : "bg-gray-50 mb-0",
                        children : <div className="mx-auto w-full ">
                        <div className="grid grid-cols-1 gap-2 px-0 py-0 lg:py-8 md:grid-cols-2 lg:grid-cols-2">
                            <div>
        
                                <CardsTestimonial properties={
                                    {
                                        cardHasNumbers : true,
                                        sectionHeader : "",
                                        sectionSubHeader : '"Using UpShore, we onboarded a full-stack developer from Bangladesh who delivered top-quality work at a fraction of our usual costs. Highly recommended!"',
                                        cardImageName: "Sarah L",
                                        cardImagDescription: "Startup Founder",
                                        cardHasImage: true,
                                        cardImage : "/src/assets/avatar-2.jpg",
                                        sectionStyle : "bg-white-100 ",
                                        cardHasNumbersValue : "1",
                                        iconIsBesideHeader : true,
                                        children: <DollarSign color='blue'  size={30} className='mr-5 "blue-500 hover:blue-700 caret-blue-600'/>
                                    }
                                } />
        
                            </div>
                            <div>
        
                                <CardsTestimonial 
                                    properties={
                                        {
                                            cardHasNumbers : true,
                                            sectionHeader : "",
                                            sectionSubHeader : '"Our agency needed an AI specialist ASAP. UpShore had us interviewing candidates within 48 hours—saved us time and money!"',
                                            cardImageName: "James W.",
                                            cardImagDescription: "Agency Director",
                                            cardHasImage: true,
                                            cardImage : "/src/assets/avatar-3.jpg",
                                            sectionStyle : "bg-white-100 ",
                                            cardHasNumbersValue : "2",
                                            children: <Star color='blue'  size={30} className='mr-5 "blue-500 hover:blue-700 caret-blue-600'/>
                                        }
                                    } 
                                />
        
                            </div>

                        </div>
                    </div>
                    }
                } 
            />

            <Section 
                sectionProperties={
                    {
                        sectionHeader : "Take the Next Step with UpShore",
                        sectionSubHeader : "Stop overpaying for remote talent or settling for subpar work. UpShore gives you the best of both worlds: exceptional skills and cost savings.",
                        sectionStyle : "bg-blue-500 mb-0",
                        children : <div>
                            <div className="flex items-center justify-center mt-0 mb-0 ">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-6 rounded-full w-1/4.7 flex items-center justify-center">
                                    Sign Up Now - Unlock global Talent <ArrowRight color="blue" size={20} className='ml-1'/>
                                </button>
                            </div>
                            <p className="text-sm text-white-900 dark:text-white-400 text-center mt-4"> Questions? <span className="text-white-600 hover:underline underline font-medium">Contact Support</span> or <span className="underline text-white-600 hover:underline font-medium">Book a Demo</span></p>
                            <div className="h-20 ">

                            </div>
                        </div>
                    }
                } 
            />

            <Footer/>

        </div>
    );
}

export default Home_Page_Two;