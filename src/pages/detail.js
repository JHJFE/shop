import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Reverse } from '../store/store';
import Tab from "../components/tab";

function Detail() {
    let detail = useSelector(state => state.detail)
    let showAd = useSelector(state => state.ad)
    let dispatch = useDispatch();
   
    useEffect(() => {
        setTimeout(() => {
            dispatch(Reverse(false))
        }, 2000)
    },[showAd])

    return (
        <div className="container">
            {showAd?
            <div  display = 'none'>할인!! in 2sec...</div>:null}
            <div className="row">
                <div className="col-md-6">
                    <img src={detail.url} alt='신발아오' width='100%' />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{detail.title}</h4>
                    <p>{detail.content}</p>
                    <p>{detail.price}</p>
                    <button className="btn btn-danger">장바구니 담기</button>
                </div>
            </div>
            <Tab size={detail.size} review = {detail.review} request={detail.request}/>
        </div>
    )
}
export default Detail;