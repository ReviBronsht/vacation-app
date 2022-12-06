import {
    Title,
    Container,
    SimpleGrid,
    createStyles,
  } from '@mantine/core';
import Feature from './feature';
 
  
 const featureData = [
    {
      icon: '🗺️',
      title: 'Add new trips',
      description: 'add a new trip'
    },
    {
      icon: '🌎',
      title: 'View your trips',
      description: 'view and search all your trips'
    },
    {
      icon: '☁️',
      title: 'Manage your trip',
      description: 'edit or delete each trip'
    }
  ];
  

  
  const useStyles = createStyles((theme) => ({ //create styles allows to write css in js file
    wrapper: {
      paddingTop: theme.spacing.xl ,
      paddingBottom: theme.spacing.xl,
    },
  
    title: {
      fontWeight: 900,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: 28,
      },
    }
  }));
  
  export default function FeaturesGrid({data = featureData}) {
    const { classes, theme } = useStyles();
  
    return ( //using mantine components, shows site features by mapping over feature data and displaying each in feature component
      <Container className={classes.wrapper}>
        <Title className={classes.title}>trip manager allows you to...</Title>
  
        <SimpleGrid
          mt={60}
          cols={3}
          spacing={theme.spacing.xl * 2}
          breakpoints={[
            { maxWidth: 980, cols: 2, spacing: 'xl' },
            { maxWidth: 755, cols: 1, spacing: 'xl' },
          ]}
        >
          {data.map((feature, index) => 
          <Feature {...feature} key={index} />
          )}
        </SimpleGrid>
      </Container>
    );
  }