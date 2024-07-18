import '../index.css';
import programming from '../pictures/programming.webp';
function Medaillion() {
    return(
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${programming})` }}>
            <div className="bg-gray-700 bg-opacity-85 p-10">
                <h2 className="text-2xl font-bold text-white">Medailonek</h2>
                <p className="text-white p-4">
                    Jsem studentem aplikované informatiky na Univerzitě Jana Evangelisty Purkyně, kde se specializuji na softwarové inženýrství
                    a databáze.
                </p>
            </div>
        </div>
    )
}

export default Medaillion;