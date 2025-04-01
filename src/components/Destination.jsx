import React from 'react';

function Destination() {
	return (
		<section className='destination'>
			<section className='destination__location destination__location--light-grey'>
				<h2 className='destination__title'>
					Stockholm
					<br />
					<time className='destination__time' datetime='10:30'>
						10.30
					</time>
				</h2>
			</section>
			<section className='destination__location destination__location--lighter-grey'>
				<h2 className='destination__title'>
					Göteborg
					<br />
					<time className='destination__time' datetime='14:45'>
						14.45
					</time>
				</h2>
			</section>
		</section>
	);
}

export default Destination;
