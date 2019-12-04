import React from 'react';
import ListaDisciplina from '../../components/lista-disciplinas/ListaDisciplinas';
import Dashboard from '../../components/dashboard/Dashboard';
import ListaEstagios from '../estagios/ListaEstagios';

export default function Seletor(props) {
    if(props.session.periodo === 0){
        return(
            <ListaDisciplina session={props.session} atualizar={props.atualizar} />
        )
    }
    if(props.session.periodo === 1){
        return(
            <ListaEstagios session={props.session} atualizar={props.atualizar} />
        )
    }
    if(props.session.periodo === 2){
        return(
            <Dashboard session={props.session} atualizar={props.atualizar} />
        )
    }
}