import {Box, Container, Typography} from "@mui/material";
import softwareProductApi from "../api/softwareProductApi";
import SoftwareProductCard from "./SoftwareProductCard";
import SoftwareProductUpdateItem from "./SoftwareProductUpdateItem";
import { ItemProps } from "../types/SoftwareProductCard";
import useSoftwareProducts from "../hooks/useSoftwareProducts";

function SoftwareProductSection() {
  const softwareProducts = useSoftwareProducts()

  return <Container sx={{py: 8}}>
    <Typography variant={"h4"} component={"h1"} mb={2}>Products</Typography>
    <Box display={"grid"} gridTemplateColumns={"repeat(3, 1fr)"} gap={2}>
      {softwareProducts.map(softwareProduct =>
        <SoftwareProductCard
          key={softwareProduct.id}
          softwareProduct={softwareProduct}
          itemsFetcherFn={softwareProductApi.getSoftwareProductUpdates}
          markAsSeenFn={softwareProductApi.postAllSoftwareProductUpdatesSeen}
        >
          {
            (items: ItemProps[]) => (
              <Box mt={2} display={"flex"} flexDirection={"column"} gap={3}>
                {items.map((item) => <div key={item.id}>
                  <SoftwareProductUpdateItem softwareProductUpdate={item}/>
                </div>)}
              </Box>
            )
          }
        </SoftwareProductCard>
      )}
    </Box>
  </Container>
}

export default SoftwareProductSection;