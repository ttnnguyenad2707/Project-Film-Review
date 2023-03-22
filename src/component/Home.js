import { Fragment, useContext, useState } from "react"
import { Link } from "react-router-dom";
import Category from '../Json/Movie.json'

export default function Home() {

    const [category, setCategory] = useState(Category)
    //load movie
    const [categoryLoad, setCategoryLoad] = useState(Category)
    const [showSearch, setShowSearch] = useState(false)
    const [movie, setMovie] = useState([])

    const handleSearch = (search) => {

        if (search == "") {
            setShowSearch(false)
        }
        setShowSearch(true)
        var searchList = [];
        category.map(category => {
            var temp = category.Movie.filter(movie => movie.Name.toLowerCase().includes(search.toLowerCase()))
            temp = temp.map(movie => {
                return { ...movie, Category: category.Name }
            })
            if (temp.length !== 0) {
                searchList.push(...temp)
            }
        })
        setMovie(searchList);
    }



    return (

        <div className="container-fluid">

            <div class="row">
                <div className="col-md-2">
                    <h1 style={{ color: "red" }} > Thể loại </h1> <hr />
                    {categoryLoad.map(cat =>
                        <Fragment>
                            <a style={{color: "red"}} href="#">{cat.Name}</a>
                            <br></br>
                        </Fragment>
                    )}
                </div>


                <div className="col-md-10">

                    <h1 style={{ color: "red" }}> Danh sách phim</h1> <hr />


                    <div class="row">
                        {categoryLoad.map((category) => (
                            <Fragment>
                                {
                                    category.Movie.map((movie) => (

                                        <div class="card  m-2  ">
                                            <div class="card-body ">


                                                <div class="">
                                                    <div>
                                                        <Link to={`/MovieDetail/${movie.ID}`}>
                                                            <div>Tên phim: {movie.Name} </div>

                                                            <img src={movie.Thumbnail} />
                                                            <div> Mô tả: {movie.Description} </div>

                                                            <div>{category.Name} </div>
                                                            <div>Đánh giá: {movie.AvgRating} </div>
                                                        <button class="btn btn-outline-primary">đánh giá</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                            </Fragment>

                        ))}
                    </div>
                </div>
            </div>
        </div>

    )

}