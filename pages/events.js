import Layout from "../components/layout"

const Events = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-evenly pb-8 lg:flex-row">
                <div className="flex flex-col items-center gap-3 pb-4">
                    <div className='flex justify-center'>
                        <h2 className="font-bold">Wednesday, April 17</h2>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Grounds Accessible</h3>
                        <h4>2:00 in the afternoon</h4>
                        <h4>Markree Castle & Courtyard</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Check In</h3>
                        <h4>3:00 in the afternoon</h4>
                        <h4>Markree Castle & Courtyard</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Pre-Rehearsal Activities</h3>
                        <h4>4:30 in the afternoon</h4>
                        <h4> Markree Castle Terrace & Gardens</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Irish Barbeque & Toasts</h3>
                        <h4>5:30 in the evening </h4>
                        <h4>Markree Castle Lower Level</h4>
                        <h4 className="italic">Attire: Cocktail</h4>
                    </div>
                    <div className="grid place-items-center">
                        <h3>Irish Trad Music from The Asgards</h3>
                        <h4>7:30 in the evening</h4>
                        <h4>Markree Castle Lower Level</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 pb-4">
                    <div className='flex justify-center'>
                        <h2 className="font-bold">Thursday, April 18</h2>
                    </div>
                    <div className='grid place-items-center'>
                        <h3>Breakfast</h3>
                        <h4>8:30 to 10:00 in the morning</h4>
                        <h4>Markree Castle & Courtyard Dining Rooms</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3>Light Lunch, Tea & Coffee</h3>
                        <h4>1 to 3 in the afternoon</h4>
                        <h4>Markree Castle Main Hall</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3>Guest Seating in the Chapel</h3>
                        <h4>from 3:30 in the afternoon</h4>
                        <h4>Markree Castle Chapel</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Wedding Ceremony</h3>
                        <h4>4 in the afternoon</h4>
                        <h4>Markree Castle Chapel</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Drink Reception</h3>
                        <h4>4:30 in the afternoon</h4>
                        <h4>Markree Castle Main Hall & Lounges</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Wedding Banquet</h3>
                        <h4>6 in the evening</h4>
                        <h4>Markree Castle Formal Dining Room</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Music & Dancing</h3>
                        <h4>from 9 in the evening</h4>
                        <h4>Markree Castle Gin Bars & Dance Floor</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Late Night Eats</h3>
                        <h4>11 in the evening</h4>
                        <h4>Markree Castle Butler's Kitchen</h4>
                        
                    </div>

                </div>
                <div className="flex flex-col items-center gap-3 pb-4">
                    <div className='flex justify-center'>
                        <h2 className="font-bold">Friday, April 19</h2>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Breakfast</h3>
                        <h4>8:30 to 10 in the morning</h4>
                        <h4>Markree Courtyard Dining Rooms</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Breakfast</h3>
                        <h4>9:30 to 11 in the morning</h4>
                        <h4>Markree Castle Dining Rooms</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Check Out</h3>
                        <h4>11 in the morning</h4>
                        <h4>Markree Courtyard</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Check Out</h3>
                        <h4>12 in the afternoon</h4>
                        <h4>Markree Castle</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default Events