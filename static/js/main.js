	const contentWayPoint = () => {
		$('.animate-box').waypoint( function( direction ) {
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				$(this.element).addClass('fadeInUp animated');
			}
		} , { offset: '75%' } );
  };
  
  const startTimer = () => {
		const countDownDate = new Date("Jul 28, 2018 13:00:00").getTime();
		const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("days").innerHTML = days +" <small>days</small>";
      document.getElementById("hours").innerHTML = hours + " <small>hours</small> ";
      document.getElementById("minutes").innerHTML = minutes + " <small>minutes</small> ";
      document.getElementById("seconds").innerHTML = seconds + " <small>seconds</small> ";

      // If the count down is finished, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "The Wedding Ceremony is Over";
      }
    }, 1000);	
  }

	$(() => {
    contentWayPoint();
    startTimer();
	});
