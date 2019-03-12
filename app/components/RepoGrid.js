import React from "react";

const RepoGrid = ( props ) => (
    <ul className="repo-grid">
        { props.repos.map( ( repo, i ) => (
            <li key = { repo.name }
                className='repo-tile' >
                <ul className="space-list-items">
                    <li className='repo-rank'>#{i + 1}</li>
                    <li>
                        <img className="avatar"
                            src = { repo.owner.avatar_url }
                            alt = { `avatar for ${ repo.owner.login }` }/>
                    </li>
                    <li><a href={ repo.html_url}>{ repo.name }</a></li>
                    <li>
                        <a href={ `https://github.com/${repo.owner.login}`} target='_blank'>@{ repo.owner.login }</a></li>
                    <li>⭐ { repo.stargazers_count }</li>
                </ul>
            </li>
        ) ) }
    </ul>
);

export default RepoGrid;
