import { Link, useNavigate, useParams } from "react-router-dom";
import { Fragment, useContext, useState } from "react"
import { Context } from "../Context";
import Category from '../Json/Movie.json'
import ListAccount from '../Json/Account.json'


export default function MovieDetail() {
    const [showEditCmt, setShowEditCmt] = useState(false)
    const [content, setContent] = useState("");
    const [rating, setRating] = useState("");
    const [idCmt, setIDCmt] = useState("");
    const context = useContext(Context)

    var Account;
    if (JSON.parse(sessionStorage.getItem("Account")) != null) {
        Account = JSON.parse(sessionStorage.getItem("Account"))[0];
    }
    let navigate = useNavigate();
    if (Account == undefined) {
        navigate('/Login');
    }
    const { MovieID } = useParams();
    const movieAll = context.movie;
    const movieDetail = movieAll.find(movie => movie.ID == MovieID)
    const handleEditCmt = (content, rating, id) => {
        setContent(content)
        setRating(rating)
        setIDCmt(id)
        setShowEditCmt(!showEditCmt)





    }
    const handleSaveCmt = () => {
        setShowEditCmt(!showEditCmt)
        let category = context.category;
        let indexCategory;
        let indexMovie;

        for (let i = 0;i<category.length;i++){
            
            if (category[i].Name == movieDetail.Category) {
                
                for (let j = 0;j<category[i].Movie.length;j++){
                    if (category[i].Movie[j].ID == MovieID) {
                        for (let k = 0;k<category[i].Movie[j].Comment.length;k++){
                            if (category[i].Movie[j].Comment[k].ID == idCmt) {
                                let ObjNew = {
                                    "ID": idCmt,
                                    "UserID": Account.ID,
                                    "Rating": rating,
                                    "Content": content,
                                }
                                category[i].Movie[i].Comment[k] = ObjNew;
                            }
                        }
                    }
                }
            }
        }

        // category.forEach(category => {
        //     if (category.Name == movieDetail.Category) {
                
        //         category.Movie.forEach(movie => {
        //             if (movie.ID == MovieID) {
        //                 movie.Comment.forEach(cmt => {
        //                     if (cmt.id == idCmt) {
        //                         let ObjNew = {
        //                             "ID": idCmt,
        //                             "UserID": Account.ID,
        //                             "Rating": rating,
        //                             "Content": content,
        //                         }

        //                     }
        //                 })
        //             }
        //         })
        //     }

        // });
        localStorage.setItem("Category",JSON.stringify(category));
        

    }






    const getUserByID = (id) => { return ListAccount.find(account => account.ID == id) }


    return (


        <div className="container-fluid">


            <Link to={"/"} className="btn btn-danger">Back to home </Link>
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <img style={{ height: "27rem", width: "100%", }}
                            src={movieDetail.Thumbnail} alt={movieDetail} />


                    </div>
                    <div className="col-md-7">
                        <h2>{movieDetail.Name}</h2>
                        <h4>Điểm đánh giá: </h4>
                        <h4>Mô tả: {movieDetail.Description}</h4>

                        <h4>Thể loại: {movieDetail.Category}</h4>
                        <button className="btn btn-outline-primary">Đánh giá</button>

                        <hr />
                        <h2>Bình luận: </h2>
                        <ul>
                            {movieDetail.Comment.length != 0 &&
                                movieDetail.Comment.map(comment => {

                                    return (
                                        <li>
                                            {comment.UserID != Account.ID && (
                                                <Fragment>
                                                    <p>{getUserByID(comment.UserID).FullName} </p>
                                                    <p>{comment.Content}</p>
                                                    <p>{comment.Rating}</p>
                                                </Fragment>
                                            )}
                                            {showEditCmt == false && comment.UserID == Account.ID && (
                                                <Fragment>
                                                    <p>{getUserByID(comment.UserID).FullName} </p>
                                                    <p>{comment.Content}</p>
                                                    <p>{comment.Rating}</p>

                                                </Fragment>
                                            )}
                                            {
                                                showEditCmt == true && comment.UserID == Account.ID && (

                                                    <Fragment>


                                                        <p>{getUserByID(comment.UserID).FullName} </p>
                                                        <input value={content} onChange={e => setContent(e.target.value)} ></input>
                                                        <input value={rating} onChange={e => setRating(e.target.value)}></input>

                                                    </Fragment>
                                                )
                                            }


                                            <p>{comment.UserID == Account.ID ? (showEditCmt == false ? <button onClick={() => handleEditCmt(comment.Content, comment.Rating, comment.ID)}>Sửa</button> : <button onClick={handleSaveCmt}>Save</button>) : ""}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>



                    </div>

                </div>
            </div>

        </div>
    )
}