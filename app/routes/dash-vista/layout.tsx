import { MetaFunction } from "@remix-run/node"
import { Outlet } from "@remix-run/react"
import { dashboards } from "~/assets/dashboards"
import DetailLayout from "~/layouts/DetailLayout"
import App from "./layouts/App"

const dashboard = dashboards.find(
  (dashboard) => dashboard.title === "DashVista"
)!

export const meta: MetaFunction = () => {
  return [
    { title: dashboard.title },
    {
      name: dashboard.title,
      content: dashboard.description,
    },
  ]
}

export default function DashVita() {
  return (
    <DetailLayout dashboard={dashboard}>
      <App>
        <Outlet />
      </App>
    </DetailLayout>
  )
}
