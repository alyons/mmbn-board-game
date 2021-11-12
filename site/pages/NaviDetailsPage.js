import React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';

import { LoremIpsum } from 'lorem-ipsum';

import ArrowBack from '@mui/icons-material/ArrowBack';
import BattleChip from '../components/BattleChip';
import megamanFolder from '../assets/data/battleChips/megaman';
import testImg from '../assets/images/createcard.jpg';
import megamanImage from '../assets/images/megaman.exe.webp';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const NaviDetails = (props) => {
  const { id } = useParams();

  // Get the Navi Data from the appropriate place

  // Get the Battle Chip deck from the appropriate place
  console.log(megamanFolder);

  // return (
  //   <Box sx={{ position: 'relative' }}>
  //     <Button startIcon={<ArrowBack />} component={RouterLink} to='/navis'>Back to Net Navis</Button>
  //     <Grid container>
  //       {megamanFolder.map((chip, i) => (
  //         <Grid item key={`battle-chip-${i}`} xs={12} sm={6} lg={4} xl={2}>
  //           <BattleChip {...chip}  />
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </Box>
  // );

  return (
    <Box sx={{ position: 'relative', margin: '8px' }}>
      <Typography variant='h3' align='center'>MegaMan.EXE</Typography>
      <Box component='img' src={megamanImage} alt='MegaMan.EXE' sx={{ width: '100%' }}/>
      <Typography>Description</Typography>
      <Typography>{lorem.generateParagraphs(1)}</Typography>
      <Typography>Strategy</Typography>
      <Typography>{lorem.generateParagraphs(1)}</Typography>
      <Typography>Starting Folder</Typography>
      <List>
        {megamanFolder.map((chip, i) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar variant='square' alt={chip.name} src={chip.image} />
            </ListItemAvatar>
            <ListItemText
              primary={chip.name}
              secondary={chip.code} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NaviDetails;
