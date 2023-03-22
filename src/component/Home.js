import { Fragment, useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
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
    var checkLogin = true;
    var Account;
    if(JSON.parse(sessionStorage.getItem("Account"))!=null){
        Account = JSON.parse(sessionStorage.getItem("Account"))[0];
    }
    let navigate = useNavigate();
    if(Account == undefined){
        checkLogin= false
    }
    

    return (

        <div className="container-fluid">

            <div className="row">
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


                    <div className="row">
                        {categoryLoad.map((category) => (
                            <Fragment>
                                {
                                    category.Movie.map((movie) => (

                                        <div className="card  m-2  ">
                                            <div className="card-body ">
                                                <div className="">
                                                    <div>
                                                        <Link to={checkLogin == true ?  `/MovieDetail/${movie.ID}` : "/Login"}>
                                                            <div>Tên phim: {movie.Name} </div>

                                                            <img src={movie.Thumbnail} />
                                                            <div> Mô tả: {movie.Description} </div>

                                                            <div>{category.Name} </div>
                                                            <div>Đánh giá: {movie.AvgRating} </div>
                                                        <button className="btn btn-outline-primary">đánh giá</button>
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