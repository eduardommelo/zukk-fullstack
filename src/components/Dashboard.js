import React from 'react'
import { ContainerDash, AreaMember, MessageH, ListMembers } from '../../assets/js/styled/dashboard'
import { Navbar, AreaMamber, AreaLogout } from '../../assets/js/styled/navbar'
import { Link } from 'react-router-dom'



export default class Dashboard extends React.Component {

    render() {
        return (
            <ContainerDash>
                <Navbar>
                    <AreaMamber>
                        <div className="avatar-member"></div>
                        <div className="info-member">
                            <span>Usuário</span>
                        </div>
                    </AreaMamber>
                    <AreaLogout>
                        <Link to="/">Sair</Link>
                    </AreaLogout>
                </Navbar>
                <div className="container-fluid">
                    <div className="container margin-70">
                        <div className="row">
                            <div className="col-12">
                                <MessageH>Olá, Usuário</MessageH>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <ListMembers>
                                    <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nome</th>
                                            <th scope="col">CEP</th>
                                            <th scope="col">Endereço</th>
                                            <th scope="col">Ação</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Eduardo Melo</th>
                                            <td>00000-000</td>
                                            <td>dasddadasdsadsaas</td>
                                            <td>x</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </ListMembers>
                            </div>
                        </div>
                    </div>
                </div>
            </ContainerDash>
        )
    }
}