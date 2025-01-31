```javascript
//pages/about.js
import {useEffect, useState} from 'react';

export default function About(){
    const [count, setCount] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        console.log('Effect running');
        const id = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, []);

    return(
        <div>About Page - {count}</div>
    );
}
```