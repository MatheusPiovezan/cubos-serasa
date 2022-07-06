import * as N from './styled';
import IconNoResult from '../../../../assets/icon-no-results.svg';
import PeaploNoResult from '../../../../assets/peaplo-no-result.svg';

export default function NoResultSearch() {
    return (
        <N.Container>
            <div>
                <img src={PeaploNoResult} alt='sem resultado' className='peaple' />
                <img src={IconNoResult} alt='sem resultado' />
            </div>
            <h2>Nenhum resultado foi encontrado!</h2>
            <h3>Verifique se a escrita está correta</h3>
        </N.Container>
    );
}