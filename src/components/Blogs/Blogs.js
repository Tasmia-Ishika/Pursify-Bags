import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
    return (
        <div>
            <div>
                <div>
                    <h2 className='text-5xl text-red-900 mt-5'>What is Content API?</h2>
                    <p className='mt-5 p-5 text-xl'>ANSWER: Content Api is an which manages any catalog through microsoft merchant center web page. With the help of content API we are able to update limited products offer rather than updating the entire data.It also helps to change any particular products pricing and it's availability.We can also download catalog status reports.Besides deleting,insert and updates can be easily done by the help of Content API.</p>
                </div>
                <div>
                    <h1 className='text-5xl text-red-900 mt-7'>What is Semantic Tag?</h1>
                    <p className='mt-5 p-5 text-xl'>ANSWER: The purpose of Semantic tags are mainly describing their meaning ina a human and machine readable way. Such as using 'header', 'article' and 'footer'. They are known as semantic tags as they can accurately describe the purpose of the tags and what type of content they are holding.</p>
                </div>
                <div>
                    <h1 className='text-5xl text-red-900 mt-7'>What is the difference between inline block and inline element?</h1>
                    <p className='mt-5 p-5 text-xl'>ANSWER: Inline Block is an item which displays list items horizontally instead of vertical alignment.They can have padding,margins added on all the four sides.Basically it manages an element like other inline elements but it allows the usage of block properties. AND Inline elements are used on the same line as they don't start a new line.They appear on the same line beside tags or content.In Inline elements we can add add space  to the left ,right but we cannot add top/bottom padding or margins.Some examples of inline element are 'span', 'strong', and 'img' tags.</p>
                </div>
            </div>

            <div className='mt-12'>
                <Link to="/about" className='bg-red-900 text-white font-bold p-3 rounded'>Learn More About Us</Link>
            </div>
        </div>
    );
};

export default Blogs;