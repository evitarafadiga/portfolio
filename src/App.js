import { ResponsibleCard } from "./components/ResponsibleCard";
import { Topbar } from "./components/topbar";
import { BoxWrapper } from "./components/BoxWrapper";
import { projects } from "./shared/projects";
import { gallery } from "./shared/gallery";
import { background, preview, profilePicture } from "./shared/data";
import { IconsSet } from "./components/IconsSet";

function App() {
  return (
    <div className="min-w-full">
      <header className="">
        <Topbar />
      </header>

      <body>
        <div>
          <div className="h-1/2 bg-white">
            <div>
              <img className="drop-shadow-xl h-56 w-full object-cover md:h-60 md:w-full lg:h-64 lg:w-full" src={background.img} alt={background.alt} />
            </div>
            <div className="pt-[4px] place-items-center flex justify-center align-center">
              <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-white rounded-full justify-center align-center flex place-items-center">
                <img className="p-1 object-cover rounded-full h-full h-full " src={profilePicture.img} alt={profilePicture.alt} />
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
            <div className="p-4 py-6">
              <IconsSet />
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

          <div className="bg-slate-200 flex justify-center align-center flex-col">
            <span className="h-2/6 md:text-5xl lowercase text-4xl p-4">
              <p>e sou também</p>
              <p className="font-bold">ilustrador</p>
              <p>nas horas vagas</p>
            </span>
            <div className="flex place-items-center flex-row py-4">
              <BoxWrapper boxes={gallery} />
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

        <div className="py-4 px-6 bg-slate-800">
          <div className="flex text-white text-2xl flex-col place-items-end p-4">
            <p>Entre em contato comigo!</p>
            <IconsSet />
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
