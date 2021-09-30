import React, { useMemo } from 'react';
import queryString from "query-string";
// import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import '../../css/search.css';


export const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse( location.search );
 
    const [formValues, handleInputChange] = useForm({searchText: q});
    
    const {searchText} = formValues;
    const heroFiltered = useMemo(() => getHeroesByName( q ), [q]);
    // const heroFiltered = getHeroesByName( searchText ); 

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
        console.log(searchText);
        // reset();

    }

    return (
        <div>
            <h1>Search screen</h1>
            <hr/>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>

                    <form onSubmit={ handleSearch }>
                        <div className="form-row py-3 pt-5">
                        <input
                            type="text"
                            name="searchText"
                            autoComplete="off"
                            placeholder="Find your hero"
                            className="form-control"
                            value={searchText}
                            onChange={ handleInputChange }
                        />

                        <button
                            type="submit"
                            className="btn mt-2 col-12 btn-outline-primary"
                        >
                            Search...
                        </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                       <hr/>
                       {
                           (q === '')
                           &&
                           <div className="alert alert-info">
                               Search a Hero
                           </div>
                       }

{
                           (q !=='' && heroFiltered.length === 0)
                           &&
                           <div className="alert alert-danger">
                               There is not a hero with { q }
                           </div>
                       }

                       {
                           heroFiltered.map((hero) => (
                               <HeroCard 
                                    key={hero.id}
                                    {...hero}
                               />
                           ))

                       } 
                </div>
            </div>
        </div>
    )
}
