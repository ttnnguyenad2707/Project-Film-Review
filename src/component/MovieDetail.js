import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react"
import { Context } from "../Context";

import Category from '../Json/Movie.json'


export default function MovieDetail() {
    
    // const [categoryLoad, setCategoryLoad] = useState(Category)
    // const [detail, setDetail] = useState(DetailMV)
    // console.log(id);

    const { MovieID } = useParams();
    const context = useContext(Context)
    const movieAll = context.movie;
    const movieDetail = movieAll.find(movie => movie.ID == MovieID)
    console.log(movieDetail);


    return (


        <div className="container-fluid">


            <Link to={"/"} className="btn btn-danger">Back to home </Link>
            <div className="row">
                <div className="col-md-7">
                    <img style={{ height: "50rem" , width:"100%",}} 
                    src={movieDetail.Thumbnail} alt={movieDetail} />


                </div>
                <div className="col-md-5">
                    <h2>{movieDetail.Name}</h2>
                    <h4>Điểm đánh giá: </h4>
                    <h4>Mô tả: {movieDetail.Description}</h4>

                    <h4>Thể loại: {Category.Name}</h4>
                    <button class="btn btn-outline-primary">Đánh giá</button>

                         <hr/>
                    <h2>Bình luận: </h2>




                </div>

            </div>

        </div>
    )
}