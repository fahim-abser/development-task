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
            <h3 className='font-bold text-3xl text-center mb-16'>Testimonials</h3>
             <div className='grid grid-cols-3 justify-center justify-items-center text-center'>
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

