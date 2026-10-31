import { AppShell, Flex, Group, Text } from "@mantine/core"
import { Link } from "@remix-run/react"
import { BrandMark } from "~/components/BrandMark"
import ThemeSwitch from "~/components/ThemeSwitch"
import SearchControl from "../components/SearchControl"
import classes from "./styles/AppLayout.module.css"

export default function AppLayout({ children }: Children) {
  return (
    <AppShell
      header={{
        height: "var(--app-header-height)",
        offset: false,
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group
          className={classes.header}
          w="100%"
          h="100%"
          justify="space-between"
        >
          <Link to="/">
            <Flex flex={1} ff="Greycliff" gap="sm" align="center">
              <BrandMark size={30} color="black" />
              <Text visibleFrom="md" className={classes.logo_title} fz={24}>
                Mantine Boards
              </Text>
              <Text hiddenFrom="md" className={classes.logo_title} fz={24}>
                Dashboard
              </Text>
            </Flex>
          </Link>
          <Flex align="center" gap="sm">
            <SearchControl />
            <ThemeSwitch />
          </Flex>
        </Group>
      </AppShell.Header>

      <AppShell.Main px={0} className={classes.main}>
        {children}
      </AppShell.Main>
    </AppShell>
  )
}
