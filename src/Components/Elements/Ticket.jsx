import React, {useEffect, useState} from 'react';

const Ticket = () => {

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = () => {
        setComments([...comments, newComment]);
        setNewComment('');
    };

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

        fetch('http://localhost:8080/user/id',
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
            {/* Un ticket */}
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">

                        {
                            list.map((item, cle) => (
                                <blockquote className="card card-bodyquote mb-2">
                                    <div className={"card-header"}>
                                        {/* Date */}
                                        <span className="float-right"> <i
                                            className={"dripicons-calendar mr-2 mt-2"}></i> 30.04.2023</span>
                                        {/* Checkbox & Sujet */}
                                        <div className="">
                                            {/*
                                            <input className="form-check-input mr-2" type="checkbox" value=""
                                                   id="defaultCheck2"/>
                                            */}
                                            <label className="text-muted text-uppercase font-weight-bold ml-0"
                                                   htmlFor="defaultCheck2">
                                                {item.sujet}
                                            </label>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className={"mt-2 px-3"}>{item.description}</p>


                                    <footer className="blockquote-footer px-3" id="accordion">
                                        {/* Statut */}
                                        <span className={item.statut === "Terminé" ? "badge badge-success font-size-12 float-right" : item.statut === 'en attente' ? 'badge badge-warning font-size-12 float-right' : "badge badge-danger font-size-12 float-right"}>
                                                {item.statut}
                                        </span>

                                        <i className={"dripicons-user"}></i>
                                        <span className={"font-weight-bold ml-1"}> à </span> :
                                        <cite title="Source Title"> </cite>

                                        <a data-toggle="collapse" data-parent="#accordion" href={`#collapse-${item.id}`}
                                           aria-expanded="true" aria-controls={`collapse-${item.id}`} className="text-muted mr-3" id={`item-${item.id}-commentaires`}>
                                            <i className={"dripicons-message ml-3 mr-2"}></i>
                                            <span className={"font-weight-bold"}> Commentaires</span>
                                        </a>
                                    </footer>

                                    {/* Accordion - Comment*/}
                                    <div id="mt-1">
                                        <div className="card mt-2 mb-0">
                                            <div id={`collapse-${item.id}`} className="collapse"
                                                 aria-labelledby={`item-${item.id}-commentaires`} data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="coment-bottom bg-white p-2 px-2">
                                                        <div className="d-flex flex-row add-comment-section mt-1 mb-1">
                                                            {/*
                                                    <img className="img-fluid img-responsive rounded-circle mr-1"
                                                    src="" width="38"/>
                                                    */}
                                                            <input type="text" className="form-control mr-3"
                                                                   placeholder="Add comment"/>
                                                            <button className="btn btn-primary" type="button"><i
                                                                className={"fa fa-check font-size-14"}></i></button>
                                                        </div>
                                                    </div>

                                                    <ul>
                                                        <li className="media">
                                                            <span className="round">
                                                                <img className="rounded-circle header-profile-user mr-3"
                                                                     src="../assets/images/users/avatar-1.jpg"
                                                                     alt="Header Avatar"/>
                                                            </span>
                                                            <div className="media-body">
                                                                <h6 className="user">Utilisateur</h6>
                                                                <p className="text">Bought your "Palace of
                                                                    Versailles"</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </blockquote>
                            ))

                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ticket;