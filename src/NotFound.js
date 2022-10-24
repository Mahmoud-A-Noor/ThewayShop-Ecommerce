import React from 'react';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './Components/home/Home';

export default function NotFound() {

    const [count, setCount] = React.useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCount(count - 1);
        }, 1000);
        if(count === 0){
            clearTimeout(timer);
            navigate("/");
        }
        return () => clearTimeout(timer);
    }, [count]);


      return (
                <div className='d-flex flex-column justify-content-center align-items-center m-5'>
                  <h3>Sorry, page not found!</h3>
                  <p>Redirecting to Home page in {count} seconds...</p>
                </div>
              );
}