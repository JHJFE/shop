import { configureStore, createSlice } from '@reduxjs/toolkit'

let data = createSlice({
  name: 'data',
  initialState: [
    {
      id: 0,
      title: "White and Black",
      content: "Born in France",
      price: 120000,
      url: "https://codingapple1.github.io/shop/shoes1.jpg",
      size: ['230,235,240,245,250,255,260,265,270,275,280'],
      review: ['평점: 4.4, 일반사람한테는 나름 편안하지만 발 볼이 넓은 사람한테는 불편할 수 도','평점: 3.4, 발볼이 좀 넓은 편이라 이런 신발은 역시 불편','평점:5.0, 찾고있던 디자인이었는데 너무 좋아요!!'],
      request: ['교환 요청을 했는데 아직 안왔습니다','재입고 언제 되나요','할말이 없어요..']
    },

    {
      id: 1,
      title: "Red Knit",
      content: "Born in Seoul",
      price: 110000,
      url: "https://codingapple1.github.io/shop/shoes2.jpg",
      size: ['230,235,240,245,250,255,260,265,270,275,280'],
      review: ['평점: 4.4, 일반사람한테는 나름 편안하지만 발 볼이 넓은 사람한테는 불편할 수 도','평점: 3.4, 발볼이 좀 넓은 편이라 이런 신발은 역시 불편','평점:5.0, 찾고있던 디자인이었는데 너무 좋아요!!'],
      request: ['교환해서 받았는데 사이즈가 이상해요','가격이 너무 비싸요','할말이  진짜로!!! 없어요..']
    },

    {
      id: 2,
      title: "Grey Yordan",
      content: "Born in the States",
      price: 130000,
      url: "https://codingapple1.github.io/shop/shoes3.jpg",
      size: ['230,235,240,245,250,255,260,265,270,275,280'],
      
      review: ['평점: 4.4, 일반사람한테는 나름 편안하지만 발 볼이 넓은 사람한테는 불편할 수 도','4.4, 그냥 좋아요', '2.0, 그냥 별로'],
      request: ['배송관련 문의 드립니다','상품 관련 문의드립니다','볼은 어떤가요']
    }
  ],
  reducers: {
    Data(state, action) {
      return state
    }, AddData(state, action) {
      return [...state, ...action.payload]
    }
  }
})

let detail = createSlice({
  name: 'data',
  initialState: {
    id: 0,
    title: "White and Black",
    content: "Born in France",
    price: 120000,
    url: "./shoes1.png"
  },
  reducers: {
    Detail(state, action) {

      let newState = action.payload
      return newState
    }
  }
})

let ad = createSlice({
  name: 'ad',
  initialState: true,
  reducers: {
    Reverse(state, action) {
      
      return action.payload
    }
  }
})



export let { Data, AddData } = data.actions
export let { Detail } = detail.actions
export let { Reverse } = ad.actions

export default configureStore({
  reducer: {
    data: data.reducer,
    detail: detail.reducer,
    ad: ad.reducer
  }
}) 
