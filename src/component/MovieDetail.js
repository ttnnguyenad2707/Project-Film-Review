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
    const [contentComment,setContentComment] = useState("");
    const [rateComment,setRateComment] = useState()
    const [isCmtState,setIsCmtState] = useState(false)
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

    var isCmt = false;

    movieDetail.Comment.map(cmt => {
        if (cmt.UserID == Account.ID){
            isCmt = true
        }
    })
    



    const handleEditCmt = (content, rating, id) => {
        setContent(content)
        setRating(rating)
        setIDCmt(id)
        setShowEditCmt(!showEditCmt)
    }
    const handleAddComment = (e)=>{
        e.preventDefault();
        
        let category = context.category;
        console.log(category);
        for (let i = 0;i<category.length;i++){
            console.log(category.length);
            if (category[i].Name == movieDetail.Category) {
                
                for (let j = 0;j<category[i].Movie.length;j++){
                    if (category[i].Movie[j].ID == MovieID) {
                        let ObjNew = {
                            "ID": category[i].Movie[j].Comment.length+1,
                            "UserID": Account.ID,
                            "Rating": rateComment,
                            "Content": contentComment,
                        }
                        console.log(ObjNew);
                        category[i].Movie[j].Comment.push(ObjNew)
                    }
                }
            }
        }
        console.log(category);
        context.setCategory(category) 
        localStorage.setItem("Category",JSON.stringify(category));
        setIsCmtState(true);
    }
    const handleSaveCmt = () => {
        setShowEditCmt(!showEditCmt)
        let category = context.category;
        console.log(category);
        for (let i = 0;i<category.length;i++){
            
            if (category[i].Name == movieDetail.Category) {
                
                for (let j = 0;j<category[i].Movie.length;j++){
                    if (category[i].Movie[j].ID == MovieID) {
                        for (let k = 0;k<category[i].Movie[j].Comment.length;k++){
                            if (category[i].Movie[j].Comment[k].ID == idCmt) {
                                console.log(category[i].Movie[j].Comment[k]);
                                
                                let ObjNew = {
                                    "ID": idCmt,
                                    "UserID": Account.ID,
                                    "Rating": rating,
                                    "Content": content,
                                }
                                
                                category[i].Movie[j].Comment[k] = ObjNew;
                            }
                        }
                    }
                }
            }
        }
        
        

        
        localStorage.setItem("Category",JSON.stringify(category));
        context.setCategory(category)
        

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
                            {isCmt == true  &&movieDetail.Comment.length != 0 &&
                                movieDetail.Comment.map(comment => {

                                    return (
                                        <li>
                                            {comment.UserID != Account.ID && (
                                                <Fragment>
                                                    <p>{getUserByID(comment.UserID).FullName} </p>
                                                    <p>Content: {comment.Content}</p>
                                                    <p>Rate Point: {comment.Rating}</p>
                                                </Fragment>
                                            )}
                                            {showEditCmt == false && comment.UserID == Account.ID && (
                                                <Fragment>
                                                    <p>{getUserByID(comment.UserID).FullName} </p>
                                                    <p>Content: {comment.Content}</p>
                                                    <p>Rate Point: {comment.Rating}</p>

                                                </Fragment>
                                            )}
                                            {
                                                showEditCmt == true && comment.UserID == Account.ID && (

                                                    <Fragment>


                                                        <p>{getUserByID(comment.UserID).FullName} </p>
                                                        <div className="w-100">
                                                            <label className="w-25">Content</label><textarea className="w-75" value={content} onChange={e => setContent(e.target.value)} ></textarea>
                                                            <label className="w-25">Rate Point</label><input className="w-75" value={rating} onChange={e => setRating(e.target.value)}></input>
                                                        </div>

                                                    </Fragment>
                                                )
                                            }


                                            <p>{comment.UserID == Account.ID ? (showEditCmt == false ? <button onClick={() => handleEditCmt(comment.Content, comment.Rating, comment.ID)}>Sửa</button> : <button onClick={handleSaveCmt}>Save</button>) : ""}</p>
                                        </li>
                                    )
                                })
                            }
                            
                        </ul>
                        {isCmt == false && (
                                <form className="row" onSubmit={handleAddComment}>
                                    <textarea className="col-12" type="text" onChange={e => setContentComment(e.target.value)} placeholder="Comment"></textarea>
                                    <input className="col-3" type="number" onChange={e => setRateComment(e.target.value)} placeholder="Rating"></input>
                                    <input type="submit" value="Comment"></input>
                                </form>
                            )}


                    </div>

                </div>
            </div>

        </div>
    )
}