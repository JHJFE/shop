import { useDispatch } from 'react-redux';
import { AddData } from './store/store';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Detail from './pages/detail.js'
import Home from './pages/home';
import axios from 'axios';
import Cart from './pages/cart';

function App() {
  let dispatch = useDispatch()
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">BasketBall 이것저것</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link href="#home"><Link to='/'>홈</Link></Nav.Link>
            <Nav.Link href="#home">메뉴</Nav.Link>
            <Nav.Link href="#features">할인</Nav.Link>
            <Nav.Link href="#features">추천</Nav.Link>
            <Nav.Link href="#pricing">주문리스트</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to='/'>홈</Link>
      <Link to='/detail'>상세 페이지</Link>
      <Link to='/cart'>장바구니</Link>

      <div className='logo-container'>
        <div className="main-bg"></div>
      </div>
    <button onClick={() => {
      axios.get('https://codingapple1.github.io/shop/data2.json')
      .then((res)=>{
        dispatch(AddData(res.data))
      })
    }}> 상품 추가</button>
      <Routes>
        <Route path='/detail' element={<Detail/>} />
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

    </div>
  );
}

export default App;
