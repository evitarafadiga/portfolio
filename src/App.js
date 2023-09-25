import { ResponsibleCard } from "./components/ResponsibleCard";
import { Topbar } from "./components/topbar";
import { BoxWrapper } from "./components/BoxWrapper";
import { projects } from "./shared/projects";
import { gallery } from "./shared/gallery";
import { background, preview, profilePicture } from "./shared/data";

function App() {
  return (
    <div className="min-w-full">
      <header className="">
        <Topbar />
      </header>

      <body>
        <div>
          <div>
            <div className="h-1/2 bg-white">
              <div>
                <div>
                  <img className="drop-shadow-xl h-56 w-full object-cover md:h-60 md:w-full lg:h-64 lg:w-full" src={background.img} alt={background.alt} />
                </div>
                <div className="pt-[4px] place-items-center flex justify-center align-center">
                  <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-white rounded-full justify-center align-center flex place-items-center">
                    <img className="p-1 object-cover rounded-full h-full h-full " src={profilePicture.img} alt={profilePicture.alt} />
                  </div>
                </div>
              </div>
            </div>

            <div className="justify-center flex flex-col place-items-center align-center">
              <div className="h-2/6 tracking-widest pt-40 md:pt-60 md:text-3xl uppercase text-2xl flex">
                <p>Lázaro </p>&nbsp;
                <p className="font-bold">Santos</p>
              </div>
              <div className="px-2 w-[500px] pt-4 text-1xl text-justify	">
                Desenvolvedor e arquiteto de software freelancer.
                Analista de sistemas pós-graduado.
                Já desenvolvi jogos independentes de projetos pessoais e
                aplicações diversas utilizando banco de dados relacional
                e linguagens orientadas a objetos. Fluente em inglês e
                apaixonado por línguas, estudo atualmente francês e japonês
                com o objetivo de me tornar poliglota.

              </div>
            </div>
          </div>

          <div className="place-items-center flex justify-center align-center flex flex-col py-4">
            <div className="flex flex-row p-4 bg-slate-200">
              <div className="flex h-1/2">

                <div className="w-1/2 h-1/2 p-4">
                  <div className="py-2">
                    <span className="h-2/6 pt-40 md:pt-60 md:text-5xl lowercase text-4xl">
                      <p>sou um</p>
                      <p className="font-bold">Programador</p>
                    </span>
                  </div>
                  <div className="py-4">
                    <img src={preview[0].img} alt={preview[0].alt} />
                  </div>
                </div>
                <div className="w-1/2 h-1/2 p-4">
                  <div className="py-4">
                    <img src={preview[1].img} alt={preview[1].alt} />
                  </div>
                  <div className="py-4 h-24">
                    <a href="https://github.com/evitarafadiga" className="border border-gray-500 border-2 text-gray-500 px-6 py-2 hover:border-slate-200 justify-center flex align-center w-10/12">
                      <p className="text-base">ACESSE MEU GITHUB</p>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="justify-between align-center py-2 px-4">
            <div className="p-2">
              <span className="px-10 text-4xl text-slate-800 font-semibold font-thin">
                Projetos
              </span>
            </div>

            <div className="grid grid-cols-1 grid-flow-row md:grid-cols-2">

              {projects.map(function (d, idx) {
                return (
                  <div className="p-2">
                    <ResponsibleCard key={idx} img={d.img} alt={d.alt} title={d.title} subtitle={d.subtitle} href={d.href} desc={d.desc} />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex justify-center align-center flex-col py-4">
            <div className="flex place-items-center flex-row bg-slate-200">
              <div className="py-4">
                <span className="h-2/6 pt-40 md:pt-60 md:text-5xl lowercase text-4xl">
                  <p>e sou também</p>
                  <p className="font-bold">ilustrador</p>
                  <p>nas horas vagas</p>
                </span>
                <div className="py-4">
                  <BoxWrapper boxes={gallery} />
                </div>
              </div>

            </div>
          </div>

          <div className="py-4 place-items-center flex align-center justify-center">
            <a href="https://www.instagram.com/vinithewalker/">
              <button className="bg-[#ffa54d] py-2 px-8 font-bold text-white">
                VER MAIS
              </button>
            </a>
          </div>
        </div>

        <div className="py-2 bg-slate-800">
          <div className="flex text-white text-2xl flex-col place-items-end p-4">
            <p>Entre em contato comigo!</p>
            <div className="flex flex-row p-2">
              <a href="https://www.artstation.com/evitarafadiga" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M2 377.4l43 74.3A51.35 51.35 0 0 0 90.9 480h285.4l-59.2-102.6zM501.8 350L335.6 59.3A51.38 51.38 0 0 0 290.2 32h-88.4l257.3 447.6 40.7-70.5c1.9-3.2 21-29.7 2-59.1zM275 304.5l-115.5-200L44 304.5z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/lazvsantos/" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="white" class="bi bi-linkedin" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/vinithewalker/" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                </svg>
              </a>
              <a href="https://api.whatsapp.com/send?phone=5511986914270" className="px-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </body>

      <footer>
        <div className="bg-[#1f203a] h-2/6 justify-center text-center align-center p-5 text-slate-300">
          Lázaro Santos - 2023
        </div>
      </footer>
    </div>
  );
}

export default App;
