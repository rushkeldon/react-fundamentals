import React from "react";
import LanguageSelector from "./LanguageSelector"
import api from "../utils/api"
import RepoGrid from "./RepoGrid"
import Loading from "./Loading"

let Popular = ( props ) => ( {
        state : {
            selectedLanguage : 'All',
            repos : []
        },
        setState : ( updater, callback ) => {
            Object.assign( Popular.state, updater() );
        },
        componentDidMount : () => {
            console.log( 'Popular.componentDidMount' );
            Popular.updateLanguage( Popular.state.selectedLanguage );
        },
        updateLanguage : ( newLang ) => {
            Popular.setState( () => ( { selectedLanguage : newLang, repos : [] } ) );
            Popular.getRepos( newLang );
        },
        getRepos : ( newLang ) => {
            api.fetchPopularRepos( newLang )
                .then( ( repos ) => {
                    Popular.setState( () => ( { repos : repos } ) );
                } );
        },
        render : () => {
            console.log( 'Popular.render' );
            console.log( Popular.state );
            return(
                <div>
                    <LanguageSelector
                        selectedLanguage = { Popular.state.selectedLanguage }
                        onSelect = { ( lang ) => Popular.updateLanguage( lang ) }/>
                    { Popular.state.repos.length ? <RepoGrid repos = { Popular.state.repos }/> : <Loading/> }
                </div>
            )
        }
    }
)

export default Popular;

