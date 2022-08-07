import React from 'react';
import { v4 } from 'uuid';
import Modal from '../Modal/Modal';
import { Input } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as yup from 'yup';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ModalAddProduct = ({ onCloseModal }) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required('Required'),
    amount: yup.number('Enter your amount').required('Amount is required'),
    price: yup.number('Enter your amount').required('Amount is required'),
    description: yup.string(),
    img: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      amount: '',
      price: '',
      description: '',
      img: '',
      id: v4(),
    },

    validationSchema: validationSchema,
    onSubmit: async values => {
      const currentValue = {
        ...values,
      };
      onCloseModal();
      console.log(values);
    },
  });

  const { values, handleSubmit, handleChange } = formik;

  const theme = createTheme({
    palette: {
      primary: {
        main: '#24CCA7',
        contrastText: '#fff',
      },
      neutral: {
        main: '#fff',
        contrastText: '#4A56E2',
      },
    },
  });

  return (
    <Modal onCloseModal={onCloseModal}>
      <div>
        <p className="">Add product</p>
        <form className="" onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor={'name'} />
            <Input
              className=""
              id={'name'}
              name={'name'}
              value={values.name}
              placeholder="Name"
              type="text"
              onChange={handleChange}
            />
          </div>

          <Box
            sx={{
              '& .MuiTextField-root': { m: 1, width: '350px' },
            }}
          >
            <TextField
              id={'description'}
              label="Description"
              name={'description'}
              value={values.description}
              multiline
              rows={4}
              onChange={handleChange}
              placeholder="Description"
            />
          </Box>

          <div className="">
            <label htmlFor={'img'} />
            <Input
              className=""
              id={'img'}
              name={'img'}
              value={values.img}
              placeholder="Images"
              type="text"
              onChange={handleChange}
            />
          </div>
          <div className="">
            <label htmlFor={'price'} />
            <Input
              className=""
              type={'number'}
              id={'price'}
              name={'price'}
              value={values.price}
              placeholder="0"
              onChange={handleChange}
              required
            />
            <label htmlFor={'amount'} />
            <Input
              className=""
              type={'number'}
              id={'amount'}
              name={'amount'}
              value={values.amount}
              placeholder="0.00"
              onChange={handleChange}
              required
            />
          </div>
          <div className="">
            <ThemeProvider theme={theme}>
              <Button
                className=""
                type={'submit'}
                style={{
                  marginTop: '50px',
                  width: '300px',
                  height: '50px',
                  borderRadius: '20px',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
                variant="contained"
                color="primary"
                size="small"
              >
                Add
              </Button>
              <Button
                className=""
                type="button"
                onClick={onCloseModal}
                style={{
                  marginTop: '20px',
                  width: '300px',
                  height: '50px',
                  borderRadius: '20px',
                  boxShadow: '0 0 1px 1px #4A56E2',
                  fontSize: '18px',
                  fontWeight: '400',
                }}
                variant="contained"
                color="neutral"
                size="small"
              >
                Close
              </Button>
            </ThemeProvider>
          </div>
        </form>
        <button className="" type="button" onClick={onCloseModal}>
          <CloseIcon />
        </button>
      </div>
    </Modal>
  );
};

export default ModalAddProduct;
