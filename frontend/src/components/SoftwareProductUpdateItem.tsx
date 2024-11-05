import SoftwareProductUpdate from "../types/SoftwareProductUpdate";
import {Badge, Card, Typography} from "@mui/material";

export interface Props {
  softwareProductUpdate: SoftwareProductUpdate
}

function SoftwareProductUpdateItem({softwareProductUpdate}: Props) {
  return <Badge
      badgeContent=""
      color="primary"
      invisible={softwareProductUpdate.seen}
      aria-label={`${softwareProductUpdate.update} ${softwareProductUpdate.seen ? 'seen': 'unseen'}`}
    >
    <Card sx={{flex: 1, p: 1}}>
      <Typography>{softwareProductUpdate.update}</Typography>
    </Card>
  </Badge>
}

export default SoftwareProductUpdateItem