import { login } from "@/lib/actions";


function PaginaLogin() {
    return ( 
        <div>
            <form action={login}>
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default PaginaLogin;