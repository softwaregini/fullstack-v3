import {useEffect, useState} from "react";
import SoftwareProduct from "../types/SoftwareProduct";
import softwareProductApi from "../api/softwareProductApi";

function useSoftwareProducts(initialParams: any = {}) {
  const [softwareProducts, setSoftwareProducts] = useState<SoftwareProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async (params?: any) => {
      const data = await softwareProductApi.getSoftwareProducts(params)
      const products = await data.json() as SoftwareProduct[]
      setSoftwareProducts(products)
    }
    fetchProducts(initialParams)
  }, [initialParams])

  return softwareProducts
}

export default useSoftwareProducts