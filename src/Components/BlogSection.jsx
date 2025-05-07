import React from 'react';
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog4.jpg';
import blog5 from '../images/blog5.jpg';
import blog6 from '../images/blog6.jpg';
import Footer from './Footer';
import NavBar from './NavBar';
import '../Css/BlogSection.css'; // Link the CSS

const blogs = [
  {
    id: 1,
    title: 'I am not afraid, I am no longer afraid.',
    author: 'Islam ElBassuny',
    date: 'Jan 13, 2025',
    tags: 'Students, Students life',
    image: blog1,
  },
  {
    id: 2,
    title: 'Ten Years in Za’atari Camp',
    author: 'Batool Aljnade',
    date: 'Jan 10, 2025',
    tags: 'Scholars',
    image: blog2,
  },
  {
    id: 3,
    title: 'Walk 4 Education',
    author: 'Islam ElBassuny',
    date: 'Sep 16, 2023',
    tags: 'Scholars',
    image: blog3,
  },
  {
    id: 4,
    title: 'Walking into Harvard',
    author: 'Sendus Majanni',
    date: 'Sep 16, 2023',
    tags: 'Scholars',
    image: blog4,
  },
  {
    id: 5,
    title: 'New Year’s Lesson',
    author: 'Ahmed Alyacoubi',
    date: 'Jan 20, 2024',
    tags: 'Insights',
    image: blog5,
  },
  {
    id: 6,
    title: 'From Gaza to Jerusalem to Cairo',
    author: 'Mariam AbuHashish',
    date: 'Apr 19, 2022',
    tags: 'Scholars',
    image: blog6,
  },
];

function BlogSection() {
  return (
    <>
      <NavBar />
      <section className="blog-section">
          <div className="py-5 text-center" style={{ backgroundColor: "#C7E5E0" }}>
        <h2 className="fw-bold">Blogs</h2>
        <p className="text-muted">Voices of our Students</p>
      </div>

          {/* Search */}


        <div className="container">
          
 
          {/* Blog Grid */}
          <div className="d-flex justify-content-center mb-4">
          <input
            type="text"
            className="form-control blog-search"
            placeholder="Search by Blog name"
          />
        </div>
          <div className="row g-4">
            {blogs.map((blog) => (
              <div key={blog.id} className="col-md-4">
                <div className="blog-card position-relative">
                  <img src={blog.image} alt={blog.title} className="img-fluid" />
                  <div className="overlay p-3 d-flex flex-column justify-content-end">
                    <h5 className="text-white fw-bold blog-title">{blog.title}</h5>
                    <p className="text-white blog-meta">
                      by {blog.author} | {blog.date} | {blog.tags}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-4">
            <button className="btn btn-teal">Load more</button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogSection;
