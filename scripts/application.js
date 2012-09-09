A = {


	setup: function(){

		var 
		pageUrl = document.location.href.split( '/' ).pop(),
		nav  = $( '<ul>' )


		//  Create navigation link to Home.
	
		nav.append(
			$( '<li>' ).append(

				$( '<a>' )
				.text( 'Home' )
				.attr( 'href', 'index.html' )
			)
		)
		nav.append( '<br />' )


		//  Create the extended navigation to all lessons and their pages
		//  based on our A.navigation{} object.

		A.navigation.forEach( function( lesson, lessonNumber ){

			var el
			
			lessonNumber = ( lessonNumber + 1 ).pad( 2 )
			el = $( '<li>' ).attr( 'title', lesson.date )
			nav.append( el )
			if( lesson.url ){
				el.append( 
					$( '<a>' ).attr( 'href', lessonNumber +'-0-'+ lesson.url +'.html' )
				)
				el = el.find( 'a' )
			}
			else el.addClass( 'indent' )
			el.append( lessonNumber +' &mdash; '+ lesson.title )
			if( lesson.pages ){
				
				lesson.pages.forEach( function( page, pageNumber ){

					var href = lessonNumber +'-'+ (pageNumber+1) +'-'+ page[1] +'.html'
					nav.append(
						$( '<li>' ).append( 
							$( '<a>' )
							.text( page[0] )
							.attr( 'href', href )
						) 
					)
				})
				nav.append( '<br />' )
			}
		})
		$( 'nav' ).empty().append( nav )


		//  You know, it might be helpful if we subtly indicated 
		//  which navigation option is currently active.

		$( 'nav li a' ).each( function(){
			
			if( pageUrl === $( this ).attr( 'href' )) $( this ).addClass( 'active' )
		})




		//  I needed a seriously quick and simple way to click between slides,
		//  mostly because I had planned to run the class off of Keynote
		//  then realized at the last minute it was a bad idea... but I still
		//  had all these slides I wanted to show. 
		//  None of the off-the-shelf solutions were ‘simple’ enough.

		$( '.slideshow' ).each( function(){
			
			var
			slideNumber = 0,
			slideshowContainer = $( this )
			
			slideshowContainer.after(
			
				$( '<div>' )
				.addClass( 'slideshowControls' )
				.append(
				
					$( '<a>' )
					.attr( 'href', '#' )
					.html( '&larr; Prev' )
					.click( function(){
						
						slideNumber --
						if( slideNumber < 0 ) slideNumber = slideshowContainer.find( '.slide' ).length-1

						//  Why do it in TWO passes? To avoid flickering.

						slideshowContainer.find( '.slide' ).each( function( i, slide ){
							if( i === slideNumber ) $( slide ).show()
						})
						slideshowContainer.find( '.slide' ).each( function( i, slide ){
							if( i !== slideNumber ) $( slide ).hide()
						})
						return false;
					})
				)
				.append( ' / ' )
				.append(
				
					$( '<a>' )
					.attr( 'href', '#' )
					.html( 'Next &rarr;' )
					.click( function(){
						
						slideNumber = ( slideNumber + 1 ) % slideshowContainer.find( '.slide' ).length
						
						//  Why do it in TWO passes? To avoid flickering.

						slideshowContainer.find( '.slide' ).each( function( i, slide ){
							if( i === slideNumber ) $( slide ).show()
						})
						slideshowContainer.find( '.slide' ).each( function( i, slide ){
							if( i !== slideNumber ) $( slide ).hide()
						})
						return false;
					})
				)
			)
		})
	},
	
	
	
	
	//  This was just a quick temporary solution for waiting until the user
	//  clicks before loading an actual email address into the href.
	//  To display an obfuscated email address... been solved any times over.
	//  Probably won’t stop me from tinkering with the idea later though.
	
	email: function( e ){
		
		var e = $( e )
		e.attr( 'href', 'mailto:' + e.attr( 'user' ) +'@'+ e.attr( 'host' ))
		return true
	},
	
	
	
	
	//  This is our navigation data, since we’re not using a database.
	//  Hold on, what? Why do all this client-side rather than a CMS?
	//  Because we want this to be über easy to download and run right off 
	//  the desktop so anyone can grab this material from GitHub and take 
	//  it with them if they want to!

	navigation: [	

		{
			title: 'Jump in',
			url  : 'jumpin',
			date : '7 September 2012',
			pages: [
				[ 'JavaScript basics', 'javascript' ],
				[ 'Design as communication', 'design' ],
				[ 'Homework', 'homework' ]			
			]
		},
		{
			title: 'Random fish',
			date : '14 September 2012'
		},
		{
			title: 'Text and image',
			date : '21 September 2012'
		},
		{
			title: 'Voice and closure',
			date : '28 September 2012'
		},
		{
			title: 'Code is data',
			date : '5 October 2012'
		},
		{
			title: 'Variations',
			date : '12 October 2012'
		},
		{
			title: 'Midterm critiques',
			date : '19 October 2012'
		},
		{
			title: 'Observe and report',
			date : '26 October 2012'
		},
		{
			title: 'Poster break',
			date : '2 November 2012'
		},
		{
			title: 'Patterning',
			date : '9 November 2012'
		},
		{
			title: 'TBD',
			date : '16 November 2012'
		},
		{
			title: 'TBD',
			date : '30 November 2012'
		},
		{
			title: 'Last chances',
			date : '7 December 2012'
		},
		{
			title: 'Final critiques',
			date : '14 December 2012'
		},
	]




}
$( document ).ready( A.setup )