interface SpeakerCardProps {
    foto: string;
    nama: string;
    materi: string;
    jabatan: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
    foto,
    nama,
    materi,
    jabatan,
}) => {
    return (
        <div className="cursor-pointer flex flex-col items-center gap-4 group">
            <div className="relative h-1/3 z-1">

            <img 
            src={foto} 
            alt={nama} 
            className="h-64 w-64 rounded-full border-10 border-red-900 mx-auto group-hover:scale-105 transition-transform duration-300 object-cover"
            />
            </div>

            <div className="cursor-pointer flex flex-col items-center h-2/3 border-4 border-red-900 w-full p-4 mt-[60px] rounded-lg relative py-10 shadow-[0_15px_30px_rgba(127,29,29,0.7)] hover:shadow-[0_25px_50px_rgba(127,29,29,0.9)] transition-all duration-300">
                
                <div className="absolute bottom-0 px-4 py-6 rounded-lg w-full h-full flex flex-col items-center gap-2 group-hover:gc-red-200 backdrop-blur-sm transition-all duration-300"></div>
                <div className="absolute left-0 right-0 bottom-0 items-center justify-center p-4 flex flex-col gap-2">
                    <h3 className="text-2xl text-red-900 font-bold">{nama}</h3>
                    <p className="text-lg text-gray-600 text-center">{materi}</p>
                    <p className="text-lg text-gray-600 text-center">{jabatan}</p>
                </div>
            </div>
        </div>
    );
};

export default SpeakerCard