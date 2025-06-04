import React from 'react';
import './SubpageBase.css';
import { Link } from 'react-router-dom';

export default function SubpageBase() {
    return (
     <div> 
        <Link to="/Programming" className="subpage-background">
            <span>subpage link</span>
        </Link>
    </div>  
    );
}