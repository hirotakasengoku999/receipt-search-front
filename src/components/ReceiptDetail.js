import React from 'react'

const ReceiptDetail = (props) => {
    return (
        <div>
            <table className='table table-bordered'>
                <tbody>
                    <tr>
                        <th className='w-25 bg-light'>レセ電コード</th>
                        <td>{props.selectedReceipt.code}</td>
                    </tr>
                    <tr>
                        <th className='w-25 bg-light'>名称</th>
                        <td>{props.selectedReceipt.name}</td>
                    </tr>
                    <tr>
                        <th className='w-25 bg-light'>カナ</th>
                        <td>{props.selectedReceipt.kana}</td>
                    </tr>
                    <tr>
                        <th className='w-25 bg-light'>点数</th>
                        <td>{props.selectedReceipt.points}</td>
                    </tr>
                    <tr>
                        <th className='w-25 bg-light'>入外</th>
                        <td>{props.selectedReceipt.in_or_out}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReceiptDetail
