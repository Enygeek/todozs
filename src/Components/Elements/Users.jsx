import React, { useEffect, useState } from 'react';

const UsersCrud = () => {

    const [users, setUsers] = useState([]);

    const initial = {
        name: '',
        pseudo : '',
        email : ''
    }

    let mounted = false

    const [data, setdata] = useState({... initial})
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [erreur, setErreur] = useState(false)

    {/**
     * @Description
     *      Récupérer la liste des utilisateurs.
     * */}
    const getUsers = () => {
        fetch('http://localhost:8080/user/',
            {method: 'GET'})
            .then(response => response.json())
            .then(response => {
                setList(response)
                setLoading(false)
            })
            .catch(err => console.log('user', err))
    }

    {/**
     * @Description
     *      Ajouter un nouvel utilisateur.
     * */}
    const addUsers = e => {
        e.preventDefault()
        fetch('http://localhost:8080/user/',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    .then(() => {
            getUsers();
            setdata({...initial});
        }).catch(err => console.log('add', err));
    }

    const deleteUser = user => {
        fetch('http://localhost:8080/user/'+user.idUser, {
            method: 'DELETE'
        })
        .then(() => {
            getUsers()
            setErreur(false)
        })
        .catch(err => console.log('add', err))
    }

    const updateUser = user => {
        fetch('http://localhost:8080/user/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: data.idUser,
                    name: data.name,
                    pseudo : data.pseudo,
                    email: data.email
                })
        })
        .then(() => {
            getUsers()
            setdata({...initial})
        })
        .catch(err => console.log('update', err))
    }

    useEffect(() => {
        if (!mounted) getUsers();
        return () => mounted = true
    }, []);

    return (
        <>

            {/* Form - Ajouter un utilisateur */}
            <div className="col-5">
                <div className="card">
                    <div className="card-body">

                        <div className={"font-size-16 text-center pl-1 mb-3"}>
                            <i className={"mdi mdi-plus-circle-outline mr-2"}></i>
                            <span className={"text-uppercase"}>Ajouter un utilisateur</span>
                        </div>

                        <form className="needs-validation" noValidate action="#" onSubmit={e => addUsers(e)}>

                            <div className="col-md-12">

                                <div className="row">

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="subject">Nom</label>
                                        <input type="text" id="subject" value={data.name} className="form-control" placeholder="Nom de l'utilisateur"
                                               onChange={e => setdata({...data,name: e.target.value})} required/>
                                    </div>

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="subject">Pseudo</label>
                                        <input type="text" id="subject" value={data.pseudo} className="form-control" placeholder="Pseudonyme"
                                               onChange={e => setdata({...data,pseudo: e.target.value})} required/>
                                    </div>

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="subject">Email</label>
                                        <input type="email" id="subject" value={data.email} className="form-control" placeholder="...@todozs.com"
                                               onChange={e => setdata({...data,email: e.target.value})} required/>
                                    </div>

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="card-body text-center">


                                            <button className="btn btn-danger btn-sm font-size-16"
                                                    type="reset" data-toggle="tooltip"
                                                    data-placement="top"
                                                    data-original-title="Annuler">
                                                <span></span>
                                                <i className="dripicons-trash font-size-14"></i>
                                            </button>

                                            <button className="btn btn-success btn-sm font-size-16 ml-2"
                                                    type="submit" data-toggle="tooltip"
                                                    data-placement="top"
                                                    data-original-title="Enregistrer la catégorie">
                                                <i className="mdi mdi-check-underline mr-2"></i>
                                                <span className="mr-1">| Enregistrer</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* end col */}

            {/* Liste des utilisateurs */}
            <div className="col-7">
                <div className="card">
                    <div className="card-body">
                        <div className={"font-size-16 text-center pl-1 mb-3"}>
                            <i className={"dripicons-user mr-2"}></i>
                            <span className={"text-uppercase"}>Liste des utilisateurs</span>
                        </div>

                        <table id="datatable-buttons"
                               className="table table-striped table-bordered dt-responsive nowrap tableZS">
                            <thead>
                            <tr>
                                <th>N°</th>
                                <th>Sujet</th>
                                <th>Pseudo</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                            </thead>


                            <tbody>
                            {
                                list.map((item, cle) => (
                                    <tr key={cle}>
                                        <td>{++cle}</td>
                                        <td className="pt-4">{item.name}</td>
                                        <td className="pt-4">{item.pseudo}</td>
                                        <td className="pt-4">{item.email}</td>
                                        <td className="pt-4">
                                            <button type="button"
                                                    className="btn btn-outline-warning btn-sm waves-effect pt-1"
                                                    data-dismiss="modal" data-toggle="modal"
                                                    data-target=".bs-example-modal-lg"
                                                    title="Modifier le #tag"
                                                    onClick={() => updateUser(item)}>
                                                <i className={"dripicons-pencil"}></i>
                                            </button>
                                            <button type="button"
                                                    className="btn btn-danger btn-sm waves-effect pt-1 ml-2"
                                                    id="sa-params"
                                                    onClick={() => deleteUser(item)}>
                                                <i className={"dripicons-trash"}></i>
                                            </button>
                                        </td>
                                    </tr>
                                ))

                            }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            {/* end col */}
        </>
    )
}

export default UsersCrud;