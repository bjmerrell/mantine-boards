import { ThemeIcon, rem } from "@mantine/core"
import { IconLayoutDashboard } from "@tabler/icons-react"

interface Props {
  size?: number
  /** A theme color; "black" is the dark scale. */
  color?: string
}

/** A neutral mark where the template showed Mantine's logo; swap in your own. */
export function BrandMark({ size = 30, color = "accent" }: Props) {
  return (
    <ThemeIcon
      size={rem(size)}
      radius="xl"
      color={color === "black" ? "dark" : color}
      aria-hidden
    >
      <IconLayoutDashboard
        style={{ width: "60%", height: "60%" }}
        stroke={1.8}
      />
    </ThemeIcon>
  )
}
