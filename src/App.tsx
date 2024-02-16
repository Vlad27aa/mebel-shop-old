import "./App.css"
import { useState, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { IItem, IShop } from "./data/interfaces"
import db from "./data/db"
import { useAppSelector, useAppDispatch } from "./hooks"
import MainLayout from "./components/Header/routes/MainLayout"
import Home from "./components/Header/routes/Home"
import Catalog from "./components/Header/routes/Catalog"
import About from "./components/Header/routes/About"
import Contacts from "./components/Header/routes/Contacts"
import Basket from "./components/Header/routes/Basket"

function App() {
  const dispatch = useAppDispatch()

  // const shop: IShop = db
  // const categories = useAppSelector((state) => state.shop.categories)
  // const [filteredShop, setFilteredShop] = useState<IItem[] | undefined>(
  //   undefined
  // )
  // const [category, setCategory] = useState(categories[2])
  // useEffect(() => {
  //   setFilteredShop(
  //     shop?.items.item
  //       .filter((el) => el.param[0] === category)
  //       .filter((el) => !!el.stock_quantity)
  //       .concat(
  //         shop?.items.item
  //           .filter((el) => el.param[0] === category)
  //           .filter((el) => !el.stock_quantity)
  //       )
  //   )
  // }, [category])

  return (
    <BrowserRouter>
      <div className="App font-montserrat tracking-wider">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
