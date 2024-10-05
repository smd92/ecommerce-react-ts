import LanguageSwitcher from "./LanguageSwitcher"
import { Typography } from "@material-tailwind/react"

const Header = () => {
  return (
    <div className="flex flex-row w-full justify-between items-center p-4 bg-color-alternative-theme1">
      <Typography className="text-7xl font-bold cursor-pointer text-color-heading-theme1">COCAVEND</Typography>
      <LanguageSwitcher />
    </div>
  )
}

export default Header