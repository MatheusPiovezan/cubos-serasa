import * as N from './styled';
import { getItem } from '../../../../../utils/storage';
import DownArrow from '../../../../../assets/down-arrow.svg';
import { useState } from 'react';
import Modal from '../Modal';

export default function ProfileUser() {
    const name = getItem('userName').split(" ");
    const [showModal, setShowModal] = useState(false);
    return (
        <N.Container>
            <div onClick={() => setShowModal(!showModal)}>
                <div className='profile'>
                    <span>{name[0].toUpperCase().substr(0, 1)}</span>
                    <span>{name[1] && name[1].toUpperCase().substr(0, 1)}</span>
                </div>
                <div className='profile_modal'>
                    <h2>{name[0]}</h2>
                    <img src={DownArrow} alt='seta para baixo' />
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} />}
        </N.Container>
    );
}