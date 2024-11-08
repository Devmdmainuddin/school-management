import BlogsCard from "../Card/BlogsCard";
import Container from "../Share/Container";


const Blogs = () => {
    const blogs = [
        {
          "title": "Understanding JavaScript Closures",
          "body": "Closures are a fundamental concept in JavaScript that every developer should understand. They allow inner functions to access the scope of outer functions even after the outer function has finished executing.",
          "tags": ["JavaScript", "Closures", "Programming"],
         "image": "/post-1.jpg",
          "category": "JavaScript",
          "author": {
            "name": "John Doe",
            "email": "john@example.com",
            "image": "/c-1.jpg"
          },
          "publish_date": "2024-11-08"
        },
        {
          "title": "React State Management with Redux",
          "body": "Redux provides a solid way to manage state across your React application. It helps you write applications that behave consistently and run in different environments.",
          "tags": ["React", "Redux", "State Management"],
         "image": "/post-1.jpg",
          "category": "React",
          "author": {
            "name": "Jane Smith",
            "email": "jane@example.com",
           "image": "/c-1.jpg"
          },
          "publish_date": "2024-10-20"
        },
        {
          "title": "CSS Grid vs Flexbox",
          "body": "CSS Grid and Flexbox are powerful layout systems in CSS, each with unique strengths. Grid is ideal for 2D layouts, while Flexbox is more suitable for 1D layouts.",
          "tags": ["CSS", "Grid", "Flexbox"],
         "image": "/post-1.jpg",
          "category": "CSS",
          "author": {
            "name": "Emily Clark",
            "email": "emily@example.com",
            "image": "/c-1.jpg"
          },
          "publish_date": "2024-09-15"
        },
        {
          "title": "Getting Started with MongoDB",
          "body": "MongoDB is a popular NoSQL database choice for developers looking to build scalable applications. It provides flexibility for data storage and querying.",
          "tags": ["MongoDB", "Database", "NoSQL"],
          "image": "/post-1.jpg",
          "category": "Database",
          "author": {
            "name": "Alex Brown",
            "email": "alex@example.com",
            "image": "/c-1.jpg"
          },
          "publish_date": "2024-08-25"
        },
        {
          "title": "The Future of Web Development in 2025",
          "body": "As we approach 2025, new trends and technologies in web development are on the horizon. Understanding these will help developers stay ahead in the industry.",
          "tags": ["Web Development", "Trends", "2025"],
          "image": "/card.jpg",
          "category": "Web Development",
          "author": {
            "name": "Michael Lee",
            "email": "michael@example.com",
            "image": "/c-1.jpg"
          },
          "publish_date": "2024-07-30"
        },
        {
          "title": "Introduction to RESTful APIs",
          "body": "RESTful APIs are essential for modern web development. They allow different applications to communicate effectively, enabling a seamless experience for users.",
          "tags": ["API", "REST", "Backend"],
          "image": "/blog-post-1.jpg",
          "category": "Backend",
          "author": {
            "name": "Sophia Turner",
            "email": "sophia@example.com",
            "image": "/c-1.jpg"
          },
          "publish_date": "2024-06-10"
        }
      ]
      
      
    return (
        <div>

            <Container>
                <div>
                    <div>
                        <h2>blogs</h2>
                    </div>

<div className="flex flex-wrap justify-center gap-6">
{blogs.map((blog, index) => <BlogsCard key={index} item={blog}></BlogsCard>)}
</div>
                   

                </div>
            </Container>
        </div>
    );
};

export default Blogs;