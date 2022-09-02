import React, {useState} from 'react';
import axios from 'axios';
import ReceiptDetail from './ReceiptDetail';

const DrfApiFetch = () => {

    const [selectedReceipt, setSelectedReceipt] = useState([]);
    const [code, setCode] = useState("");

    const getReceipt = () => {
        axios.get(`http://127.0.0.1:8000/app/ReceiptCodes/${code}`)
            .then(res => {setSelectedReceipt(res.data)
        });
    };
    
    return (
        <div className='receipt-search'>
            <main className="receipt-search-main">
                <div className='input-group'>
                    <div className='input-group-text'>レセ電コード</div>
                    <input className='form-control' type="text" value={code} onChange={evt=>{setCode(evt.target.value)}} placeholder="レセ電コードを入力してください"/>
                    <button className='input-group-btn btn btn-primary' type='button' onClick={()=>getReceipt()}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className='mt-5'>
                    {selectedReceipt.code && 
                        <ReceiptDetail selectedReceipt={selectedReceipt} />
                    }
                </div>
            </main>
        </div>
    )
}

export default DrfApiFetch
