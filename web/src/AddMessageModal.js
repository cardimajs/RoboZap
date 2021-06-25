/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
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
import Grid from '@material-ui/core/Grid';


const AddMessageModal = ({open, onClose, append}) => {
  return (
    <>
    <Dialog 
      onClose={onClose} 
      aria-labelledby="customized-dialog-title" 
      open={open}
      maxWidth='sm'
      fullWidth
    >
        <DialogTitle id="customized-dialog-title" >
          Adicionar Mensagem
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={12} >
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
            <MenuItem value="text">Texto</MenuItem>
            <MenuItem value="sticker">Figurinha</MenuItem>
            <MenuItem value="stickerGif">Figurinha Gif</MenuItem>
            <MenuItem value="location">Localização</MenuItem>
            <MenuItem value="tts">TTS</MenuItem>
            <MenuItem value="audio">Audio</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          label="Mensagem"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="outlined"
          fullWidth
        />
        </Grid>
        </Grid>
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose}autoFocus color="secondary" variant="contained">
            Cancelar
          </Button>
          <Button 
            autoFocus 
            color="primary" 
            variant="contained" 
            onClick={() => {
              append({type:'text', data: "texto adssda"})
              onClose();
            }}
          >
            Adicionar
          </Button>   
        </DialogActions>
      </Dialog>
    </>
  );
}


export default AddMessageModal;