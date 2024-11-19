import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const StyledButton = styled(Button)({
  bgcolor: '#0096FF',
  color: '#ffffff',
  textTransform: 'none',
  fontSize: '15px',
  fontWeight: 500,
  width: '100%',
  height: '40px',
});

const CustomButton = ({ label, additionalStyle, disabled, onClick }) => {
  return (
    <StyledButton
      variant="contained"
      sx={{
        bgcolor: '#0096FF',
        color: '#ffffff',
        textTransform: 'none',
        fontSize: '15px',
        fontWeight: 500,
        width: '100%',
        height: '40px',
      }}
      style={additionalStyle ? additionalStyle : {}}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};
export default CustomButton;
