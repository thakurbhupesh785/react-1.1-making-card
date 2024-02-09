import profilePic from './assets/425761847_2055562858153718_3081855810315310958_n.jpg'

function Card () {

  return(
    <div className="card">
      <img className='card-image' src={profilePic} alt="profile picture"></img>
      <h2 className='card-title'>Bhupesh Thakur</h2>
      <p className='card-detail'>Student , still studying , play games</p>
    </div>
  )

}

export default Card