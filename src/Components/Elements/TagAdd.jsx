import React, { useEffect, useState } from 'react';

const TagAdd = () => {
    const initial = {
        libelle: '',
        des: ''
    }

    let mounted = false

    const [data, setdata] = useState({... initial})
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    const getTag = () => {

        fetch('http://localhost:8080/tag/', 
        {method: 'GET'})

        .then(response => response.json())

        .then(response => {

        setList(response)

        setLoading(false)

        })
        .catch(err => console.log('tag', err))
    }

    const addTag = e =>{
        fetch('http://localhost:8080/tag/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        getTag();
        setdata({...initial});
    })
    .catch(err => console.log('add', err));
    }

    useEffect(() => {
        if (!mounted) getTag();
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
                            <span className={"text-uppercase"}>Ajouter un tag</span>
                        </div>


                        <form className="needs-validation" noValidate action="#" onSubmit={e => addTag(e)}>

                            <div className="col-md-12">

                                <div className="row">

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="subject">Libellé</label>
                                        <input type="text" id="subject" value={data.libelle} className="form-control" placeholder="Nouveau tag"
                                            onChange={e => setdata({...data,libelle: e.target.value})} required/>
                                    </div>

                                    <div className="col-md-12 mb-2">
                                        <label htmlFor="description">Description</label>
                                        <input name="description" className="form-control" value={data.des} placeholder="Description du tag" rows="2"
                                         onChange={e => setdata({...data,des: e.target.value})} required></input>
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
        </>
    )
}

export default TagAdd;