import { auth } from '@/auth'
import { login, logout } from '@/lib/actions';

async function Header() {
    const sesion = await auth()

    return (
        <div className='bg-blue-800 text-white'>
            {sesion
                ?
                <form action={logout}>
                    <button>LOGOUT</button>
                </form>
                :
                <form action={login}>
                    <button>LOGIN</button>
                </form>

            }
        </div>
    );
}

export default Header;