import { Typography } from "@material-tailwind/react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full bg-color-button-primary-theme1 p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-color-button-primary-theme1 text-center md:justify-between">
        <Typography className="text-3xl text-color-tertiary-theme1">
          COCAVEND
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-color-tertiary-theme1 hover:text-color-secondary-theme1 focus:text-color-secondary-theme1"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-color-tertiary-theme1 hover:text-color-secondary-theme1 focus:text-color-secondary-theme1"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-color-tertiary-theme1 hover:text-color-secondary-theme1 focus:text-color-secondary-theme1"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors text-color-tertiary-theme1 hover:text-color-secondary-theme1 focus:text-color-secondary-theme1"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography className="text-center font-normal text-color-tertiary-theme1">
        &copy; {currentYear} COCAVEND
      </Typography>
    </footer>
  );
};

export default Footer;
