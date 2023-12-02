/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from 'styles/search-bar.module.scss'
import SearchIcon from 'assets/search-icon.svg'
import { Autocomplete } from '@mui/material'
import products from 'json/products.json'
import { useState } from 'react'

interface SearchBarProps {
  onSubmit: (value: string) => void
}

export function SearchBar({ onSubmit }: SearchBarProps) {
  const options = products.map(product => product.title)
  const [value, setValue] = useState<string | null>(null)
  const [inputValue, setInputValue] = useState('');


  const handleChangeValue = (_event: unknown, newValue: string | null) => {
    setValue(newValue)
  }

  const handleChangeInputValue = (_event: unknown, newInputValue: string) => {
    setInputValue(newInputValue)
  }

  return (
    <div className={styles.container}>
      <img src={SearchIcon} alt="search icon" onClick={() => onSubmit(inputValue)} />
      <Autocomplete
        sx={{
          display: 'flex',
        }}
        id={styles.search_bar_input}
        options={options}
        value={value}
        onChange={handleChangeValue}
        inputValue={inputValue}
        onInputChange={handleChangeInputValue}
        componentsProps={{
          popper: {
            sx: {
              left: '-20px!important',
              top: '22px!important'
            }
          },
          paper: {
            sx: {
              width: '310px'
            }
          }
        }}
        renderInput={(params) => (
          <form ref={params.InputProps.ref} onSubmit={(event: any) => {
            event.preventDefault()

            onSubmit(inputValue)
          }}>
            <input className={styles.input} type="text" {...params.inputProps} />
          </form>
        )}
      />
    </div>
  )
}