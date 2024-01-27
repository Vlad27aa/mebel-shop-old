export interface ICategory {
  category: string[]
}
export interface ICurrencies {
  currency: string
}

export interface IItem {
  brand: string
  categoryId: number
  currencyId: string
  description: string
  manufacturer_warranty: number
  name: string
  param: any[]
  picture: string[] | string
  price: number
  stock_quantity: number
  url: string
  vendor: string
  vendorCode: string
  listPrice?: number
}
export interface IItems {
  item: IItem[]
}
export interface IShop {
  categories: ICategory
  currencies: ICurrencies
  items: IItems
  name: string
  param: string
  url: string
}

// export interface IYML_Catalog {
//   shop: IShop
// }

// export interface IDB {
//   yml_catalog: IYML_Catalog
// }
