"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Appnavber = ({data,isLogin}) => {
  const [search,setsearch]=useState("")
  const router=useRouter()
 
    useEffect(()=>{
        router.refresh()
    },[isLogin==false])
  
    return (
        <div>
      <div className="py-2 bg-dark text-white container-fluid">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <h6>
                <i className="bi bi-calendar2-check"></i> Today:
                <span>
                  {new Date().getDay()}/{new Date().getMonth()}/{new Date().getFullYear()}
                </span>
              </h6>
            </div>
            <div className="col-md-4">
              <span className="float-end">
                <a target="_blank" className="text-white" href={data["social"][0]['facebook']}>
                  <i className="mx-2 bi bi-facebook"></i>
                </a>
                <a target="_blank" className="text-white" href={data["social"][0]['youtube']}>
                  <i className="mx-2 bi bi-youtube"></i>
                </a>
                <a target="_blank" className="text-white" href={data["social"][0]['twitter']}>
                  <i className="mx-2 bi bi bi-twitter"></i>
                </a>
                <a target="_blank" className="text-white" href={data["social"][0]['linkedin']}>
                  <i className="mx-2 bi bi-linkedin"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navbar expand="lg" className="bg-white sticky-top shadow-sm">
        <div className="container">
          <div className="navbar-brand">
            <img className="nav-logo" src={"/images/logo.svg"} alt="img" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto ms-3 my-2 my-lg-0"  navbarScroll>
              <Link className="nav-link f-13" href="/">
                Home
              </Link>
              {data["categories"] ? data["categories"].map((d,i)=> <Link key={i} className="nav-link f-13" href={`/categoriy?id=${d?.id}`}>
                {d?.name}
              </Link>):"Server not working"}
              
            </Nav>
            <div className="d-flex ms-3">
              <div className="input-group">
                <input type="text" onChange={(e)=>setsearch(e.target.value)} className="form-control" placeholder="Search..." />
                <Link href={`/search?keyword=${search}`} className="btn btn-danger" type="button">
                  <i className="bi bi-search"></i>
                </Link>
              </div>
            </div>
            {
               isLogin ? (
                                <>
                                    <div className="float-right mx-3 h-auto d-flex">
                                        <div className="user-dropdown">
                                            <img className="icon-nav-img icon-nav" src="/images/profile.png" alt=""/>
                                            <div className="user-dropdown-content ">
                                                <div className="mt-4 text-center">
                                                    <img className="icon-nav-img" src="/images/profile.png" alt=""/>
                                                    <hr className="user-dropdown-divider  p-0"/>
                                                </div>
                                                <Link href="/profile" className="side-bar-item">
                                                    <span className="side-bar-item-caption">Profile</span>
                                                </Link>
                                                <Link href="/comments" className="side-bar-item">
                                                    <span className="side-bar-item-caption">Comments</span>
                                                </Link>
                                                <a href="/api/user/login" className="side-bar-item">
                                                    <span className="side-bar-item-caption">Logout</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Link href="/user/login" className="btn ms-3 btn-outline-danger">Login</Link>
                                </>
                            )
                        }
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
    );
};

export default Appnavber;