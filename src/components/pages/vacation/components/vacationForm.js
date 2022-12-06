import {  TextInput, NumberInput, createStyles, Container, SimpleGrid, Button} from '@mantine/core';
import { RangeCalendar } from '@mantine/dates';
import DropzoneButton from './dropzone';

const useStyles = createStyles((theme) => ({ //create styles allows to write css in js file
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 25,

  },


  label: {
    position:"absolute",
    pointerEvents: 'none',
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },

  txtinputs: {
    textAlign:"left"
  },

  price: {
width: '40%',
marginLeft: '50%'
  },

  dateslabel: {
    fontWeight: 500,
    marginLeft: "22%"
  },


  controls: {
    marginTop: theme.spacing.xl * 1.5,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    '@media (max-width: 520px)': {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    '@media (max-width: 520px)': {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'red',

    '&:hover': {
      backgroundColor: 'darkred !important',
    },
  },

}));

export default function VacationForm({cityName, setCityName, country, setCountry, price, setPrice, dates, setDates, setImageFile, onSave, disabled,setDisabled, page, doDelete}) {
    const { classes, cx } = useStyles();

  return ( //form that uses mantine components to set values on change, will be disabled after successful save/on view mode. uses variables to show correct form actions
    <form >
    <Container className={classes.txtinputs}>
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
    
    <TextInput 
      label="Country" 
      placeholder="enter a country..." 
      classNames={classes} 
      value={country}
      onChange={(e) => setCountry(e.target.value)}
      disabled={disabled}
      />

    <NumberInput
        label="Price"
        icon="$"
        min={0}
        classNames={classes}
        className={classes.price}
        value={price}
        onChange={(e) => setPrice(e)}
        disabled={disabled}
      />

    <TextInput 
      label="City" 
      placeholder="enter a city..." 
      classNames={classes} 
      value={cityName}
      onChange={(e) => setCityName(e.target.value)}
      disabled={disabled}
      />

      </SimpleGrid>
      </Container>

      <br/>

      <Container className={classes.txtinputs}>
    <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
    
    <span >
    <span className={classes.dateslabel} >Dates</span>
    {disabled === "disabled" ? 
    <RangeCalendar value={dates} />
:<RangeCalendar value={dates} onChange={setDates} />}
    </span>
    
    <DropzoneButton setImageFile={setImageFile} disabled={disabled}/>
      </SimpleGrid>
      </Container>

      <div className={classes.controls}>
          {page === "add" ?<Button className={classes.control}  size="lg" onClick={() => onSave("post")} disabled={disabled}>
            Add trip
          </Button> : 
          <span>
          {disabled === "disabled" ?
          <Button className={classes.control}  size="lg" onClick={() => setDisabled("")} >
          Edit trip
        </Button>
        :
        <Button className={classes.control}  size="lg" onClick={() => onSave("put")} >
          Save trip
        </Button>
        }
        <Button className={cx(classes.control, classes.secondaryControl)} size="lg" onClick={doDelete}>
            Delete trip
          </Button>
        </span>
        }
        </div>
    </form>
  )
}
