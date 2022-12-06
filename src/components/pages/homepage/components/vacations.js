import { Title, createStyles, SimpleGrid, Container, TextInput} from '@mantine/core';
import { useState } from 'react';
import Vacation from './vacation';

const useStyles = createStyles(() => ({ //create styles allows to write css in js file

  title: {
    fontWeight: 600,
    textAlign: "center"
  },

}));

export default function Vacations({trips}) {
  const { classes } = useStyles();

  const [filteredData, setFilteredData] = useState(trips);

  const handleFilter = (e) => { //handle filter allows user to search for trips by city or country using filter function and setting data state to filter result
    const searchWord = e.target.value
    if (searchWord === "") {
      setFilteredData(trips);
    }
    else {
      const newFilter = trips.filter((value) => {
        let cityCountry = value.cityName + value.country;
        return cityCountry.toLowerCase().includes(searchWord.toLowerCase());
      })
      setFilteredData(newFilter);
    }
  }


  return ( //using mantine components, shows trips by mapping over trip data and displaying each in vacation component, using filter allows user to search for trips
    <Container py="xl" id="trips">
        <Title  className={classes.title}>My trips</Title>

        <br/>

        <TextInput
      icon={"🔍"}
      radius="xl"
      size="md"
      placeholder="Search trips..."
      rightSectionWidth={42}
      onChange={handleFilter}
    />
    
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {filteredData.map((trip) => (
    <Vacation {...trip} key={trip.id} />
  ))}
      </SimpleGrid>
    </Container>
  );
}