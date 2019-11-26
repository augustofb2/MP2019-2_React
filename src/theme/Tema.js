import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, teal, red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: teal,
    error: red,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
