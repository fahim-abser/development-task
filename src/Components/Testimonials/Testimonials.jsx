import React, { useEffect, useState } from 'react';
import TestimonialsCard from './TestimonialsCard';

 

const Testimonials = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        
        <div>
            <h3>Testimonials</h3>
             <div>
                {
                    data.map(data => <TestimonialsCard
                         key={data.id}
                         data={data}
                    > </TestimonialsCard>)
                 }
             </div>
        
        </div>
    );
};

export default Testimonials;

