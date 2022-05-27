import React, { useEffect } from "react";
import store, { RootState } from "../app/store";
import { thunkGetCompetitors } from "../app/thunk";
import CompetitorList from "./competitors/competitorsList";
import CreateCompetitor from "./competitors/createCompetitor";
import { useSelector } from 'react-redux';
import UserLogged from "./users/userLogged";
import { useNavigate } from "react-router";
import styles from "./main.module.css";


export interface IUser {
    _id?: string;
    username: string;
    password: string;
}

export interface ICompetitor {
    _id?: string;
    name: string;
    createdBy?: string;
}


const Main = () => {

    const navigate = useNavigate();
    const competitorsUS: ICompetitor[] = useSelector((state: RootState) => state.competitors);    
    
    const getCompetitors = async () => {
        const getCompetitors: any = await store.dispatch(thunkGetCompetitors);

        if(getCompetitors === "'X-Session-Token' HEADER IS EMPTY"){
            navigate("/login");
        }        
    }

    useEffect(() => {
        getCompetitors();
    }, [])

    return (
        <React.Fragment>
            <section id="mainContainer">
                <header className={styles.header}>
                    <CreateCompetitor />
                    <UserLogged />
                </header>
                <CompetitorList competitors={competitorsUS} />
            </section>            
        </React.Fragment>
    )
}

export default Main;