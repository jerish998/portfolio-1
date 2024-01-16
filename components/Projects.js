import React from "react"
import CardComponent from './CardComponent'

const Projects=()=>{
    return(
        <>
        <section id="projects">
        <div>
        <CardComponent
          title="BiryaniHub - MCA Project [2023]"
          description="Developed BiryaniHub, a web application, using React, Next.js, CSS, Sanity, and Stripe payment."
          image="./project.jpg"
          technologies={['React', 'CSS', 'Next.js']}
        />
      </div>
          {/* <div>
            <div className="card-container">
                <div className="image-container">
                    <img src="./project.jpg"/>
                </div>
                <div className="card-title">
                    <h3>BiryaniHub - MCA Project [2023]</h3>
                </div>
                <div className="card-body">
                    <p>
                Developed BiryaniHub, a web application, using Javascript, Next.js, CSS, Sanity, and Stripe
payment .
Created a fully responsive and functional website .
Used Next.js framework for server-side rendering and improved performance.
Implemented Sanity CMS for content management and easy updates.
Integrated Stripe payment for secure and seamless transactions.
Demonstrated proﬁciency in web development technologies and creating user-friendly interfaces.
Deployed to Vercel.
Framework: React, CSS, NextJS.
                    </p>
                </div>
                <div className="btn">
                    <button>
                        <a>React</a>
                    </button>
                    <button>
                        <a>Nextjs</a>
                    </button>
                </div>
            </div>
          </div> */}


            <hr />
            {/* <div>
                <div>
                    <span>
                    Literature Monitoring System - Internship Project [05/2023 - 08/2023]
                    </span>
                </div>
                <div>
                    <span>
                    The Literature Monitoring Project focuses on creating a user-friendly system for keeping track
of the latest research publications in the medical ﬁeld.
This system is designed to help researchers and organisations stay up-to-date with the newest
information in an effortless way.
By using automated tools, the project searches through important databases like PubMed and
Google Scholar to ﬁnd new medical journals related to speciﬁc topics.
Technology Used:
Python: The core programming language for system development.
FastAPI: Utilized as the web framework for creating robust and high-performance RESTful
APIs.
PostgreSQL: Chosen as the database management system for efficient data storage and
retrieval.
Docker: Docker containers encapsulate the application, ensuring consistent deployment
across environments.
SQLAlchemy and Alembic: SQLAlchemy facilitates database interactions, while Alembic is
used for database migration and version control.
                    </span>
                </div>
            </div> */}
        </section>

        </>
    )
}

export default Projects