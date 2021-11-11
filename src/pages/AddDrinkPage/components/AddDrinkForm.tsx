import { Box, Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useDispatchApp } from '../../../store/appSlice'
import { PostDrink } from '../../../utils/types'

export const AddDrinkForm = (): JSX.Element => {
  const { addDrink } = useDispatchApp()

  const initialValues: PostDrink = {
    name: '',
    description: '',
    imageUrl: '',
    ingredients: '',
    instructions: '',
  }

  const requiredMsg = 'To pole jest wymagane'

  const validationSchema = Yup.object({
    name: Yup.string().required(requiredMsg),
    description: Yup.string().required(requiredMsg),
    imageUrl: Yup.string()
      .url('Wprowadzono błędne dane. W tym polu powinien znaleźć się link do zdjęcia')
      .required(requiredMsg),
    ingredients: Yup.string().required(requiredMsg),
    instructions: Yup.string().required(requiredMsg),
  })

  const { handleSubmit, values, resetForm, isSubmitting, setSubmitting, getFieldProps, getFieldMeta } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      addDrink({
        drink: values,
        onSuccess: () => resetForm(),
        onFail: () => setSubmitting(false),
      })
    },
  })

  const getTextFieldParams = (name: string) => {
    const { touched, error } = getFieldMeta(name)
    return {
      ...getFieldProps(name),
      error: touched && Boolean(error),
      helperText: touched && error,
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <Box display="grid" rowGap={2} mb={2}>
        <TextField label="Nazwa" {...getTextFieldParams('name')} />
        <TextField label="Opis" {...getTextFieldParams('description')} multiline rows={4} />
        <TextField label="Link do zdjęcia" {...getTextFieldParams('imageUrl')} />
        <TextField label="Składniki" {...getTextFieldParams('ingredients')} multiline rows={8} />
        <TextField label="Sposób przygotowania" {...getTextFieldParams('instructions')} multiline rows={8} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Button type="submit" color="primary" variant="contained" disabled={isSubmitting} fullWidth>
            Dodaj drink
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            type="button"
            color="inherit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
            onClick={() => resetForm()}
          >
            Wyczyść
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
