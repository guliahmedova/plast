import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import closepopup from '/images/closePopup.svg';

interface ModalContextProps {
    children: ReactNode;
};

interface ModalContextData {
    isModalVisible: boolean;
    showModal: () => void;
    hideModal: () => void;
};

const ModalContext = createContext<ModalContextData | undefined>(undefined);

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export function ModalProvider({ children }: ModalContextProps) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false);
    };

    const value: ModalContextData = {
        isModalVisible,
        showModal,
        hideModal,
    };

    return (<ModalContext.Provider value={value}>{children}</ModalContext.Provider>);
};



const Modal = () => {
    const { isModalVisible, hideModal } = useModal();

    const [formData, setFormData] = useState({
        category: '',
        weight: '',
        fullName: '',
        phoneNumber: '',
        id: Math.floor(Math.random() * 10) + 1
    });

    const { t } = useTranslation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        hideModal();
        localStorage.setItem('formData', JSON.stringify(formData));
        setFormData({ category: '', weight: '', fullName: '', phoneNumber: '', id: 0 });
    };

    useEffect(() => {
        const close = (e: KeyboardEvent) => {
            if (e.keyCode === 27) {
                hideModal();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, []);

    return isModalVisible ? (
        <>
            <div className="blur-bg" onClick={hideModal}></div>
            <div className="apply-popup">
                <div className='popup-header' onClick={hideModal}>
                    <img src={closepopup} alt="" />
                </div>
                <h1 className='popup-title'>{t('apply')}</h1>
                <form className='popup-form' onSubmit={handleSubmit}>
                    <select name="category" value={formData.category} onChange={handleChange} id="categories" className='input'>
                        <option value="Satdığınız malın kateqoriyası">Satdığınız malın kateqoriyası</option>
                        <option value="Example 1">Example 1</option>
                        <option value="Example 2">Example 2</option>
                        <option value="Example 3">Example 3</option>
                    </select>
                    <input type="text" required name='weight' onChange={handleChange} value={formData.weight} className='input' placeholder='Çəkisi' />
                    <input type="text" required name='fullName' onChange={handleChange} value={formData.fullName} className='input' placeholder='Ad və soyad' />
                    <input type="text" required name='phoneNumber' onChange={handleChange} value={formData.phoneNumber} className='input' placeholder='Əlaqə nömrəniz' />
                    <button className='popup-btn | btn btn-success'>{t('apply')}</button>
                </form>
            </div>
        </>
    ) : null;
};

export default Modal;