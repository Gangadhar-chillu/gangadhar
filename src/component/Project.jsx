import React from "react"
import './styles/project.css'

function Project(props) {
    return (
       <section id="projects">
           <div className="container">
               <div className="row">
                   <div className="col-md-12 text-center mt-5">
                        <h3 className="display-3 text-title">Project</h3> 
                    </div>                   
               </div>
               <div className="row">
                    <div className="col-md-12 mt-3 mb-3 d-flex justify-content-center">
                        <ul className="nav nav-pills" id="project" role="tablist">
                            <li className="nav-item">
                                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#nav-html" id="html">HTML&Css</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-js" id="js">Javascript</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-react" id="react">React</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-react-api" id="reactApi">ReactAPI</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-mern" id="mern">MERN Stack</button>
                            </li>
                        </ul>
                    </div>
               </div>
               <div className="row">
                   <div className="col-md-12">
                       <div className="tab-content" id="project-tab">
                        {/* first panel */}
                          <div className="tab-pane fade show active" id="nav-html">
                              <div className="card mt-4 mb-3">
                                <div className="card-header">
                                    <h5 className="text-success text-center">HTML&Css Project</h5>
                                </div>
                                <div className="card-body">
                                    {/* project */}
                                    <div className="row">
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                                <img src="https://picsum.photos/id/243/400/400" alt="no image" 
                                                className="card-img-top"/>
                                                <div className="card-body">
                                                    <h5 className="text-center">Project-1</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a href="#" target="_blank" className="btn btn-outline-success btn-sm">Preview</a>
                                                        <a href="#" target="_blank" className="btn btn-outline-secondary btn-sm">Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/345/400/400" alt="no image" 
                                                className="card-img-top"/>
                                                <div className="card-body">
                                                    <h5 className="text-center">Project-2</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a href="#" target="_blank" className="btn btn-outline-success btn-sm">Preview</a>
                                                        <a href="#" target="_blank" className="btn btn-outline-secondary btn-sm">Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/445/400/400" alt="no image" 
                                                className="card-img-top"/>
                                                <div className="card-body">
                                                    <h5 className="text-center">Project-3</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a href="#" target="_blank" className="btn btn-outline-success btn-sm">Preview</a>
                                                        <a href="#" target="_blank" className="btn btn-outline-secondary btn-sm">Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 mt-2">
                                            <div className="card shadow-lg">
                                            <img src="https://picsum.photos/id/545/400/400" alt="no image" 
                                                className="card-img-top"/>
                                                <div className="card-body">
                                                    <h5 className="text-center">Project-4</h5>
                                                    <div className="d-flex justify-content-between">
                                                        <a href="#" target="_blank" className="btn btn-outline-success btn-sm">Preview</a>
                                                        <a href="#" target="_blank" className="btn btn-outline-secondary btn-sm">Code</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* project end */}
                                </div>
                              </div>
                          </div>
                          {/* second panel */}
                          <div className="tab-pane fade" id="nav-js">
                              <div className="card mt-4 mb-3 ">
                                  <div className="card-header">
                                     <h5 className="text-primary text-center">Javascript Project</h5>
                                  </div>
                                  <div className="card-body">

                                  </div>
                              </div>
                          </div>
                          {/* third panel */}
                          <div className="tab-pane fade " id="nav-react">
                              <div className="card mt-4 mb-3">
                                <div className="card-header">
                                    <h5 className="text-info text-center">React Project</h5>
                                </div>
                                <div className="card-body">
                                </div>
                              </div>
                          </div>
                          {/* fourth panel */}
                          <div className="tab-pane fade " id="nav-react-api">
                              <div className="card mt-4 mb-3">
                                <div className="card-header">
                                    <h5 className="text-danger text-center">React-API Project</h5>
                                </div>
                                <div className="card-body">
                                </div>
                              </div>
                          </div>
                          {/* fifth panel */}
                          <div className="tab-pane fade " id="nav-mern">
                              <div className="card mt-4 mb-3">
                                <div className="card-header">
                                    <h5 className="text-warning text-center">MERN Stack Project</h5>
                                </div>
                                <div className="card-body">
                                </div>
                              </div>
                          </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>
    )
}

export default Project