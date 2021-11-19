import React from 'react'
import { Link } from 'react-router-dom'
import './aside.css'
const Aside = () => {
    return (
        <aside>
            <h2 ></h2>
            <h3>Popular in Kindle</h3>
            <ul>
                <li><Link to='/' >Kindle Book Deals</Link></li>
                <li><Link to='/' >Best Sellers &amp; More</Link></li>
                <li><Link to='/' >Editors' Picks</Link></li>
                <li><Link to='/' >Kindle Unlimited</Link></li>
                <li><Link to='/' >Prime Reading</Link></li>
                <li><Link to='/' >Best Books of 2021</Link></li>
                <li><Link to='/' >eBooks with Audible Narration</Link></li></ul>
                
                <h3>More in Kindle</h3>
                <ul><li><Link to='/'>Amazon Charts</Link></li>
                <li><Link to='/' >Hotly Anticipated</Link></li>
                <li><Link to='/' >Amazon Original Stories</Link></li>
                <li><Link to='/' >Kindle Exclusives</Link></li>
                <li><Link to='/' >First Reads</Link></li>
                <li><Link to='/'>Author Follow</Link></li>
                <li><Link to='/' >Comics and Graphic Novels</Link></li>
                <li><Link to='/' >Amazon Classics</Link></li>
                <li><Link to='/'>Kindle Email Subscriptions</Link></li></ul>
        </aside>
    )
}
export default Aside;

