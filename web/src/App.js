/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React, { useState } from 'react'
import { Button } from '@material-ui/core'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import CssBaseline from '@material-ui/core/CssBaseline'
import XLSX from 'xlsx'
import { useForm, Controller, useFieldArray } from 'react-hook-form'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import AddMessageModal from './AddMessageModal'
import Phone from './Phone'

function App() {
  const [sheet, setSheet] = useState()
  const [openMessage, setOpenMessage] = useState(false)

  const { handleSubmit, control, register } = useForm()
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: 'messages', // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    },
  )

  const onSubmit = (data) => {
    console.log({ ...data, to: [...sheet.data] })
  }

  const getSheet = (event) => {
    event.preventDefault()

    const fileReader = new FileReader()
    fileReader.onload = (e) => {
      const data = e.target.result
      const workbook = XLSX.read(data, { type: 'binary' })

      workbook.SheetNames.forEach((sheet) => {
        let rowObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet])
        setSheet({ data: rowObject, header: Object.keys(rowObject[0]) })
      })
    }

    fileReader.readAsBinaryString(event.target.files[0])
  }

  const handleMessageModal = () => {
    setOpenMessage(!openMessage)
  }

  return (
    <>
      <AddMessageModal
        open={openMessage}
        onClose={handleMessageModal}
        append={append}
      />
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">RoboZap</Typography>
        </Toolbar>
      </AppBar>

      <input
        accept="*/*"
        id="contained-button-file"
        multiple
        type="file"
        css={css`
          display: none;
        `}
        onChange={(event) => getSheet(event)}
      />

      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          css={css`
            background-color: blue;
            color: #fff;
            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            padding: 7px 14px;
            &:hover {
              background-color: blue;
            }
          `}
        >
          Carregar Planilha
        </Button>
        <Button
          variant="contained"
          onClick={handleMessageModal}
          css={css`
            background-color: green;
            color: #fff;

            box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
              0 1px 3px rgba(0, 0, 0, 0.08);
            padding: 7px 14px;
            &:hover {
              background-color: green;
            }
          `}
        >
          Add Message
        </Button>
        <Button />
      </label>

      {/* {fields.map((field, index) => (
        <div key={field.id}>
          TIPO: {field.type}
          <br />
          MENSAGEM: {field.data}
        </div>
      ))} */}

      <div>
        <Phone name="Alexandre" status="online" messages={fields} />
      </div>

      {sheet?.data && (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Age
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Age"
                defaultValue=""
                {...register('phoneField')}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>

                {sheet.header.map((cell) => (
                  <MenuItem key={JSON.stringify(cell)} value={cell}>
                    {cell}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              css={css`
                background-color: red;
                color: #fff;
                box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
                  0 1px 3px rgba(0, 0, 0, 0.08);
                padding: 7px 14px;
                &:hover {
                  background-color: red;
                }
              `}
            >
              Enviar Mensagens
            </Button>
          </form>

          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {sheet.header.map((cell, index) => (
                    <TableCell
                      key={JSON.stringify(cell)}
                      align={index === 0 ? 'left' : 'right'}
                    >
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {sheet.data.map((row) => (
                  <TableRow key={JSON.stringify(row)}>
                    {sheet.header.map((cell, index) => (
                      <TableCell
                        key={JSON.stringify(cell)}
                        align={index === 0 ? 'left' : 'right'}
                      >
                        {row[cell]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  )
}

export default App
