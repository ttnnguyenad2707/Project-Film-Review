import { Fragment, useContext, useState } from "react"
import { Link } from "react-router-dom";

// const H1Style = {
//     color: "red"
// };

export default function Home() {

    return (
        <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand">Phim Hay</a>

                <div class="collapse navbar-collapse" >
                    <Link to="/Login" >Đăng nhập</Link>
                    /
                    <Link to="/Register" >Đăng kí </Link>
                </div>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

                </form>

            </nav>

            <div class="row">
                <div className="col-3">
                    <h1 style={{ color: "red"}} > Thể loại </h1> <hr />
                </div>

                <div className="col-9">
                    <h1 style={{ color: "red"}}> Danh sách phim</h1> <hr />

                </div>

            </div>





        </div>

    )

}