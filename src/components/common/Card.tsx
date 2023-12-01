import React from 'react';
import Modal from '../../context/ModalContext';
import { useModal } from '../../context/ModalContext';

interface CardProps {
    id: string,
    price: string,
    amount: string,
    title: string,
    desc: string,
    img: string
};

const Card: React.FC<CardProps> = ({ price, amount, title, desc, img}) => {
    const { showModal } = useModal();
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <div className='card-badge'>
                        <span>{price}</span>
                        <span>/</span>
                        <span>{amount}</span>
                    </div>
                    <img src={img} alt="" />
                </div>
                <div className='card-body'>
                    <h3 className='card-title | fw-bold'>{title}</h3>
                    <p className='card-desc | fw-regular'>{desc}</p>
                </div>
                <div className='card-footer'>
                    <button className='btn btn-secondary'>Ətraflı məlumat</button>
                    <button className='btn btn-success' onClick={showModal}>Müraciət et</button>
                </div>
            </div>
            <Modal />
        </>
    )
};

export default Card;