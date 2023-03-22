import { Link, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react"
import { Context } from "../Context";
import Category from '../Json/Movie.json'
import ListAccount from '../Json/Account.json'


export default function MovieDetail() {
    
    // const [categoryLoad, setCategoryLoad] = useState(Category)
    // const [detail, setDetail] = useState(DetailMV)
    // console.log(id);
    var userInfo = JSON.parse(sessionStorage.getItem('Account'))
    var Account = userInfo[0];
    const { MovieID } = useParams();
    const context = useContext(Context)
    const movieAll = context.movie;
    const movieDetail = movieAll.find(movie => movie.ID == MovieID)
    const getUserByID = (id) => {return  ListAccount.find(account => account.ID == id)}

    return (


        <div className="container-fluid">


            <Link to={"/"} className="btn btn-danger">Back to home </Link>
            <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img style={{ height: "27rem" , width:"100%",}} 
                    src={movieDetail.Thumbnail} alt={movieDetail} />


                </div>
                <div className="col-md-7">
                    <h2>{movieDetail.Name}</h2>
                    <h4>Điểm đánh giá: </h4>
                    <h4>Mô tả: {movieDetail.Description}</h4>

                    <h4>Thể loại: {movieDetail.Category}</h4>
                    <button className="btn btn-outline-primary">Đánh giá</button>

                         <hr/>
                    <h2>Bình luận: </h2>
                    <ul>
                    {
                        movieDetail.Comment.map(comment =>(
                            <li>
                                <p>{getUserByID(comment.UserID).FullName}</p>
                                <p>{comment.Content}</p>
                                <p>{comment.Rating}</p>
                            
                            </li>
                        ))
                    }
                    </ul>



                </div>

            </div>
            </div>

        </div>
    )
}