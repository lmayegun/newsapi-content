import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const FormDialog = props => {
  const {btnTitle, color, variant, style, closeTitle} = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={style}>
      <Button variant={variant} color={color} onClick={handleClickOpen}>
        {btnTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"lg"}
      >
        <DialogTitle> Title </DialogTitle>
        <DialogContent>
          {props.children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {closeTitle ? closeTitle : 'Cancel' }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default React.memo(FormDialog);
