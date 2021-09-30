import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { AddScrutiny } from '../components/scrutiny/AddScrutiny'
import { ListScrutiny } from '../components/scrutiny/ListScrutiny'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'


export const DashBoardRoutes = () => {
    return (
        <>
            {/* <Navbar history={ history } /> */}
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route path="/scrutiny" component={ AddScrutiny }/>
                    <Route path="/list" component={ ListScrutiny }/>
                    <Route path="/marvel" component={ MarvelScreen }/>
                    <Route path="/hero/:heroeId" component={ HeroScreen }/>
                    <Route path="/dc" component={ DcScreen }/>
                    <Route path="/search" component={ SearchScreen }/>

                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
