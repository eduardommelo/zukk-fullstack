import React from 'react'
import { Content, FormLogin, ButtonSubmit, GlobalContainer, LabelForm, LogoPanel, SpanGrey } from '../../assets/js/styled/index'

export default class Home extends React.Component {
    render() {
        return (
            <GlobalContainer>
                <Content>
                    <LogoPanel><SpanGrey>Painel</SpanGrey> ADMIN</LogoPanel>
                    <FormLogin>
                        <div className="form-group">
                            <LabelForm for="userLabel">Usuário</LabelForm>
                            <input type="text" className="form-control" id="userLabel" required />
                        </div>
                        <div className="form-group">
                            <LabelForm for="passLabel" >Senha</LabelForm>
                            <input type="password" className="form-control" id="passLabel" required />
                        </div>
                        <ButtonSubmit type="submit" >Entrar</ButtonSubmit>
                    </FormLogin>
                </Content>
            </GlobalContainer>
        )
    }
}