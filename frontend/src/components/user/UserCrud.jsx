import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

import './UserCrud.css'

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const baseURL = 'http://localhost:3001/users'
const initialState = {
    user: {
        name: '',
        username: '',
        email: '',
        address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        phone: '',
        website: '',
        company: {
            name: '',
            catchPhrase: '',
            bs: ''
        }
    },
    list: []
}

export default class UserCrud extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseURL).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    updatedField(event) {
        const user = { ...this.state.user }
       
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    updatedFieldComp = (name, value, isAddress) => {
        let { user } = this.state;
        let {address}=user
        if(isAddress){
          address[name]=value
        }else{
        user[name] = value;      
        }    
        this.setState({ user: {...user, address} });
      }

      updatedFieldCompany = (name, value, isCompany) => {
        let { user } = this.state;
        let {company}=user
        if(isCompany){
          company[name]=value
        }else{
        user[name] = value;      
        }    
        this.setState({ user: {...user, company} });
      }

      updatedFieldGeo = (name, value, isAddress, isGeo) => {
        let { user } = this.state;
        let {address}=user
        if(isAddress){
          if(isGeo){
              address.geo[name]=value
          }
        }
        this.setState({ user: {...user, address} });
      }
     

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control"
                                name="username"
                                value={this.state.user.username}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o username..." />
                        </div>
                    </div>               

                     <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o email..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Rua</label>
                            <input type="text" className="form-control"
                                name="address.street"
                                value={this.state.user.address.street}
                                onChange={(e) => this.updatedFieldComp('street', e.target.value , true)}
                                placeholder="Digite a rua..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Complemento</label>
                            <input type="text" className="form-control"
                                name="suite"
                                value={this.state.user.address.suite}
                                onChange={e => this.updatedFieldComp('suite', e.target.value, true)}
                                placeholder="Digite o complemento..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Cidade</label>
                            <input type="text" className="form-control"
                                name="city"
                                value={this.state.user.address.city}
                                onChange={e => this.updatedFieldComp('city', e.target.value, true)}
                                placeholder="Digite o cidade..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>ZipCode</label>
                            <input type="text" className="form-control"
                                name="zipcode"
                                value={this.state.user.address.zipcode}
                                onChange={e => this.updatedFieldComp('zipcode', e.target.value, true)}
                                placeholder="Digite o zipcode..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Latitude</label>
                            <input type="text" className="form-control"
                                name="lat"
                                value={this.state.user.address.geo.lat}
                                onChange={e => this.updatedFieldGeo('lat', e.target.value, true, true)}
                                placeholder="Digite a latitude..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Longitude</label>
                            <input type="text" className="form-control"
                                name="lng"
                                value={this.state.user.address.geo.lng}
                                onChange={e => this.updatedFieldGeo('lng', e.target.value, true, true)}
                                placeholder="Digite a longitude..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control"
                                name="phone"
                                value={this.state.user.phone}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o telefone..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>WebSite</label>
                            <input type="text" className="form-control"
                                name="website"
                                value={this.state.user.website}
                                onChange={e => this.updatedField(e)}
                                placeholder="Digite o website..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome da Empresa</label>
                            <input type="text" className="form-control"
                                name="companyname"
                                value={this.state.user.company.name}
                                onChange={e => this.updatedFieldCompany('name', e.target.value, 'true')}
                                placeholder="Digite o nome da empresa..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Slogan</label>
                            <input type="text" className="form-control"
                                name="catchPhrase"
                                value={this.state.user.company.catchPhrase}
                                onChange={e => this.updatedFieldCompany('catchPhrase', e.target.value, true)}
                                placeholder="Digite o slogan..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>BS</label>
                            <input type="text" className="form-control"
                                name="bs"
                                value={this.state.user.company.bs}
                                onChange={e => this.updatedFieldCompany('bs', e.target.value, true)}
                                placeholder="Digite o BS..." />
                        </div>
                    </div>
                    


                </div>
                



                <hr />
                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user })
    }

    remove(user) {
        axios.delete(`${baseURL}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false )
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Rua</th>
                        <th>Complemento</th>
                        <th>Cidade</th>
                        <th>ZipCode</th>
                        <th>Latitude</th>
                        <th>Longitude</th>                    
                        <th>Telefone</th>
                        <th>WebSite</th>
                        <th>Nome da Empresa</th>
                        <th>Slogan</th>
                        <th>BS</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return(
                <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
                <td>{user.address.suite}</td>
                <td>{user.address.city}</td>
                <td>{user.address.zipcode}</td>
                <td>{user.address.geo.lat}</td>
                <td>{user.address.geo.lng}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td>{user.company.catchPhrase}</td>
                <td>{user.company.bs}</td>
                <td>
                   <div className="SalvarCancelar">
                    <button className="btn btn-warning ml-2"
                        onClick={() => this.load(user)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)}>
                        <i className="fa fa-trash"></i>
                    </button>
                    </div>
                </td>

            </tr>
           
            )
        })
    }

    render() {

        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}