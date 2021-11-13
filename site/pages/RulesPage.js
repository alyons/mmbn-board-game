import React from 'react';
import {
  Box,
  Typography
} from '@mui/material';

const RulesPage = (props) => {
  return (
    <Box>
      <Typography align='center' variant='h1'>MegaMan Battle Network</Typography>
      <Typography align='center' variant='h2'>The Board Game</Typography>
      <Typography align='center'>by Alexander Lyons</Typography>
      <Typography>
        Can you and your friends save the Internet and the world?
        As skilled Operators, you and your NetNavis will need to battle World3 and their Viruses which are threatening to take over the world.
      </Typography>
      <Typography>
        You and your friends must work together, defeating each Boss Navi you come across and the minions they summon.
        You only have so many turns before the enemy uses their ultimate technique, deleting your partner Navis and taking over the world!
      </Typography>
      <Typography>
        Are you ready to NetBattle for the fate of everyone?
        Jack In! MegaMan.exe, Execute!
      </Typography>
      <Typography variant='h3'>
        Contents
      </Typography>
      <Typography>
        Coming soon...
      </Typography>
      <Typography variant='h3'>
        Overview
      </Typography>
      <Typography>
        In this game, you and your fellow players are Operators, people who use Network Navigators (NetNavis or just Navis for short) to destroy viruses online.
        You must work together to defeat the evil Navis of World3 and their virus.
      </Typography>
      <Typography>
        This is a cooperative game. The players will win or lose together.
      </Typography>
      <Typography>
        The goal is to defeat four Boss Navis and then the Final Boss. The players lose if all of their Navis are reduced to zero health points (HP) or as it is called deleted.
      </Typography>
      <Typography variant='h3'>
        Setup
      </Typography>
      <Typography>
        1. Have each player select a Navi. Distribute the Navi figures and the appropriate battle chip decks (folders).
      </Typography>
      <Typography>
        2. Place the board within easy reach all players. Place each players' Navi on the player side of the board.
      </Typography>
      <Typography>
        3. Choose a starting Boss Navi. Place the boss Navi card near the board, and place the Boss Navi figure on the enemy side of the board in the center. Place the boss action deck near the board in the center.
      </Typography>
      <Typography>
        4. Place the enemy tokens on the board as specified by the Boss Navi. Place the enemy virus cards and the enemy action deck near the board in the center.
      </Typography>
      <Typography>
        5. Have each player shuffle their folder, then draw a hand of 5 battle chips.
      </Typography>
      <Typography>
        6. Begin Play. The player who denounces the use of Dark Chips first gets to start, and play will go clockwise.
      </Typography>
      <Typography variant='h3'>
        Play
      </Typography>
      <Typography>
        Each player does the following on their turn: <br />
        1. Draw Battle Chips until they have 5 in hand. <br />
        2. Take Actions: <br />
          2a. Move one panel. You can do this up to the number of times it allows on your Navi per turn.
          2b. Play a Battle Chip. You can play multiple Battle Chips in a turn under certain conditions!
          2c. After you are finished, perform the clean up step.
        3. Act for the next enemy (Virus or Boss Navi)
          3a. Flip the top card of the appropriate deck, and take the actions listed on the card.
          3b. Move the active enemy indicator to the next enemy card.

        After this is complete, the play passes to the player to their left.
      </Typography>
      <Typography variant='h3'>
        A Turn in Detail
      </Typography>
      <Typography variant='h4'>
        Restocking your Battle Chips.
      </Typography>
      <Typography>
        At the beginning of your turn, you will draw Battle Chip cards until you have five (5) in your hand.
        If your folder runs out of chips, fret not! You simply shuffle your discard pile and flip it back face down.
        Special Action: Before you start drawing, you may discard the remaining Battle Chips and draw a new hand of five (5) battle chips.
        This is a great way to go through your folder, but be careful discarding defensive chips that could save your Navi from deletion!
      </Typography>
      <Typography variant='h4'>
        Taking Actions
      </Typography>
      <Typography>
        On your turn, you may take as many actions as you want within the constraints of your Navi and your Hand.
      </Typography>
    </Box>
  );
};

export default RulesPage;
