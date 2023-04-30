import React, {useEffect, useState} from 'react';

const TicketAdd = () => {

    const initial = {
        sujet: '',
        description : '',
        statut : ''
    }

    let mounted = false

    const [data, setdata] = useState({... initial})
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    const getTicket = () => {
        fetch('http://localhost:8080/ticket/', 
        {method: 'GET'})
        .then(response => response.json())
        .then(response => {
        setList(response)
        setLoading(false)
        })
        .catch(err => console.log('user', err))
    }

    const addTicket = e =>{
        e.prevenDefault();
        fetch('http://localhost:8080/ticket/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(() => {
        getTicket();
        setdata({...initial});
    })
    .catch(err => console.log('add', err));
    }

    useEffect(() => {
        if (!mounted) getTicket();
        return () => mounted = true
    }, []);

    return (
        <>
            {/* Form - Ajouter un ticket */}
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <div id="accordion">
                            <div className=" mb-0">
                                <div className="" id="headingOne">
                                    <h5 className="m-0 text-center">
                                        <a data-toggle="collapse" data-parent="#accordion"
                                           href="#collapseOne" aria-expanded="true"
                                           aria-controls="collapseOne" className="btn btn-dark">
                                            <i className={"mdi mdi-plus-circle-outline text-sucess mr-2"}></i>
                                            <span>Ajoute un ticket </span>
                                        </a>
                                    </h5>
                                </div>

                                <div id="collapseOne" className="collapse"
                                     aria-labelledby="headingOne" data-parent="#accordion">
                                    <div className="card-body">
                                        <form className="needs-validation" noValidate action="#" onSubmit={e => addTicket(e)}>

                                            <div className="col-md-12">
                                                <div className="row">

                                                    <div className="col-md-12 mb-2">
                                                        <label htmlFor="subject">Sujet</label>
                                                        <input type="text" id="subject" value={data.sujet} className="form-control" placeholder="Nouveau sujet"
                                                            onChange={e => setdata({...data,sujet: e.target.value})} required/>
                                                    </div>

                                                    <div className="col-md-12 mb-2">
                                                        <label htmlFor="description">Description</label>
                                                        <textarea name="description" value={data.description} className="form-control" placeholder="Description du ticket" rows={1}
                                                                onChange={e => setdata({...data,description: e.target.value})} required/>
                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="">Assignée à </label>
                                                        <select className="custom-select" required>
                                                            <option value="" disabled>Choisir un exécutant</option>
                                                            <option value="1">Ange-Maurel Serou</option>
                                                            <option value="2">Enoch Zabra</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="tags">Tags</label>
                                                        <select className="custom-select">
                                                            <option value="" disabled>Coisr un tags</option>
                                                            <option value="1">Opération</option>
                                                            <option value="2">Facture</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-md-4 mb-3">
                                                        <label htmlFor="tags">Statut</label>
                                                        <select className="custom-select">
                                                            <option value="" disabled>Choisir statut</option>
                                                            <option value="2">En cours</option>
                                                            <option value="2">Terminé</option>
                                                            <option value="2">Fermé</option>
                                                        </select>
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
                                                                <i className="mdi mdi-delete-outline"></i>
                                                            </button>

                                                            <button className="btn btn-primary btn-sm font-size-16 ml-2"
                                                                    type="submit" data-toggle="tooltip"
                                                                    data-placement="top"
                                                                    data-original-title="Enregistrer la catégorie">
                                                                <i className="mdi mdi-send-check mr-1"></i>
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
                        </div>
                    </div>
                </div>
            </div>
            {/* end col */}
        </>
    )
}

export default TicketAdd;