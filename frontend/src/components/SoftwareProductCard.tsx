import {Badge, Card, Typography} from "@mui/material";
import SoftwareProduct from "../types/SoftwareProduct";
import SoftwareProductUpdatesDialog from "./SoftwareProductUpdatesDialog";
import {useEffect, useState} from "react";
import {ItemProps} from "../types/SoftwareProductCard";

const FETCH_UPDATES_INTERVAL =  5000

interface Props<T> {
  softwareProduct: SoftwareProduct;
  itemsFetcherFn: (id: string) => Promise<Response>;
  markAsSeenFn: (id: string) => Promise<Response>;
  children: (items: T[]) => JSX.Element;
}

function SoftwareProductCard<T extends ItemProps>({
  softwareProduct, itemsFetcherFn, markAsSeenFn, children
}: Props<T>) {
  const [openUpdates, setOpenUpdates] = useState(false)
  const [items, setItems] = useState<T[]>([])
  const unseenItemIds = items.filter(item => !item.seen).map(item => item.id);

  useEffect(() => {
    const fetchUpdates = async () => {
      const data = await itemsFetcherFn(softwareProduct.id)
      const updates = await data.json() as T[]
      setItems(updates)
    }
    fetchUpdates()
    const intervalId = setInterval(fetchUpdates, FETCH_UPDATES_INTERVAL)
    return () => { clearInterval(intervalId) }
  }, [softwareProduct.id, itemsFetcherFn])

  const handleClose = async () => {
    setOpenUpdates(false)

    const data = await markAsSeenFn(softwareProduct.id)
    const updates = await data.json() as T[]
    setItems(items.map(prevUpdate => ({...prevUpdate, ...updates.find(update => update.id === prevUpdate.id)})))
  }

  return <>
    <Badge badgeContent={unseenItemIds.length} color="primary">
      <Card
        sx={{flex: 1, cursor: "pointer", p: 2}}
        onClick={() => setOpenUpdates(true)}
      >
          <Typography>{softwareProduct.name}</Typography>
      </Card>
    </Badge>
    <SoftwareProductUpdatesDialog
      softwareProductName={softwareProduct.name}
      open={openUpdates}
      onClose={handleClose}
    >
      {children(items)}
    </SoftwareProductUpdatesDialog>
  </>
}

export default SoftwareProductCard