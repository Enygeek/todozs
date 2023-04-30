import React from 'react';

const Ticket = () => {
    return (
        <>
            {/* Un ticket */}
            <div className="col-xl-12">
                <div className="card">
                    <div className="card-body">
                        <blockquote className="card-bodyquote mb-0">
                            <div className={"card-header"}>
                                {/* Statut */}
                                <span className="float-right"> <i className={"dripicons-calendar mr-2 mt-2"}></i> 30.04.2023</span>
                                {/* Checkbox & Sujet */}
                                <div className="form-check">
                                    <input className="form-check-input mr-2" type="checkbox" value="" id="defaultCheck2"/>
                                    <label className="text-muted text-uppercase font-weight-bold ml-1" htmlFor="defaultCheck2">
                                        Sujet du ticket
                                    </label>
                                </div>
                            </div>

                            {/* Description */}
                            <p className={"mt-1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                                erat a ante.</p>


                            <footer className="blockquote-footer" id="accordion">
                                {/* Statut */}
                                <span className="badge badge-warning font-size-12 float-right">
                                    en attente
                                </span>

                                <i className={"dripicons-user"}></i>
                                <span className={"font-weight-bold ml-1"}> à </span> :
                                <cite title="Source Title"> Ange-Maurel   </cite>

                                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="text-muted mr-3">
                                    <i className={"dripicons-message ml-3"}></i>
                                    <span className={"font-weight-bold"}> 17 Commentaires</span>
                                </a>
                            </footer>

                            {/* Accordion - Comment*/}
                            <div id="accordion mt-1">
                                <div className="card mt-2 mb-0">
                                    <div id="collapseOne" className="collapse"
                                         aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            Comment.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ticket;