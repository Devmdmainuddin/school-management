import React from 'react';
import { Link } from 'react-router-dom';

const BlogsCard = ({ item }) => {
    const { title, image, category, author, publish_date, body } = item;
    return (
        <div className='w-[376px] group shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] '>

                <div className="image  mb-5 h-[220px] overflow-hidden rounded-tl-xl rounded-tr-xl">
                    <img className="transform group-hover:scale-110 transition ease-out duration-500 w-full h-full object-cover" src={image} alt="" />
                </div>
                <div className="content p-4">
                    <p className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px">{category}</p>
                    <Link className="" href="#">   <h2 className="mb-4 font-heading font-medium text-xl text-gray-900 group-hover:underline">{title.slice(0,48)}</h2> </Link>
                    <p className="font-heading font-medium text-xs uppercase text-gray-500 tracking-px mt-2">{body.slice(0,148)}</p>
                    <hr class="border-gray-300 my-4" />
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center flex-1">
                            <img
                                className="object-cover h-10 rounded-full"
                                src={author.image}
                             
                                alt="Avatar"
                            />
                            <div className="flex flex-col mx-2">
                                <a href="" className="font-semibold text-gray-700 hover:underline">
                                    {author.name}
                                </a>
                                <span className="mx-1 text-xs text-gray-600"></span>
                            </div>
                        </div>
                        <p class="mt-1 text-xs text-gray-600">{publish_date}</p>
                    </div>
                </div>


           

        </div>
    );
};

export default BlogsCard;