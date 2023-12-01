import scrollDownIcon from '../../assets/images/scrollDownIcon.svg';
import { useTranslation } from "react-i18next";
import { useModal } from '../../context/ModalContext';
import Modal from '../../context/ModalContext';
import heroBg from '../../assets/images/hero.svg';

const PrimaryHero = () => {
    const { t } = useTranslation();

    const { showModal } = useModal();

    const handleScrollDown = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className="primary-hero" style={{backgroundImage: `url(${heroBg})`}}>
            <div className='primary-hero-content'>
                <p className='pr-hero-p-fs text-white fw-regular'>{t('subTitle')}</p>
                <h1 className='text-white fs-pr-hero text-uppercase fw-bold' style={{ marginTop: '1rem', marginBottom: '3.5rem' }}>{t('title')}</h1>
                <button className="btn btn-success" onClick={showModal}>{t('apply')}</button>
            </div>
            <Modal />
            <button className='scroll-down-btn' onClick={handleScrollDown}><img src={scrollDownIcon} alt="" /></button>
        </div>
    )
}

export default PrimaryHero