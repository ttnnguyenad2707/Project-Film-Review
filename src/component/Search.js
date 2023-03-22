import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react"
import { Context } from "../Context";
import Category from '../Json/Movie.json'
import ListAccount from '../Json/Account.json'
import '../index.css'

export default function Search() {

    const { search } = useParams();

    const context = useContext(Context)
    const movieAll = context.movie;

    const movieDetail = movieAll.filter(movie => movie.Name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="row movie-container">
            {movieDetail.map((movie) => (
                <Fragment>
                    {
                        <div className="card  m-2  ">
                            <div className="card-body ">


                                <div className="">
                                    <div>
                                        <Link to={`/MovieDetail/${movie.ID}`}>
                                            <div>Tên phim: {movie.Name} </div>

                                            <img src={movie.Thumbnail} />
                                            <div> Mô tả: {movie.Description} </div>

                                            <div>Thể loại: {movie.Category}</div>
                                            <div>Đánh giá: {movie.AvgRating} </div>
                                            <button className="btn btn-outline-primary">đánh giá</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    }
                </Fragment>

            ))}
        </div>

    )
}
