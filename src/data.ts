import { Tree } from "./types/types"

const uuid = (): string => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
}

export const mockOrgTreeList: Tree = [
    {
      label: "Liberty Health",
      id: uuid(),
      branches: [
        {
          label: "Pacific Northwest",
          id: uuid(),
          branches: [
            {
              label: "East Portland Clinic",
              id: uuid(),
              branches: [],
            },
            {
              label: "Beaverton / Tigard",
              id: uuid(),
              branches: []
            },
            {
              label: "Lake Oswego Regency",
              id: uuid(),
              branches: []
            }
          ]
        },
        {
          label: "Alaska",
          id: uuid(),
          branches: []
        }
      ]
    },
    {
      label: "Northstar Alliance",
      id: uuid(),
      branches: [
        {
          label: "Chicago",
          id: uuid(),
          branches: [
            {
              label: "Southwest Region",
              id: uuid(),
              branches: [
                {
                  label: "Desplains",
                  id: uuid(),
                  branches: []
                },
                {
                  label: "Oak Lawn",
                  id: uuid(),
                  branches: []
                }
              ]
            },
            {
              label: "Northwest Region",
              id: uuid(),
              branches: [
                {
                  label: "East Morland",
                  id: uuid(),
                  branches: []
                },
              ]
            }
          ]
        },
        {
          label: "New York",
          id: uuid(),
          branches: [
            {
              label: "Manhattan",
              id: uuid(),
              branches: []
            },
            {
              label: "Queens",
              id: uuid(),
              branches: []
            },
            {
              label: "5372 Arlington Heights",
              id: uuid(),
              branches: []
            },
            {
              label: "The Earlmore Institute of Health",
              id: uuid(),
              branches: []
            },
          ]
        }
      ]
    }
  ]
  