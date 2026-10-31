import {
  Anchor,
  Badge,
  Box,
  Breadcrumbs,
  Flex,
  Group,
  Stack,
  Text,
} from "@mantine/core"
import { Dashboard } from "~/assets/dashboards"
import classes from "./styles/DetailLayout.module.css"

interface Props {
  children: React.ReactNode
  dashboard: Dashboard
}

export default function DetailLayout({ children, dashboard }: Props) {
  return (
    <Stack className={classes.root} gap={50}>
      <Flex direction="column" align="start" gap={10}>
        <Breadcrumbs separatorMargin="sm">
          <Anchor className={classes.breadcrumbs} size="sm" href="/">
            Dashboards
          </Anchor>
          <Anchor
            className={classes.breadcrumbs}
            href={dashboard.link}
            size="sm"
          >
            {dashboard.title}
          </Anchor>
        </Breadcrumbs>
        <Text className={classes.title}>{dashboard.title}</Text>
        <Text className={classes.description}>{dashboard.description}</Text>
      </Flex>
      <Flex direction="column" align="start" gap="md">
        <Group w="100%" align="center" justify="space-between">
          <Flex align="center" gap="md">
            <Text className={classes.subTitle}>{dashboard.subTitle}</Text>
            <Badge className={classes.badge} variant="light">
              New
            </Badge>
          </Flex>
        </Group>

        <Box className={classes.snippetContainer}>{children}</Box>
      </Flex>
    </Stack>
  )
}
