import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react"
import  {Context} from "../Context";

 import Category from '../Json/Movie.json'
export default function MovieDetail() {
    // const [categoryLoad, setCategoryLoad] = useState(Category)
    // const [detail, setDetail] = useState(DetailMV)
// console.log(id);

const {MovieID} = useParams();
const context = useContext(Context)
const movieAll = context.movie;
    const movieDetail = movieAll.find(movie => movie.ID == MovieID)
    console.log(movieDetail);

    
    return (


        <div className="container">
            <div>{movieDetail.Name}</div>
            <img src={movieDetail.Thumbnail} alt={movieDetail}/>
            <Link to={"/"} className="btn btn-danger">Back to home </Link>
            <div className="row">
                <div className="col-5">


                  
                </div>
                <div className="col">
                  

                </div>

            </div>

        </div>
    )
}