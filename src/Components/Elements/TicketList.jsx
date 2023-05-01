import React, {useEffect, useState} from 'react';


/**
 * @Description
 *     Composant retournant la liste des tags sous forme de tableau.
 * */
const TicketList = () => {

    const initial = {
        sujet: '',
        description : '',
        statut : ''
    }

    let mounted = false

    const [data, setdata] = useState({... initial})
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [erreur, setErreur] = useState(false)

    {/**
     * @Description
     *      Récupérer la liste des tickets.
     * */}
    const getTicket = () => {
        fetch('http://localhost:8080/ticket/',
            {method: 'GET'})
            .then(response => response.json())
            .then(response => {
                setList(response)
                setLoading(false)
            })
            .catch(err => console.log('ticket', err))
    }

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

    const deleteTicket = ticket => {
        fetch('http://localhost:8080/ticket/'+ticket.idTicket, {
            method: 'DELETE'
        })
            .then(() => {
                getTicket()
                setErreur(false)
            })
            .catch(err => console.log('del', err))
    }

    const updateTicket = ticket => {
        fetch('http://localhost:8080/ticket/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: data.idTicket,
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
        if (!mounted) getTicket();
        return () => mounted = true
    }, []);


    return (
        <>
            {/* Liste des utilisateurs */}
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div className={"font-size-16 text-center pl-1 mb-3"}>
                            <i className={"dripicons-tags mr-2"}></i>
                            <span className={"text-uppercase"}>Liste des tickets</span>
                        </div>

                        <table id="datatable-buttons"
                               className="table table-striped table-bordered dt-responsive nowrap tableZS">
                            <thead>
                            <tr>
                                <th>N°</th>
                                <th>Sujet</th>
                                <th>Description</th>
                                <th>Statut</th>
                                <th>Action</th>
                            </tr>
                            </thead>


                            <tbody>
                            {
                                list.map((item, cle) => (
                                    <tr key={cle}>
                                        <td>{++cle}</td>
                                        <td className="pt-4">{item.sujet}</td>
                                        <td className="pt-4">{item.description}</td>
                                        <td className="pt-4"><span className={"badge badge-warning font-size-12"}>{item.statut}</span></td>
                                        <td className="pt-4">
                                            <button type="button"
                                                    className="btn btn-outline-warning btn-sm waves-effect pt-1"
                                                    data-dismiss="modal" data-toggle="modal"
                                                    data-target=".bs-example-modal-lg"
                                                    title="Modifier le #tag"
                                                    onClick={() => updateTicket(item)}>
                                                <i className={"dripicons-pencil"}></i>
                                            </button>
                                            <button type="button"
                                                    className="btn btn-danger btn-sm waves-effect pt-1 ml-2"
                                                    id="sa-params"
                                                    onClick={() => deleteTicket(item)}>
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

export default TicketList;