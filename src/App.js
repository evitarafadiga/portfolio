import { ResponsibleCard } from "./components/ResponsibleCard";
import { Topbar } from "./components/topbar";
import { BoxWrapper } from "./components/BoxWrapper";
import { projects } from "./shared/projects";
import { gallery } from "./shared/gallery";
import { background, preview, profilePicture } from "./shared/data";
import { IconsSet } from "./components/IconsSet";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div className="min-w-full">
      <header className="">
        <Topbar />
      </header>

      <body>
        <div className="">
          <div className="h-1/2 bg-white">
            <div>
              <img className="drop-shadow-xl h-56 w-full object-cover md:h-60 md:w-full lg:h-64 lg:w-full" src={background.img} alt={background.alt} />
            </div>
            <div className="pt-[4px] place-items-center flex justify-center align-center">
              <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-white rounded-full justify-center align-center flex place-items-center">
                <img className="p-1 object-cover rounded-full h-full " src={profilePicture.img} alt={profilePicture.alt} />
              </div>
            </div>
          </div>

          <div className="justify-center flex flex-col place-items-center align-center">
            <div className="h-2/6 tracking-widest pt-40 md:pt-60 md:text-3xl uppercase text-2xl flex">
              <p>Lázaro</p>&nbsp;
              <p className="font-semibold">Santos</p>
            </div>
            <div className="p-10 md:w-[800px]">
              <div className="text-1xl text-justify font-mono">
                Arquiteto de software, formado em análise e desenvolvimento de sistemas pela FATEC e pós-graduado em T.I. na UFABC.
                Já trabalhei com projetos grandes, jogos independentes e
                aplicações Domain Driven Design para diversos fins utilizando as mais variadas stacks: JavaScript, HTML/CSS, React, SQL, AWS, GoLang, Python e TypeScript são as principais.
                Fluente em inglês e apaixonado por línguas, com interesse em aprender francês e japonês.
              </div>
            </div>
            <div className="p-4 py-6">
              <IconsSet />
            </div>
          </div>

          <div className="place-items-center justify-center align-center flex flex-col py-4">
            <div className="flex flex-row md:p-8 bg-slate-200">
              <div className="flex flex-col p-8">

                <div className="flex p-4 items-center ">
                  <div className="py-2">
                    <span className="md:h-2/6 pt-40 md:pt-60 md:text-5xl lowercase text-4xl">
                      <p>eu sou um</p>
                      <p className="font-bold">Programador</p>
                    </span>
                    <div className="py-4 flex items-center">
                      <img className="overflow-hidden" src={preview[2].img} alt={preview[2].alt} />
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="py-4">
                    <span className="md:h-2/6 pt-40 md:pt-60 md:text-5xl lowercase text-4xl">
                      <p>e um</p>
                      <p className="font-bold">arquiteto de sw</p>
                    </span>
                  </div>
                  <div className="flex w-full py-4">
                    <img src={preview[1].img} alt={preview[1].alt} />
                  </div>

                  <div className="p-4 md:pt-10">
                    <a href="https://github.com/evitarafadiga" className="border border-gray-500 text-gray-500 px-6 py-2 hover:border-slate-200 justify-center flex align-center">
                      <p className="text-2xl p-8">ACESSE MEU GITHUB</p>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="justify-between align-center py-2 px-4">
            <div className="p-2 grid gap-4">
              <span className="px-10 text-4xl text-slate-800 font-semibold font-mono">
                Vídeos
              </span>
              <div className="py-4">
                <span className="md:h-2/6 pt-40 md:pt-60 md:text-5xl lowercase text-4xl">
                  <p>projeto Casi Castor</p>
                  <p className="font-bold">Beta</p>
                </span>
              </div>
              <VideoPlayer videoUrl={'https://i.imgur.com/yIHGQmt.mp4'}></VideoPlayer>
              <VideoPlayer videoUrl={'https://i.imgur.com/FDd1MEh.mp4'}></VideoPlayer>
              <div className="py-4">
                <span className="md:h-2/6 pt-40 md:pt-60 md:text-5xl lowercase text-4xl">
                  <p>projeto Caldo de Esgoto</p>
                  <p className="font-bold">Indie Game</p>
                </span>
              </div>
              <VideoPlayer videoUrl={'https://i.imgur.com/R6kHQQE.mp4'}></VideoPlayer>
              <VideoPlayer videoUrl={'https://i.imgur.com/wi7T7pM.mp4'}></VideoPlayer>
            </div>
          </div>
          <div className="justify-between align-center py-2 px-4">
            <div className="p-2">
              <span className="px-10 text-4xl text-slate-800 font-semibold font-mono">
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
              <p>e também sou</p>
              <p className="font-bold">ilustrador</p>
              <p>por hobbie</p>
            </span>
            <div className="flex place-items-center flex-row py-4 w-full">
              <BoxWrapper boxes={gallery} />
            </div>
          </div>

          <div className="py-4 place-items-center flex align-center justify-center">
            <a href="https://www.instagram.com/lazahov/">
              <button className="bg-[#ffa54d] text-2xl py-2 px-8 font-bold text-white w-[300px] h-[100px]">
                VER MAIS
              </button>
            </a>
          </div>
        </div>

        <div className="py-4 px-6 bg-slate-800">
          <div className="flex text-white text-2xl flex-col place-items-end p-4">
            <p>Entre em contato:</p>
            <IconsSet />
          </div>
        </div>
      </body>

      <footer>
        <div className="bg-[#1f203a] h-2/6 justify-center text-center align-center p-5 text-slate-300">
          Lázaro Santos - {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default App;
