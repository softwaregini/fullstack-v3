const baseUrl = "http://localhost:8080"
const softwareProductApi = {
  getSoftwareProducts: (params?: any) => fetch(`${baseUrl}/products`, params),
  getSoftwareProductUpdates: (softwareProductId: string) => fetch(`${baseUrl}/products/${softwareProductId}`),
  postSoftwareProductUpdatesSeen: (softwareProductUpdateIds: string[]) => fetch(`${baseUrl}/products/softwareProductUpdatesSeen`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(softwareProductUpdateIds)
  }),
  postAllSoftwareProductUpdatesSeen: (softwareProductId: string) => fetch(`${baseUrl}/products/allSoftwareProductUpdatesSeen`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(softwareProductId)
  }),
}

export default softwareProductApi