import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react"
import { Context } from "../Context";
import Category from '../Json/Movie.json'


import ListAccount from '../Json/Account.json'
import '../App.css';

export default function ListFilm() {

    const { CatID } = useParams();

    const context = useContext(Context)
    // const movieAll = context.movie;

    const category = Category.filter(Cat => Cat.ID==CatID)
    
    // console.log(Category)
    // console.log(CatID);
    const [list, setList] = useState([])
    const Movies = category.map(cate=>cate.Movie)
    // console.log(category);
    // console.log(list)
    const Moviess    = Movies.reduce((acc, curr) => acc.concat(curr), []);
    console.log(Movies)
    console.log(Movies);    
    return (
        <div className="row movie-container">
            <div className="col-md-2">
                    <h1 style={{ color: "red" }} > Thể loại </h1> <hr />
                    {Category.map(cat =>
                        <Fragment>
                            <Link to={`/ListFilm/${cat.ID}`}>
                            
                            <p style={{color: "red"}} >{cat.Name}</p>
                            <br></br>
                            </Link>
                        </Fragment>
                    )}
                </div>
                

            {Moviess.map(Mov=>(
                <Fragment>
                    {
                        <div className="card  m-2  ">
                            <div className="card-body ">


                                <div className="">
                                    <div>
                                        <Link to={`/MovieDetail/${Mov.ID}`}>
                                            <div>Tên phim: {Mov.Name} </div>

                                            <img src={Mov.Thumbnail} />
                                            <div> Mô tả: {Mov.Description} </div>

                                            <div>Thể loại: {Mov.Category}</div>
                                            <div>Đánh giá: {Mov.AvgRating} </div>
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
