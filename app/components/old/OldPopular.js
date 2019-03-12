import React from "react";
import LanguageSelector from "./LanguageSelector"
import api from "../utils/api"
import RepoGrid from "./RepoGrid"
import Loading from "./Loading"

class Popular extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            selectedLanguage : 'All',
            repos : []
        };
    }

    componentDidMount() {
        this.updateLanguage( this.state.selectedLanguage );
    }

    updateLanguage( newLang ){
        this.setState( () => ( { selectedLanguage : newLang, repos : [] } ) );
        this.getRepos( newLang );
    }

    getRepos( newLang ) {
        api.fetchPopularRepos( newLang )
            .then( ( repos ) => {
                this.setState( () => ( { repos : repos } ) );
            } );
    }

    render() {
        return (
            <div>
                <LanguageSelector
                    selectedLanguage = { this.state.selectedLanguage }
                    onSelect = { ( lang ) => this.updateLanguage( lang ) } />
                { this.state.repos.length ? <RepoGrid repos = { this.state.repos } /> : <Loading/> }
            </div>
        )
    }
}

export default Popular;

