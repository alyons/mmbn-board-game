import React from 'react';
import Markdown from 'markdown-to-jsx';
import {
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';

const TextListItem = ({ children, ...props }) => (
  <ListItem {...props}>
    <ListItemText primary={children} />
  </ListItem>
);

const muiOptions = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        variant: 'h1'
      }
    },
    h2: {
      component: Typography,
      props: {
        variant: 'h2'
      }
    },
    h3: {
      component: Typography,
      props: {
        variant: 'h3'
      }
    },
    h4: {
      component: Typography,
      props: {
        variant: 'h4'
      }
    },
    h5: {
      component: Typography,
      props: {
        variant: 'h5'
      }
    },
    h6: {
      component: Typography,
      props: {
        variant: 'h6'
      }
    },
    p: {
      component: Typography
    },
    li: {
      component: TextListItem
    },
    ul: {
      component: List
    }
  }
};

const MuiMarkdown = (props) => {
  return <Markdown {...props} options={muiOptions} />;
};

export default MuiMarkdown;
