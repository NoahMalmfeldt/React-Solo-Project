import React from "react"

export default function Card() {
    return(
        <div>
            <img className="pictureOfMe" src="images/pictureOfMe.jpg" />
            <div className="container">
                <h1>Noah Malmfeldt</h1>
                <h4>Web 3 Student</h4>
                <p className="websiteLink">noahmalmfeldt.website</p>
                <button className="emailBtn">Email</button>
                <div className="description">
                    <h1>About</h1>
                    <p>I'm a student trying to learn web 3<br /> to make a ton of money. I'm doing<br /> this course to be able to learn<br /> web 3 as this is a prerequisite.</p>
                    <h1>Interests</h1>
                    <p>Money, money, money, <br /> money and, money.</p>
                </div>
                <div className="footer">
                    <a target="_blank" href="#"><img className="icon" src="images/instagram.png"/></a>
                    <a target="_blank" href="https://twitter.com/NoahMalmfeldt"><img className="icon" src="images/twitter.png"/></a>
                    <a target="_blank" href="https://github.com/NoahMalmfeldtt"><img className="icon" src="images/github.png"/></a>
                </div>
            </div>
        </div>
    )
}