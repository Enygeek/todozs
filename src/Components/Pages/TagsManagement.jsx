import React from 'react';
import Base from "../General/Base";
import Footer from "../General/Footer";
import TagsList from "../Elements/TagsList";


const TagsManagement = () => {
    return (
        <>
            <Base />
            <div className="main-content">

                <div className="page-content">
                    <div className="container-fluid">

                        {/* start page title */}
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18">Gestion des tags</h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a
                                                href="javascript: void(0);">Administration</a></li>
                                            <li className="breadcrumb-item active">#TAGS</li>
                                        </ol>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* end page title */}

                        <div className="row">
                            <div className="col-12">
                                <div className="card text-center p-2 pt-3">
                                    <h4 className="header-title text-uppercase">

                                        <i className="mdi mdi-tag-text-outline mr-2"></i>
                                        <span className={""}>
                                            Gestion des <span
                                            className="text-danger font-weight-bold">Tags</span>
                                        </span>
                                    </h4>
                                </div>
                            </div>
                            {/* end col */}
                        </div>
                        {/* end row */}

                        <div className="row">
                            <TagsList />
                            {/* end col */}
                        </div>
                        {/* end row */}

                    </div>
                    {/*}container-fluid */}
                </div>
                {/* End Page-content */}

                {/* ==========================
                              FOOTER
                =============================== */}
                <Footer />

                {/* ==========================
                            MODAL
                =============================== */}

            </div>
        </>
    )
}

export default TagsManagement;