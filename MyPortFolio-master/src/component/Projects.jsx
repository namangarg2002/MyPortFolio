import React from 'react';
import projects from './Data/projects.json';

const Projects = () => {
  return (
    <div className="container projects my-3" id='projects'>
      <h1>PROJECTS</h1>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((data) => (
          <div className="my-3 col-sm-6 col-md-4 col-lg-3 mx-3" key={data.id}>
            <div
              className="card bg-black text-light"
              style={{
                width: '18rem',
                border: '1px solid yellow',
                boxShadow: '5px 5px 10px 10px rgba(101, 175, 10, 0.5)',
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div
                className="d-flex justify-content-center align-content-center p-3"
                style={{ height: '200px' }}
              >
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    border: '2px solid yellow',
                    borderRadius: '10px',
                  }}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary mx-3">
                  Demo
                </a>
                <a href={data.source} className="btn btn-warning">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;