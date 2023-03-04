import { Row, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Item from '../components/item';


function Home() {
    let shoes = useSelector((state) => state.data)

    return (
        <Container>
            <Row>
                {shoes.map((el) => { // Item에 url 넘겨줄 때 `https://codingapple1.github.io/shop/shoes${el.id+1}.jpg`  아이디+1 형식으로 넘겨주면 잘 나올 것으로 추정
                    return <Item  shoes  = {el} url={`https://codingapple1.github.io/shop/shoes${el.id+1}.jpg`}  />
                })}
            </Row>
        </Container>
    )
}
export default Home;