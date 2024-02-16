import CardsList from "../../CardsList"
import LeftFilterMenu from "../../LeftFilterMenu"
import TopFilterMenu from "../../TopFilterMenu"

const Catalog = () => {
  return (
    <div className="">
      <TopFilterMenu />
      <div className="flex">
        <LeftFilterMenu />
        <CardsList />
      </div>
    </div>
  )
}

export default Catalog
