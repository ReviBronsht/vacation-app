import { createStyles, Anchor, Group, ActionIcon } from '@mantine/core';

const useStyles = createStyles((theme) => ({
    footer: {
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },
  
    inner: {
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
  
    },
  
    links: {
      [theme.fn.smallerThan('sm')]: {
        marginTop: theme.spacing.lg,
        marginBottom: theme.spacing.sm,
      },
    },
  }));
  
export default function Footer() {
    const { classes } = useStyles();
    const links = [{
        link:"/",
        label:"homepage"
    },
{
    link:"/addVacation",
    label: "add vacation"
}]

    const items = links.map((link) => (
      <Anchor
        color="dimmed"
        key={link.label}
        href={link.link}
        sx={{ lineHeight: 1 }}
        size="sm"
      >
        {link.label}
      </Anchor>
    ));
  return (
     <div className={classes.footer}>
      <div className={classes.inner}>

        <Group className={classes.links}>{items}</Group>

      </div>
    </div>
  )
}
