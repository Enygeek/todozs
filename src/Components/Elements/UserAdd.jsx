import React, {useEffect, useState} from 'react';

const UserAdd = () => {

    const initial = {
        name: '',
        pseudo : '',
        email : ''
    }

    let mounted = false

    const [data, setdata] = useState({... initial})
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const handleCancel = () => {
        setdata({...initial})
    };

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

    const addUsers = e =>{
        e.prevenDefault();
        fetch('http://localhost:8080/user/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        getUsers();
        setdata({...initial});
    })
    .catch(err => console.log('add', err));
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

                                            { data.idUser ? (
                                                
                                            <button className="btn btn-danger btn-sm font-size-16"
                                                    type="reset" data-toggle="tooltip"
                                                    data-placement="top"
                                                    data-original-title="Annuler"
                                                    onClick={handleCancel}>
                                                <span></span>
                                                <i className="dripicons-trash font-size-14"></i>
                                            </button> 
                                            ) : null}

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
        </>
    )
}

export default UserAdd;