import { Search } from '@mui/icons-material'
import { InputAdornment, InputBase, alpha, styled } from '@mui/material'

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

const SearchInputAdornment = styled(InputAdornment)(({ theme }) => ({
  color: 'inherit',
}))

const SearchField = () => {
  return (
    <SearchInput
      placeholder='Search…'
      id='search-field'
      startAdornment={
        <SearchInputAdornment position='start'>
          <Search />
        </SearchInputAdornment>
      }
    />
  )
}

export default SearchField
