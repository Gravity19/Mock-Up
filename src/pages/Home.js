import React from 'react'
import "../styles/Home.css";

import barc from "../assets/search.png";                //Search icon
import utensil from "../assets/utensil.png";            //utenisil icon
import trend_icon from "../assets/trend-icon.png";       //Trend icon

import { PostList } from "../helpers/PostList";
import PostItem from "../helpers/PostItem";

import { useState, useEffect } from 'react';        //Api Fetching



function Home() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/student/ViewPost')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(err => console.log(err));
    }, []);

    console.log(posts);


    return (
        <div className='hmain'>
    {/* Header Section */}
            <div className='homey'>

                <div className='home-write'>
                    <h1 className='m-title'>Do your best work, supported by your Adama Science and Technology</h1>
                    <h4 className='m-desc'>ASTU interactive Feed lets members publish
                    directly to students and other audience, without getting into any hassle.</h4>
                    <button className='more-button-one'>Start Reading</button>
                    <button className='more-button-two'>Register</button>
                </div>
                
                <img src={utensil} alt='utensil' className='utensil'/>


        {/* Search Section */}
                <div className='input-box'>
                    <img src={barc} alt='barc' className='bicon'/>
                    
                    <i className="uil uil-search"></i>
                    <input type="text" placeholder="Search here..." />
                    <button className="button">Search</button> 
                </div>

            </div>


        {/* Middle Header Place */}

            <div className='mid-head'>
                <h3 className='mid-title'><img src={trend_icon} alt='latest' className='trend-icon'/>Latest posts</h3>
            </div>

        
        {/* POST Section */}

            <div className='post'>

                    {/* POST Custom */}
            
                    {PostList.map((Item, keys) => {
                        return (
                            <PostItem
                                key={keys}
                                
                                user_name={Item.user_name}
                                user_image={Item.user_image}
                                user_badge={Item.user_badge}
                                card_image={Item.card_image}
                                tag= {Item.tag}
                                title= {Item.title}
                                desc= {Item.desc}
                                time={Item.time}
                                date={Item.date}
                                loc={Item.loc}
                            />
                        );
                    })}

                    <PostItem/>


                    {/* POST APi /EXPREIMENTAL */}

                    {posts.map((item, i) => (
                            <PostItem
                                key={i}

                                user_name={item.staffName}
                                loc={item.eventLocation}
                            />
                        )
                    )}


                    
            </div>
        </div>
    
        
    );
}

export default Home;