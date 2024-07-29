import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Typography,
    Button,
  } from "@material-tailwind/react";
  
  export function SimpleCard({ link, name, desc }) {
    return (
      <Card className="mt-6 w-96 overflow-hidden xsm:w-[295px] sm:w-[320px] md:w-[300px] lg:w-96">
        <CardHeader color="blue-gray" className="relative h-56 flex justify-center items-center">
          <img
            src={link}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{desc}</Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    );
  }
  