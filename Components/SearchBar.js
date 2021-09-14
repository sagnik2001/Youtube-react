import {React,useState} from "react"
import "./SearchBar.css"

const SearchBar =(props)=>{
const [term,setterm] =useState(null)
const handleChange=(e)=>{
  setterm(e.target.value)
}
const handleSubmission=(e)=>{
  e.preventDefault();
  props.handleFormSubmit(term)
}
  return(
    <>
    <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png' alt="youtube logo"></img></h2>
    <div className='search-bar ui segment'>
                <form className='ui form' onSubmit={handleSubmission}>
                    <div className='field' >
                        <label htmlFor="video-search">Video Search</label>
                        <div class="ui icon input">
                          <input name="video-search" type="text" placeholder="Search..." onChange={handleChange}/>
                          <i class="circular search link icon"></i>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default SearchBar;
