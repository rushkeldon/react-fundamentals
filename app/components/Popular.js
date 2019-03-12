import React, { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector"
import api from "../utils/api"
import RepoGrid from "./RepoGrid"
import Loading from "./Loading"


const Popular = ( props ) => {
    const [ selectedLanguage, setLanguage ] = useState( 'All' );
    const [ repos, setRepos ] = useState( [] );

    const updateLanguage = ( newLang ) => {
        setLanguage( newLang );
        getRepos( newLang );
    };

    const getRepos = ( newLang ) => {
        api.fetchPopularRepos( newLang )
            .then( ( repos ) => {
                setRepos( repos );
            } )
            .catch( ( err ) => {
                setRepos( [] );
            } );
    };

    useEffect( () => {
        getRepos( selectedLanguage );
        // passing empty array as second param turns useEffect into a run-once-at-start callback
    }, [] );

    return (
        <div>
            <LanguageSelector
                selectedLanguage = { selectedLanguage }
                onSelect = { ( lang ) => updateLanguage( lang ) } />
            { repos.length ? <RepoGrid repos = { repos } /> : <Loading/> }
        </div>
    )
}

export default Popular;
