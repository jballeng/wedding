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
                        <h3 className=''>Check In</h3>
                        <h4>2:30 in the afternoon</h4>
                        <h4>Markree Castle & Courtyard</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Pre-Rehearsal Activities</h3>
                        <h4>4:30 in the afternoon</h4>
                        <h4> Markree Castle Gardens</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Rehearsal Dinner</h3>
                        <h4>5:30 in the evening </h4>
                        <h4>Markree Castle</h4>
                        <h4 className="italic">Attire: Cocktail</h4>
                    </div>
                    <div className="grid place-items-center">
                        <h3>Irish Trad Music from The Asgards</h3>
                        <h4>8 in the evening</h4>
                        <h4>The Gin Bar at Markree Castle</h4>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3 pb-4">
                    <div className='flex justify-center'>
                        <h2 className="font-bold">Thursday, April 18</h2>
                    </div>
                    <div className='grid place-items-center'>
                        <h3>Breakfast</h3>
                        <h4>9 to 10:30 in the morning</h4>
                        <h4>Markree Castle Banquet Hall</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3>Teas & Coffees</h3>
                        <h4>1 to 3 in the afternoon</h4>
                        <h4>Markree Castle Lobby & Lounges</h4>
                    </div>

                    <div className='grid place-items-center'>
                        <h3 className=''>Wedding Ceremony</h3>
                        <h4>4 in the afternoon</h4>
                        <h4>Markree Castle Chapel & Banquet Hall</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Drink Reception</h3>
                        <h4>4:30 in the afternoon</h4>
                        <h4>Markree Castle Lounges</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Wedding Banquet</h3>
                        <h4>6 in the evening</h4>
                        <h4>Markree Castle Banquet Hall</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Music & Dancing</h3>
                        <h4>8:30 in the evening</h4>
                        <h4>Markree Castle Dance Hall</h4>
                        <h4 className="italic">Attire: Black Tie</h4>
                    </div>

                </div>
                <div className="flex flex-col items-center gap-3 pb-4">
                    <div className='flex justify-center'>
                        <h2 className="font-bold">Friday, April 19</h2>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Farewell Brunch</h3>
                        <h4>9 to 10:30 in the morning</h4>
                        <h4>Markree Castle Banquet Hall</h4>
                    </div>
                    <div className='grid place-items-center'>
                        <h3 className=''>Checkout</h3>
                        <h4>12 in the afternoon</h4>
                        <h4>Markree Castle & Courtyard</h4>
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default Events