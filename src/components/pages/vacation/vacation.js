import { createStyles, Overlay, Title, Text } from '@mantine/core';
import VacationForm from './components/vacationForm';
import { useState, useEffect } from 'react';
import axios from "axios";

export default function Vacation() { //vacation page allows user to view, edit or delete their vacation when used in view mode, and to add a vacation when used in add vacation mode
  const [cityName, setCityName] = useState(''); //vacation variables
  const [country, setCountry] = useState('');
  const [price, setPrice] = useState(0);
  const [dates, setDates] = useState('');
  const [imageFile, setImageFile] = useState();
  const [err, setErr] = useState(""); //variables to show errors, success message, and disable the form
  const [success, setSuccess] = useState("");
  const [disabled, setDisabled] = useState("");

  var currPath = window.location.href; // using location.href to see which page is the user on and set id if necessary
  var page;
  if (currPath.includes("add")) {
    page = "add";
  } else {
    page = "view";
    var temp = currPath.split("/")
    var id = temp[temp.length-1]
  }

const useStyles = createStyles((theme) => ({ //create styles allows to write css in js file
  wrapper: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundImage:
     imageFile ? `url(${imageFile.preview})` : `url(${process.env.PUBLIC_URL}/img/vacation-no-img.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    },

    inner: {
      position: 'absolute',
      top: '5%',
      width: '75%',
      left: '12.5%',
      height: '90vh',
      borderRadius: '22px',
      zIndex: 1,
    backgroundColor: theme.white,
    textAlign: 'center',
    },

    title: {
      fontWeight: 800,
      fontSize: 25,
      letterSpacing: -1,
      paddingTop: theme.spacing.xs,
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      marginBottom: theme.spacing.xs,
      textAlign: 'center',
      },

      err: {
        color: "red"
      },

      success : {
        color: "lime"
      }

  }));


  const { classes} = useStyles();
  
  useEffect(() => {
    if (page === "view") { //if page is view, gets the vacation data and sets it as the vacation variables
    axios.get(`https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations/${id}`)
        .then((res) => {
            console.log(res.data)
            setCityName(res.data.cityName);
            setCountry(res.data.country);
            setPrice(Number(res.data.vacationprice));
            if (res.data.dates) { setDates([
              new Date(res.data.dates[0]),
              new Date(res.data.dates[1]),
            ]); }
            if (res.data.image) {setImageFile({preview:res.data.image})};
            setDisabled("disabled");
        })
      }
}, [])

  function onSave (func) { //function to either update or add a vacation, will check for errors before using func paramater to send correct axios request
    var currErr = "";

    if (!cityName) {
      currErr = currErr + " enter city. ";
    }
    if (!country) {
      currErr = currErr + " enter country. ";
    }

    if (currErr === "") {
      setErr("");
      setSuccess("success");
      setDisabled("disabled");
      console.log(cityName,country,price);
      console.log(dates);
      console.log(imageFile);

      var params = { //adding params as necessary
        "cityName":cityName,
        "country":country,
        "vacationprice":price
            }
          
          if (dates && dates !== '') {
            params.dates = dates
          }

          if (imageFile) {
            params.image = imageFile.base64
          }

          var route;
      if(func === "post") {
        route = `https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations`;
        params.createdAt = new Date()
        axios.post(route, params)
      }
      else {
        route = `https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations/${id}`
        axios.put(route, params)
      }

      
    }
    else {
      setErr(currErr);
    }
  }

  function doDelete() { //function to delete a vacation if user confirms
    if (window.confirm("Do you want to delete this vacation?") === true) {
    axios.delete(`https://6388b351d94a7e5040a45fdf.mockapi.io/api/vacations/${id}`)
    .then(() => {
      window.location.href = "/"
    });
  }
  }

  return ( //displays title, image as background, vacationform and success/error messages
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <div className={classes.inner}>

      <Title className={classes.title}>
          My Vacation
        </Title>
          {err !== '' ? 
          <Text component="span" className={classes.err}>{err} </Text> 
          : ""}
          {success !== '' ? 
          <Text component="span" className={classes.success}>{success} </Text> 
          : ""}
          <br/>
          <VacationForm 
          cityName={cityName}
          setCityName={setCityName}
          country={country}
          setCountry={setCountry}
          price={price}
          setPrice={setPrice}
          dates={dates}
          setDates={setDates}
          setImageFile={setImageFile}
          disabled={disabled}
          setDisabled={setDisabled}
          onSave={onSave}
          doDelete={doDelete}
          page={page}
          />
      </div>
    </div>
  )
}
