import * as E from './styled';
import error from '../../messages/error';

export default function ErrorPage() {
    return (
        <E.Container>
            <div>
                <img src='https://ourageofadventure.files.wordpress.com/2014/08/zordon-dying.png' width='250px' alt='erro' />
                <h1>Status: 404</h1>
                <p>{error.notFound}</p>
            </div>
        </E.Container>
    );
}