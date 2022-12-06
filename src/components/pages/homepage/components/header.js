import { Title, Text, Container, Button, Overlay, createStyles } from '@mantine/core';
import {HashLink as Link } from "react-router-hash-link";

const useStyles = createStyles((theme) => ({ //create styles allows to write css in js file
  wrapper: {
    position: 'relative',
    paddingTop: 100,
    paddingBottom: 100,
    marginLeft: 50,
    marginRight:50,
    backgroundImage:
      `url(${process.env.PUBLIC_URL}/img/header1.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    '@media (max-width: 520px)': {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: theme.colors[theme.primaryColor][4],
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    '@media (max-width: 520px)': {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
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
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}));

export default function Header() {
  const { classes, cx } = useStyles();

  return ( //using mantine components, show title and subtitle of site, as well as buttons to navigate to vacations or add vacation
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Welcome to your{' '}
          <Text component="span" inherit className={classes.highlight}>
            travel planner🛫
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            view and manage your travel plans
          </Text>
        </Container>

        <div className={classes.controls}>
        <Link  to="/#trips">
          <Button className={classes.control} variant="white" size="lg">
            View your trips
          </Button>
          </Link>
          <Link  to="/addVacation">
          <Button className={cx(classes.control, classes.secondaryControl)} size="lg">
            Add a new trip
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}