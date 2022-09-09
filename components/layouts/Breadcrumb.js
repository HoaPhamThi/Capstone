import React from 'react';
import { useRouter } from 'next/router';

const Breadcrumb = (props) => {
    const router = useRouter();
    return (
        <div className="page-title">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>{props.title}</h1>
                    </div>
                    <div className="col-7">
                        <nav>
                            <ol className="breadcrumb">
                                <li
                                    className="breadcrumb-item"
                                    onClick={() =>
                                        router.push(
                                            {
                                                pathname: '/',
                                            },
                                            undefined,
                                            { scroll: false },
                                        )
                                    }>
                                    Home
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {props.title}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Breadcrumb;
