import React from "react";
import LanguageSelector from "./LanguageSelector"
import api from "../utils/api"
import RepoGrid from "./RepoGrid"
import Loading from "./Loading"

const CN = "Popular";
const popular = {
        state : {
            selectedLanguage : 'All',
            repos : []
        },
        setState : ( updater, callback ) => {
            console.log( CN + '.setState' );

            Object.assign( popular.state, updater() );
        },
        componentDidMount : () => {
            console.log( CN + '.componentDidMount' );

            popular.updateLanguage( popular.state.selectedLanguage );
        },
        updateLanguage : ( newLang ) => {
            console.log( CN + '.updateLanguage' );

            popular.setState( () => ( { selectedLanguage : newLang, repos : [] } ) );
            popular.getRepos( newLang );
        },
        getRepos : ( newLang ) => {
            console.log( CN + '.getRepos' );

            api.fetchPopularRepos( newLang )
                .then( ( repos ) => {
                    popular.setState( () => ( { repos : repos } ) );
                } );
        },
        render : () => {
            console.log( CN + '.render' );
            return(
                <div>
                    <LanguageSelector
                        selectedLanguage = { popular.state.selectedLanguage }
                        onSelect = { ( lang ) => popular.updateLanguage( lang ) }/>
                    { popular.state.repos.length ? <RepoGrid repos = { popular.state.repos }/> : <Loading/> }
                </div>
            )
        }
    };

const Popular = () => popular;

export default Popular;

