import '../index.css';
import programming from '../pictures/programming.webp';
function Medaillion() {
    return(
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: `url(${programming})` }}>
            <div className="bg-gray-700 bg-opacity-85 p-10">
                <div className="container mx-5">
                    <h2 className="text-2xl font-bold text-white">Medailonek</h2>
                    <p className="text-white p-4">
                        Jsem studentem aplikované informatiky na Univerzitě Jana Evangelisty Purkyně, kde se specializuji na softwarové inženýrství
                        a databáze.
                    </p>
                    <h2 className="text-2xl font-bold text-white">Moje dovednosti:</h2>
                    <ul class="list-disc text-white p-2 mx-6">
                        <li>Python - Entry level Engineer</li>
                        <li>C# - Entry level Engineer</li>
                        <li>PHP - Entry level Engineer</li>
                        <li>SQL - Entry level Engineer</li>
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default Medaillion;