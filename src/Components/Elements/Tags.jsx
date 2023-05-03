import React, { useEffect, useState } from 'react';


/**
 * @Description
 *     Composant retournant la liste des tags sous forme de tableau.
 * */
const Tags = () => {

    const initial = {
        libelle: '',
        description : ''
    }

    let mounted = false

    const [data, setdata] = useState({... initial})
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [erreur, setErreur] = useState(false)

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

    /**
     * @Description
     *     Function retournant la liste des tags afficher plus dans un tableau.
     * */
    const addTag = e =>{
        e.preventDefault()
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


    const deleteTag = tag => {
        fetch('http://localhost:8080/tag/'+tag.id, {
            method: 'DELETE'
        })
        .then(() => {
            getTag()
            setErreur(false)
        })
        .catch(err => console.log('add', err))
    }

    useEffect(() => {
        if (!mounted) {
            getTag();
        }
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
                                        <input name="description" className="form-control" value={data.description} placeholder="Description du tag" rows="2"
                                               onChange={e => setdata({...data,description: e.target.value})} required></input>
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
                            <i className={"dripicons-tags mr-2"}></i>
                            <span className={"text-uppercase"}>Liste des tags</span>
                        </div>
                        {

                            loading ? <span>Chargement...</span> :

                        <table id="datatable-buttons"
                               className="table table-striped table-bordered dt-responsive nowrap tableZS">
                            <thead>
                            <tr>
                                <th>N°</th>
                                <th>Libellé</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                            </thead>


                            <tbody>
                                {
                                    list.map((item, cle) => (
                                        <tr key={cle}>
                                            <td className="pt-4">{++cle}</td>
                                            <td className="pt-4">{item.libelle}</td>
                                            <td className="pt-4">{item.description}</td>
                                            <td className="pt-4">
                                                <button type="button"
                                                        className="btn btn-outline-warning btn-sm waves-effect pt-1"
                                                        data-dismiss="modal" data-toggle="modal"
                                                        data-target=".bs-example-modal-lg"
                                                        title="Modifier le #tag">
                                                    <i className={"dripicons-pencil mr-2"}></i>
                                                </button>
                                                <button type="button"
                                                        className="btn btn-danger btn-sm waves-effect pt-1 ml-2"
                                                        id="sa-params"
                                                        onClick={() => deleteTag(item)}>
                                                    <i className={"dripicons-trash mr-2"}></i>
                                                </button>
                                            </td>
                                    </tr>))
                        }
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
            </div>
            {/* end col */}
        </>
    )
}

export default Tags;