import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProductData } from "../types";
import { useTranslation } from "react-i18next";

const ProductCard = (productData: ProductData) => {
  const { t } = useTranslation();

  // Bedingung prüfen, ob der Lagerbestand 0 ist oder weniger als 3 vorhanden sind
  const isOutOfStock = productData.inStockCount === 0;
  const isLowStock =
    productData.inStockCount > 0 && productData.inStockCount <= 3;

  return (
    <div className="relative w-65 flex flex-col">
      {/* Grünes Banner bei niedrigem Lagerbestand anzeigen */}
      {isLowStock && (
        <Typography className="absolute top-0 left-0 w-full bg-color-button-primary-theme1 text-color-primary-theme1 px-4 py-2 text-center font-bold z-10 rounded-t-lg">
          Nur noch {productData.inStockCount} Stück verfügbar!
        </Typography>
      )}

      {/* Card wird ausgegraut, wenn Lagerbestand 0 ist */}
      <Card
        className={`w-65 bg-color-theme1 flex flex-col justify-between h-full ${
          isOutOfStock ? "opacity-50 grayscale" : ""
        }`}
      >
        <CardHeader
          shadow={false}
          floated={false}
          className="relative z-0 rounded-t-lg"
          // Festlegen der maximalen Höhe für das Bild, um Konsistenz zu gewährleisten
        >
          <img
            src={process.env.PUBLIC_URL + productData.imgMain}
            alt="card-image"
            className="max-h-48 w-full object-contain rounded-t-lg"
          />
        </CardHeader>
        <CardBody className="flex-grow">
          <div className="mb-2 flex items-center justify-between">
            <Typography className={`font-medium text-color-primary-theme1`}>
              {productData.name}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              €{productData.price.toFixed(2)}
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={true}
            fullWidth={true}
            disabled={isOutOfStock} // Button deaktivieren, wenn der Artikel ausverkauft ist
            className={`shadow-none bg-color-button-primary-theme1 text-color-tertiary-theme1 hover:shadow-none hover:bg-color-button-hover-theme1`}
          >
            {t("choose")}
          </Button>
        </CardFooter>
      </Card>

      {/* Mittiges rotes Banner wird angezeigt, wenn Lagerbestand 0 */}
      {isOutOfStock && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
          <Typography className="w-full bg-red-500 text-white px-4 py-2 text-center font-bold">
            Ausverkauft
          </Typography>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
