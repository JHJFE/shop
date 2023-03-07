import { useSelector } from "react-redux"
import { NavLink } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { Detail,Remove } from '../store/store';

function Cart() {
    let cartItem = useSelector((state) => state.cart)
    let dispatch = useDispatch();
   
    return (
        <article>
            {cartItem.map((el) => {
                return (

                    <section>
                        <h4>{el.title}</h4>
                        <NavLink to={'/detail'}>
                            <div className='item' onClick={
                                () => { dispatch(Detail({ ...el })) }
                            }>
                                <img alt='item' style={{ paddingTop: '30px' }} src={el.url} />
                            </div>
                            <div style={{ paddingBottom: '30px' }}>가격: {el.price}</div>
                        </NavLink>
                        <button onClick={()=>dispatch(Remove(el))}>삭제</button>
                    </section>
                )
            })} 
        </article>
    )
}
export default Cart