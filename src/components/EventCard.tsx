import Button from "./Button";

interface EventCardProps {
    title: string;
    deskripsi: string;   
}

const EventCard: React.FC<EventCardProps> = ({
    title,
    deskripsi,
}) => {
    return (
        <div className="bg-white p-4 rounded-lg border-r-4 border-red-900 shadow-md text-left hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3 text-red-900">{title}</h3>
            <p className="text-black text-10px mb-3 leading-relaxed">{deskripsi}</p>
            <Button 
            title="Info Selengkapnya"
            variant="primary"
            className="mt-4"
            />
        </div>
    );
};

export default EventCard;