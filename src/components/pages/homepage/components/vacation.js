import { createStyles, Card, Image, Text, AspectRatio} from '@mantine/core';

const useStyles = createStyles((theme) => ({ //create styles allows to write css in js file
    card: {
      transition: 'transform 150ms ease, box-shadow 150ms ease',
  
      '&:hover': {
        transform: 'scale(1.01)',
        boxShadow: theme.shadows.md,
      },
    },
  
    title: {
      fontWeight: 600,
      textAlign: "center"
    },
    
  
  }));

export default function Vacation({id, cityName, country,image}) { //display info for each trip and link to its page
    const { classes } = useStyles();

  return (
    <Card p="md" radius="md" component="a" href={`vacation/${id}`} className={classes.card}>

      <AspectRatio ratio={1920 / 1080}>
        <Image src={image ? image : `${process.env.PUBLIC_URL}/img/vacation-no-img.jpg`} />
      </AspectRatio>
      
      <Text className={classes.title} mt={5}>
        {cityName}, {country}
      </Text>
 
    </Card>
  )
}
