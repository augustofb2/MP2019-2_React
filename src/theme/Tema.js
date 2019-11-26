import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, red, blueGrey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey,
    error: red,
  },
  status: {
    danger: 'orange',
  },
});

export default theme;
