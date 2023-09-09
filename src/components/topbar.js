export const Topbar = () => {
    return (
        <div className="p-5 h-16 md:h-2/6 w-screen bg-[#1f203a] justify-between align-center flex flex-row">
            <div>
                <span className="font-thin text-slate-300 text-1xl md:text-base sm:text-xs truncate ...">
                    Olá, seja bem-vindo(a) ao meu portfólio!
                </span>
            </div>            
            <div className="justify-end">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}