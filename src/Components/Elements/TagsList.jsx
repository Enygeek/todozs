import React, { useEffect, useState } from 'react';


/**
 * @Description
 *     Composant retournant la liste des tags sous forme de tableau.
 * */
const TagsList = () => {

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
        if (!mounted) getTag();
        return () => mounted = true
    }, []);

    return (
        <>
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
                                <td className="pt-4">{item.des}</td>
                                <td className="pt-4">
                                    <button type="button"
                                            className="btn btn-outline-warning btn-sm waves-effect pt-1"
                                            data-dismiss="modal" data-toggle="modal"
                                            data-target=".bs-example-modal-lg"
                                            title="Modifier le #tag">
                                        <i className={"dripicons-pencil mr-2"}></i>Modifier
                                    </button>
                                    <button type="button"
                                            className="btn btn-danger btn-sm waves-effect pt-1 ml-2"
                                            id="sa-params"
                                            onClick={() => deleteTag(item)}>
                                        <i className={"dripicons-trash mr-2"}></i>
                                        Supprimer
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

export default TagsList;