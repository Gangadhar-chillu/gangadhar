import React from 'react'
import './styles/resume.css'

function Resume(props) {
    return (
       <section id='resume'>
           <div className='container mt-5 p-3'>
              <div className='section-title text-center'>
                 <h2 className='text-title display-4'>Resume</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe aperiam quisquam aliquam! Provident eaque unde hic magni iure saepe facere accusamus nostrum doloribus omnis obcaecati doloremque iusto, quis minima?</p>
              </div>

             <div className='row'>
             <div className='col-lg-6 col-md-6 col-sm-12'>
                  <h6 className='display-6 text-secondary'>Education</h6>
                  <div className='resume-item pb-0'>
                     <h4>Masters</h4>
                     <h5>2022-2023</h5>
                     <p>
                        <em>university/collage name, cityname</em>
                     </p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing Similique.</p>
                  </div>
                  <div className='resume-item pb-0'>
                     <h4>Degree</h4>
                     <h5>2018-2020</h5>
                     <p>
                        <em>university/collage name, cityname</em>
                     </p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing Similique.</p>
                  </div>
                  <div className='resume-item  pb-0'>
                     <h4>Diploma</h4>
                     <h5>2015-2018</h5>
                     <p>
                        <em>university/collage name, cityname</em>
                     </p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing Similique.</p>
                  </div>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-12'>
                 <h6 className='display-6 text-secondary'>Certification</h6>

                 <div className='resume-item  pb-0'>
                     <h4>MERN Stack</h4>
                     <h5>2023</h5>
                     <p>
                        <em>Be-practical Tech Solution, Bengaluru</em>
                     </p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing Similique.</p>
                  </div>
                  <div className='resume-item  pb-0'>
                     <h4>Web Development</h4>
                     <h5>2023</h5>
                     <p>
                        <em>Be-Practical Tech Solution, Bengaluru</em>
                     </p>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing Similique.</p>
                  </div>
              </div>
             </div>
           </div>
       </section>
    )
}
export default Resume