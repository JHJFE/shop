import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useDispatch} from "react-redux"
import { Detail } from '../store/store';
let Item = ({shoes,url}) => {
    
    let dispatch = useDispatch();
    const Update = () =>{dispatch(Detail({...shoes,url}))}
    return (
        <Col>
            <NavLink to={'/detail'}>
                <div className='item' onClick={Update}>
                    <img alt='item' style={{ paddingTop: '30px' }} src={url} />
                </div>
            </NavLink>
            <div>{shoes.title}</div>
            <p>{shoes.price}</p>
        </Col>)
}
export default Item