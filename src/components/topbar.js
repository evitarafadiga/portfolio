export const Topbar = () => {
    return (
        <div className="p-8 h-32 md:h-2/6 min-w-screen bg-[#1f203a]  align-center">
            <div className="pt-10 flex flex-row justify-between">
                <span className="font-thin text-slate-300 text-1xl md:text-xl sm:text-xs truncate ...">
                    Olá, seja bem-vindo(x)!
                </span>
                <a className="justify-end" href={'https://www.linkedin.com/in/lazvsantos/'}>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </a>
            </div>
        </div>
    );
}