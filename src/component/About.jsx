import React from 'react'
import './styles/About.css'

const url = 'https://www.youtube.com/@BePracticalTech'

function About(props) {
   return (
      <section id='about'>
           <div className="container mt-5 p-3">

            <div className='section-title text-center'>
                <h2 className='text-title display-4'>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, saepe magnam earum at cum corporis eveniet obcaecati minus quidem sint odio? Nulla nisi sint minus perspiciatis sed earum officia natus.</p>
            </div>

            {/*  personal info */}
              <div className="row">
                   <div className="col-md-4 col-lg-4">
                      <img src={'https://picsum.photos/id/544/500/500'} alt="no img" className='img-fluid img-thumbnail'/>
                  </div>

                    <div className='col-md-8 col-lg-8 content'>
                        <h3>Web & FullStack Developer</h3>
                        <p className='text-secondary'>
                         <em>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea. Repudiandae id, architecto corporis nostrum
                         </em>
                        </p>

                        <div className='row'>
                            <div className='col-md-6 col-lg-6'>
                            <ul className='list-group'>
                                   <li className='list-group-item'>
                                        <i className='bi bi-envelope-fill me-2'></i>
                                        <strong>Email</strong>
                                        <span className='text-success float-end'>gangadhar@gmail.com</span>
                                    </li>
                                    <li className='list-group-item'>
                                        <i className='bi bi-phone-fill me-2'></i>
                                        <strong>Mobile</strong>
                                        <span className='text-success float-end'>8494939363</span>
                                    </li>
                                    <li className='list-group-item'>
                                        <i className='bi bi-browser-edge me-2'></i>
                                        <strong>Website</strong>
                                        <span className='text-success float-end'>
                                            www.xyz.com</span>
                                    </li>
                                    <li className='list-group-item'>
                                        <i className='bi bi-globe me-2'></i>
                                        <strong>City</strong>
                                        <span className='text-success float-end'>
                                            Davanagere</span>
                                    </li>
                             </ul>
                            </div>
                            <div className='col-md-6 col-lg-6'>
                            <ul className='list-group'>
                                   <li className='list-group-item'>
                                        <i className='bi bi-book me-2'></i>
                                        <strong>Qualification</strong>
                                        <span className='text-success float-end'>
                                            Masters</span>
                                    </li>
                                    <li className='list-group-item'>
                                        <i className='bi bi-patch-check me-2'></i>
                                        <strong>Certification</strong>
                                        <span className='text-success float-end'>
                                            MERN Stack</span>
                                    </li>
                                    {/* <li className='list-group-item'>
                                        <i className='bi bi-browser-edge me-2'></i>
                                        <strong>Website</strong>
                                        <span className='text-success float-end'>
                                            www.xyz.com</span>
                                    </li>
                                    <li className='list-group-item'>
                                        <i className='bi bi-globe me-2'></i>
                                        <strong>City</strong>
                                        <span className='text-success float-end'>
                                            Davanagere</span>
                                    </li> */}
                                    <li className="list-group-item d-grid">
                                        <a href={url} target="_blank" rel="noreferrer" className='btn btn-outline-info'>
                                           <i className='bi bi-arrow-down'></i> Download CV
                                        </a>
                                    </li>
                             </ul>
                            </div>
                        </div>
                    </div>
               </div>
          </div>
              
          {/* skills */}
          <div className='section-title text-center mt-4'>
                <h2 className='text-title display-4'>Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus, saepe magnam earum at cum corporis eveniet obcaecati minus quidem sint odio? Nulla nisi sint minus perspiciatis sed earum officia natus.</p>
            </div>

          <div className='row skills-content'>
             <div className='col-lg-6 col-md-6 col-sm-12'>
                <div className='skill-block mt-3 mb-3'>
                <strong className='text-success'>HTML <i className="val float-end">98%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-success' style={{width: "98%"}}>98%</div>
                </div>
                </div>
                <div className='skill-block mt-3 mb-3'>
                <strong className='text-danger'>Css& Css3 <i className="val float-end">88%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-danger' style={{width: "88%"}}>88%</div>
                </div>
                </div>
                <div className='skill-block mt-3 mb-3'>
                <strong className='text-primary'>Javascript <i className="val float-end">80%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-primary' style={{width: "80%"}}>80%</div>
                </div>
                </div>
                <div className='skill-block mt-3 mb-3'>
                <strong className='text-secondary'>Jquery <i className="val float-end">85%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-secondary' style={{width: "85%"}}>85%</div>
                </div>
                </div>
             </div>
             <div className='col-lg-6 col-md-6 col-sm-12'>
             <div className='skill-block mt-3 mb-3'>
                <strong className='text-warning'>React <i className="val float-end">82%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-warning' style={{width: "82%"}}>82%</div>
                </div>
                </div>
                <div className='skill-block mt-3 mb-3'>
                <strong className='text-success'>Node JS and Express JS <i className="val float-end">80%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-success' style={{width: "80%"}}>80%</div>
                </div>
                </div>
                <div className='skill-block mt-3 mb-3'>
                <strong className='text-dark'>MangoDB <i className="val float-end">75%</i></strong>
                <div className="progress" role='progressbar'>
                    <div className='progress-bar progress-bar-striped progress-bar-animated bg-dark' style={{width: "75%"}}>75%</div>
                </div>
                </div>
             </div>
          </div>
      </section>
   )
}
export default About