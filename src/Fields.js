import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
  },
});

const ranges = [
  {
    value: 'Y',
    label: 'Yes',
  },
  {
    value: 'N',
    label: 'No',
  },

];

const time = [

    {
    value: 'AM',
    label: 'AM',
  },
  {
    value: 'PM',
    label: 'PM',
  },

]

const vehicles = [


    {
    value: 'L',
    label: 'Light',
  },
  {
    value: 'H',
    label: 'Heavy',
  },

    {
    value: 'M',
    label: 'Multiple Heavy',
  },

]


const time1 = [

    {
    value: '1',
    label: '1',
  },
  {
    value: '2',
    label: '2',
  },

    {
    value: '3',
    label: '3',
  },
  {
    value: '4',
    label: '4',
  },

    {
    value: '5',
    label: '5',
  },
  {
    value: '6',
    label: '6',
  },

    {
    value: '7',
    label: '7',
  },
  {
    value: '8',
    label: '8',
  },

    {
    value: '9',
    label: '9',
  },

    {
    value: '10',
    label: '10',
  },
  {
    value: '11',
    label: '11',
  },

    {
    value: '12',
    label: '12',
  }

]


class ComposedTextField extends React.Component {



  render() {
    const { classes, handleEditChange, onSubmission, highway: { Name1, VehicleType, num, transponder, Time, hour } } = this.props;

    return (
      <div className={styles.formControl}>

          Highway Information:

          <br/>


          <TextField


        id="outlined-number"
        label="Km"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        value={num}
        onChange={handleEditChange("num")}

            />


          <br/>
          <br/>

           <TextField
        select
        label="Vehicle"
        value={VehicleType}
        onChange={handleEditChange("VehicleType")}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      >
        {vehicles.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>


            <br/>

          <br/>

          <TextField
        select
        label="Transponder"
        value={transponder}
        onChange={handleEditChange("transponder")}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      >
        {ranges.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
        <br/>

          <div style={{flex: 1, marginTop:30}}>

            Time of Day:

                <br/>
                <br/>

               <TextField
        select
        label="AM/PM"
        value={Time}
        onChange={handleEditChange("Time")}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      >
        {time.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

              <br/>
              <br/>

              <TextField
        select
        label="Time"
        value={hour}
        onChange={handleEditChange("hour")}
        InputProps={{
          startAdornment: <InputAdornment position="start"></InputAdornment>,
        }}
      >
        {time1.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>



          </div>
            <div style={{flex: 1, marginTop:40, marginLeft:380}}>
          <Button variant="contained" color="primary" className={classes.button} onClick={onSubmission}>
        Calculate
      </Button>
            </div>

      </div>


    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);