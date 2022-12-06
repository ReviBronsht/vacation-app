import { createStyles, Header, Container, Anchor, Group , ThemeIcon} from '@mantine/core';

const useStyles = createStyles((theme) => ({
    inner: {
      height: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    
    icon: {
        marginTop:"7vh"
    },
  
    links: {
      paddingTop: theme.spacing.lg,
      height: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
  
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  
    mainLinks: {
      marginRight: -theme.spacing.sm,
    },
  
    mainLink: {
      textTransform: 'uppercase',
      fontSize: 13,
      padding: `7px ${theme.spacing.sm}px`,
      fontWeight: 700,
      borderBottom: '2px solid',
      transition: 'border-color 100ms ease, color 100ms ease',   
      color:  theme.black,
      borderBottomColor: theme.colors[theme.primaryColor][6],

      '&:hover':{
        textDecoration:"none"
      }
    },
  }));
  

export default function HeaderComponent() {
    const { classes, cx } = useStyles();
    const mainLinks = [{
        link:"/",
        label:"homepage"
    },
{
    link:"/addVacation",
    label: "add vacation"
}]

    const mainItems = mainLinks.map((item) => (
        <Anchor
          href={item.link}
          key={item.label}
          className={cx(classes.mainLink)}
          
        >
          {item.label}
        </Anchor>
      ));
      
  return (
    <div>
      <Header height={60} >
      <Container className={classes.inner}>
      <ThemeIcon variant="light" size={40} radius={40} className={classes.icon}>
      🛫
        </ThemeIcon>
        <div className={classes.links}>
          <Group spacing={0} position="right" className={classes.mainLinks}>
           {mainItems}
          </Group>
        </div>
      </Container>
    </Header>
    </div>
  )
}
