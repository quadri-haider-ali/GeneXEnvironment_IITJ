import React from 'react';
import validator from 'validator';
import './Table.css';

const Table = props => {
    if (!props.data.length) return <h5 className="text-muted m-4">No Results for {props.title}</h5>
    const keyExtractor = Object.keys(props.data[0])[props.keyExtractor];
    return (
        <React.Fragment>
            <h4 className="header">{props.title}</h4>
            <table className="table">
                <thead>
                    <tr>
                        {Object.keys(props.data[0]).map(label => <th key={label}>{label}</th>)}
                        {/* {props.actionTable && <th key='action'>Action</th>} */}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(item =>
                        <tr key={item[keyExtractor]}>
                            {Object.values(item).map(value => {
                                if (props.actionTable && value.toString().substr(0, 2) === 'fa') {
                                    const val = value.split(" ");
                                    return <td key={value} className="btn d-flex border border-primary text-center">
                                        {val.map(val_=><a key={val_} href="#" className="btn m-1 btn-default rounded-circle text-secondary bg-light"><i className={'fa '+val_}></i></a>)}
                                    </td>
                                } else if (validator.isURL(value.toString()) && !value.toString().includes('@')) {
                                    return <td key={value}><img src={value} alt="" width='200' className='img-thumbnail m-1' /></td>
                                } else {
                                    return <td key={value}>{value}</td>
                                }
                            })
                        }
                        </tr>)}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Table
