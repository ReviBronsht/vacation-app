import {
    ThemeIcon,
    Text,
    useMantineTheme,
  } from '@mantine/core';

  export default function Feature({icon, title, description}) { //display info for each feature
    const theme = useMantineTheme();
    return (
      <div>
        <ThemeIcon variant="light" size={40} radius={40}>
          {icon}
        </ThemeIcon>
        <Text style={{ marginTop: theme.spacing.sm, marginBottom: 7 }}>{title}</Text>
        <Text size="sm" color="dimmed" style={{ lineHeight: 1.6 }}>
         {description}
        </Text>
      </div>
    );
  }