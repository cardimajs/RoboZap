import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const AddMessageModal = ({open, onClose}) => {
  return (
    <>
    <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" >
          Adicionar Mensagem
        </DialogTitle>
        <DialogContent dividers>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="demo-simple-select-outlined-label">Tipo</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            // value={age}
            // onChange={handleChange}
            label="Age"
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Texto</MenuItem>
            <MenuItem value={20}>Figurinha</MenuItem>
            <MenuItem value={30}>Figurinha Gif</MenuItem>
            <MenuItem value={30}>Localização</MenuItem>
            <MenuItem value={30}>TTS</MenuItem>
            <MenuItem value={30}>Audio</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-multiline-static"
          label="Mensagem"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          fullWidth
        />

        </DialogContent>
        <DialogActions>
        <Button onClick={onClose}autoFocus color="secondary" variant="contained">
            Cancelar
          </Button>
          <Button autoFocus color="primary" variant="contained">
            Adicionar
          </Button>   
        </DialogActions>
      </Dialog>
    </>
  );
}


export default AddMessageModal;