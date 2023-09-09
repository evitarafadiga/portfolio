import { ResponsibleCard } from "./components/ResponsibleCard";
import { Topbar } from "./components/topbar";

const img = "https://www.loudandquiet.com/files/2016/08/angel-olsen-3-nathanael-wood.jpg";
const alt = 'a';
const bg = 'https://media.pitchfork.com/photos/645e91b9cd576a0b9ef7fc02/1:1/w_3000,c_limit/All-Mirrors-2019-Angel-Olsen-Album.jpg';

function App() {
  return (
    <div className="">
      <header className="">
        <Topbar />
      </header>

      <body>
        <div>
          <div>
            <div className="w-screen h-1/2 bg-slate-200">
              <div>
                <div>
                  <img className="h-48 w-full object-cover md:h-[200px] md:w-full" src={bg} alt={alt} />
                </div>
                <div className="pt-[10px] place-items-center flex justify-center align-center">
                  <div className="absolute h-80 w-80 bg-white rounded-full justify-center align-center flex place-items-center">
                    <img className="p-1 object-cover rounded-full h-full h-full " src={img} alt={alt} />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-2/6 w-screen tracking-widest justify-center align-center flex pt-48 uppercase text-2xl">
              <p>Lázaro </p>&nbsp;
              <p className="font-bold">Santos</p>
            </div>
          </div>

          <div className="justify-between align-center py-2 px-4">
            <div className="p-2">
              <span className="px-10 text-4xl text-slate-800 font-semibold font-thin">
                Projetos
              </span>
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
          </div>

          <div className="justify-between align-center py-2 px-4">
            <div className="p-2">
              <span className="px-10 text-4xl text-slate-800 font-semibold font-thin">
                Projetos
              </span>
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
            <div className="p-2">
              <ResponsibleCard img={img} alt={'A'} title={'a'} subtitle={'a'} href={'#'} desc={'a'} />
            </div>
          </div>
        </div>
      </body>

      <footer>
        <div className="bg-[#1f203a] w-screen h-2/6 justify-center text-center align-center p-5 text-slate-300">
          Lázaro Santos - 2023
        </div>
      </footer>
    </div>
  );
}

export default App;
