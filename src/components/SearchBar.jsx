import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!searchTerm) return
    navigate(`/search/${searchTerm}`)
  }
  return (
    <Paper
      component="form"
      sx={{
        borderRadius: "20px",
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 }
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => { setSearchTerm(e.target.value) }}
      />
      <IconButton type="submit" sx={{ p: 1 }} onClick={handleSubmit}>
        <Search />
      </IconButton>
    </Paper>
  )
}

export default SearchBar