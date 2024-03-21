import React from "react";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { relaxingActivitiesList } from "./Constants";

const ActivityCard = ({ obj }) => {
  return (
    <Card className="activityCard bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105 mt-16 mb-4">
      <div className="h-60 sm:h-80 bg-gray-600 overflow-hidden">
        <CardMedia
          component="img"
          alt="Activity Image"
          image={obj.image}
          className="object-cover h-full w-full transition duration-300 transform hover:scale-110"
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="title">
          {obj.title}
        </Typography>
        <Typography variant="body2" className="content">
          {obj.content}
        </Typography>
      </CardContent>
      <CardActions className="justify-center">
        <Button size="small" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300 transform hover:scale-105">
          <Link
            href={obj.link}
            underline="none"
            target={
              obj.key === "exercise" || obj.key === "meditation" ? "_self" : "_blank"
            }
            rel="noopener"
            className="block w-full h-full"
          >
            Discover
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

const RelaxingActivities = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="stretch"
      spacing={3}
    >
      {relaxingActivitiesList.map((obj, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <ActivityCard obj={obj} />
        </Grid>
      ))}
    </Grid>
  );
};

export default RelaxingActivities;
