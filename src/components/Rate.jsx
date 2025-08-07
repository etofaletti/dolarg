import { useEffect, useState } from 'react'
import './Rate.css'

export default function Rate({ rateType }) {

    const [rate, setRate] = useState();

    useEffect(() => {
        fetch('https://dolarapi.com/v1/dolares')
            .then(res => res.json())
            .then(data => {
                const result = data.find(item => item.casa.toLowerCase() === rateType.toLowerCase());
                setRate(result || null);
            })
            .catch(err => {
                console.error('Error al obtener la cotización.', err);
            })
    }, [rateType]);

    if (!rate) {
        return <div className="cardRate">Cargando cotización...</div>;
    }

    return (
        <>
            <div className="cardRate">
                <div className="title">{rate.nombre.toUpperCase() === 'BOLSA' ? 'MEP' : rate.nombre.toUpperCase()}</div>
                <div className="rates">
                    <div className="rate">
                        <div className="label">COMPRA</div>
                        <div className="value">${rate.compra}</div>
                    </div>
                    <div className="rate">
                        <div className="label">VENTA</div>
                        <div className="value">${rate.venta}</div>
                    </div>
                </div>
            </div>
        </>
    )
}