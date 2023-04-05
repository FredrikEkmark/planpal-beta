import * as React from "react"
import Box from "@mui/material/Box"
import BottomNavigation from "@mui/material/BottomNavigation"
import BottomNavigationAction from "@mui/material/BottomNavigationAction"
import Paper from "@mui/material/Paper"
import HomeIcon from "@mui/icons-material/Home"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Box sx={{ width: 300 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue)
          }}
        >
          <BottomNavigationAction label="" href="/" icon={<HomeIcon />} />
          <BottomNavigationAction
            label=""
            href="/calander"
            icon={<CalendarMonthIcon />}
          />
          <BottomNavigationAction
            label=""
            href="/taskpage"
            icon={<CheckCircleIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}
