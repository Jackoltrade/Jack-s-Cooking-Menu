import React, {useState} from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'

function App() {

    const [isSideBarHover, setSideBarHover] = useState(false);

    const handleMouseEnter = () => {
        setSideBarHover(true);
    }
    const handleMouseLeave = () => {
        setSideBarHover(false);
    }

    return (
        <>

            <button
                className={`sidebar-transition bg-secondary-subtle vh-100 position-fixed start-0 top-0 rounded-0 rounded-end-circle border border-dark-subtle text-dark ${isSideBarHover ? "p-3" : "p-2"}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasScrolling"
                    aria-controls="offcanvasScrolling"> |||
            </button>





            <div className="offcanvas offcanvas-start bg-secondary-subtle" data-bs-scroll="true" data-bs-backdrop="ture"
                 id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <div className="p-0 p-md-3 w-100">
                        <div className="d-flex flex-row justify-content-between">
                            <div className="">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2 shadow-sm" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-primary shadow-sm" type="submit">Search</button>
                                </form>
                            </div>
                            <div className="align-self-center">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-body border-top border-dark-subtle">
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                    <div className="card mb-3">
                        <img src="/vite.svg" className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins
                                ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="p-2 position-sticky border-top border-dark-subtle">
                    Jack's Cooking Recipe Collection
                </div>
            </div>

            <div>Hello World!</div>
        </>
    )
}

export default App
