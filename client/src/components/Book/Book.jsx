import React from "react";
import PreInicio from "../../components/PreInicio/PreInicio";

import './Book.css';


export default function Books () {

    return (
        <div className="container-Books">
            <div className="carouselBooks">
                <PreInicio />
                <h1>The best books to savor in your kitchen</h1>
                <div className="carouselWrapBooks">
                    <a href="https://www.amazon.es/dp/8491397140">
                        <div className="books"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1636710708-41kk36TcRTS._SL500_.jpg?crop=1xw:0.978xh;center,top&resize=768:*" alt="Book1" /></div>
                    </a>
                    <a href="https://www.amazon.es/dp/8408229893">
                        <div className="books"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621873276-51-ZByJcxL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*" alt="Book2" /></div>
                    </a>
                    <a href="https://www.amazon.es/dp/8418260017">
                        <div className="books"><img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1621873545-51-sZRnHHDL._SL500_.jpg?crop=1xw:1xh;center,top&resize=768:*" alt="Book2" /></div>
                    </a>
                </div>
            </div>
        </div>
    );
};