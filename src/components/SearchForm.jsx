import { useState } from 'react';

function SearchForm(props) {
    // add state to hold the data of the form
    const [formData, setFormData] = useState({
        searchterm: "",
    })

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
        //use the event object to detect key and value to update
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event) => {
        // prevent page from refreshing on form submissin
        event.preventDefault();
        // first, check that the search term is what we expect
        console.log(formData.searchterm)
        // eventually, we will pass the search term to nasasearch prop (the method that will search)
        props.getNasaList(formData.searchterm);

    }


    return (
        <div>
            <p>Type your search term here</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchterm"
                    onChange={handleChange}
                    value={formData.searchterm}
                />
                <input type="submit" value="submit" />

            </form>
            <br />
            <p> your current search term is: {formData.searchterm}</p>

        </div>
    )
}

export default SearchForm