import { Search } from '@mui/icons-material'
import {
  InputAdornment,
  InputBase,
  InputBaseProps,
  alpha,
  styled,
} from '@mui/material'
import { useSetAtom } from 'jotai'
import { useCallback } from 'react'
import searchFieldValueAtom from '../atoms/searchFieldValueAtom'

const SearchInput = styled(InputBase)(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(5),
  paddingLeft: theme.spacing(1),
}))

const SearchInputAdornment = styled(InputAdornment)({ color: 'inherit' })

const SearchField = () => {
  const setSearchFieldValue = useSetAtom(searchFieldValueAtom)

  const handleChange = useCallback<NonNullable<InputBaseProps['onChange']>>(
    (event) => {
      setSearchFieldValue(event.target.value)
    },
    [setSearchFieldValue],
  )

  return (
    <SearchInput
      aria-label='weather location search field'
      id='weather-location-search-field'
      onChange={handleChange}
      placeholder='Search…'
      startAdornment={
        <SearchInputAdornment position='start'>
          <Search />
        </SearchInputAdornment>
      }
    />
  )
}

export default SearchField
