A = {


	setup: function(){

		var 
		pageUrl = document.location.href.split( '/' ).pop(),
		nav  = $( '<table>' )


		//  Create navigation link to Home.
	
		nav.append(
			$( '<tr>' )
			.append( $( '<td>' ).addClass( 'lessonNumber' ))
			.append( $( '<td>' ).append(

				$( '<a>' )
				.text( 'Home' )
				.attr( 'href', 'index.html' )
			))
		)
		nav.append( '<br />' )


		//  Create the extended navigation to all lessons and their pages
		//  based on our A.navigation{} object.

		A.navigation.forEach( function( lesson, lessonNumber ){

			var el
			
			lessonNumber = ( lessonNumber + 1 )
			el = $( '<tr>' )
				.addClass( 'lessonHeader' )
				.attr( 'title', lesson.date )
				.append( $( '<td>' ).addClass( 'lessonNumber' ).append( lessonNumber ))
			nav.append( el )//  Weird bug. Had to add it to the DOM *before* doing next two lines. Strange.
			el.append( $( '<td>' ))
			el = $( el.find( 'td' )[ 1 ] )


			lessonNumber = lessonNumber.toPaddedString( 2 )
			if( lesson.url ){
				el.append( $( '<a>' ).attr( 'href', lessonNumber +'-0-'+ lesson.url +'.html' ))
				el = el.find( 'a' )
			}
			else el.addClass( 'indent' )
			el.append( lesson.title )


			if( lesson.pages ){
				
				lesson.pages.forEach( function( page, pageNumber ){

					var href = lessonNumber +'-'+ (pageNumber+1) +'-'+ page[1] +'.html'
					nav.append(
						$( '<tr>' )
						.append( $( '<td>' ).append( '' ))
						.append( $( '<td>' ).append(
							$( '<a>' )
							.text( page[0] )
							.attr( 'href', href )
						))
					)
				})
				//nav.append( '<br />' )
			}
		})
		$( 'nav' ).empty().append( nav )


		//  You know, it might be helpful if we subtly indicated 
		//  which navigation option is currently active.

		$( 'nav a' ).each( function(){

			if( pageUrl === $( this ).attr( 'href' )) $( this ).addClass( 'active' )
		})




		//  Take anything with a ‘tip’ attribute
		//  and create a Tool Tip for it.
		
		var toolTip = $( '<div>' )
			.addClass( 'tip' )
			.text( 'This is a tool tip.' )
			.mouseleave( function(){
				
				$( this ).hide()//fadeOut( 300 )
			})
		$( 'article' ).append( toolTip )
		$( 'article *[tip]' )
			.addClass( 'tipper' )
			.mouseenter( function(){
				toolTip
					.hide()
					.text( $(this).attr( 'tip' ))
					.css({
						left: $(this).position().left.round() - 6,
						top:  $(this).position().top.round()  - 6
					})
					.show()//fadeIn( 100 )
			})




		//  I needed a seriously quick and simple way to click between slides,
		//  mostly because I had planned to run the class off of Keynote
		//  then realized at the last minute it was a bad idea... but I still
		//  had all these slides I wanted to show. 
		//  None of the off-the-shelf solutions were ‘simple’ enough.

		$( '.slideshow' ).each( function(){
			
			var
			slideshowContainer = $( this ),
			slideNumber        = 0,
			slideNumberLast    = slideshowContainer.find( '.slide' ).length-1,
			slideNumberLabel   = $( '<span>' ).text( ' / ' ),
			slideNumberUpdate  = function(){
				
				
				//  Why do it in TWO passes? To avoid flickering.

				slideshowContainer.find( '.slide' ).each( function( i, slide ){
					if( i === slideNumber ) $( slide ).show()
				})
				slideshowContainer.find( '.slide' ).each( function( i, slide ){
					if( i !== slideNumber ) $( slide ).hide()
				})
				slideNumberLabel.text(
				
					' '+ ( slideNumber + 1 ) +':'+ ( slideNumberLast + 1 ) +' '
				)
			}
			
			slideshowContainer.after(
			
				$( '<div>' )
				.addClass( 'slideshowControls' )
				.append(
				
					$( '<a>' )
					.attr( 'href', '#' )
					.html( '&larr; Prev' )
					.click( function(){
						
						slideNumber --
						if( slideNumber < 0 ) slideNumber = slideNumberLast
						slideNumberUpdate()
						return false;
					})
				)
				.append( slideNumberLabel )
				.append(
				
					$( '<a>' )
					.attr( 'href', '#' )
					.html( 'Next &rarr;' )
					.click( function(){
						
						slideNumber = ( slideNumber + 1 ) % ( slideNumberLast + 1 )
						slideNumberUpdate()
						return false;
					})
				)
			)
			slideNumberUpdate()
		})
	},
	
	
	
	
	//  This was just a quick temporary solution for waiting until the user
	//  clicks before loading an actual email address into the href.
	//  To display an obfuscated email address... been solved many times over.
	//  Probably won’t stop me from tinkering with the idea later though.
	
	email: function( e ){
		
		var e = $( e )
		e.attr( 'href', 'mailto:' + e.attr( 'user' ) +'@'+ e.attr( 'host' ))
		return true
	},
	
	
	
	
	//  This is our navigation data, since we’re not using a database.
	//  Hold on, what? Why do all this client-side rather than in a CMS?
	//  Because we want this to be über easy to download and run right off 
	//  the desktop so anyone can grab this material from GitHub and take 
	//  it with them if they want to!

	navigation: [	

		{
			title: 'Welcome',
			url  : 'welcome',
			date : '7 September 2012',
			pages: [
				[ 'JavaScript basics', 'javascript' ],
				[ 'Design as communication', 'design' ],
				[ 'Homework', 'homework' ]
			]
		},
		{
			title: 'Paperwork',
			url  : 'paperwork',
			date : '14 September 2012',
			pages: [
				[ 'Some more basics', 'javascript' ],
				[ 'Closures', 'closure' ],
				[ 'Introducing Paper.js', 'paper' ],
				[ 'Homework', 'homework' ]
			]
		},
		{
			title: 'Paperworking',
			url  : 'paperworking',
			date : '21 September 2012',
			pages: [
				[ 'Introducing Skip.js', 'skip' ],
				[ 'Homework', 'homework' ]
			]
		},
		{
			title: 'Paperworked',
			url:   'paperworked',
			date : '28 September 2012',
			pages: [
				[ 'Paper Squares critique', 'critique' ],
				[ 'Homework', 'homework' ]
			]
		},
		{
			title: 'Powers of Three',
			url  : 'three',
			date : '5 October 2012',
			pages: [
				[ 'Prototypal inheritance', 'inheritance' ],
				[ 'Introducing Three.js', 'three' ],
				[ 'Homework', 'homework' ]
			]
		},
		{
			title: 'Code is data',
			date : '12 October 2012'
			//title: 'Text and grids',
			//url  : 'textgrids',
			//date : '28 September 2012'
			//pages: [
			//	[ 'Prototypal inheritance', 'inheritance' ],
			//	[ 'Design history highlights', 'design' ],
			//	[ 'Gazing at grids', 'grids' ],
			//	[ 'Looking at letterforms', 'letterforms' ],
			//	[ 'Homework', 'homework' ]
			//]
		},
		{
			title: 'Patterning',
			date : '19 October 2012'
		},
		{
			title: 'Midterm critiques',
			//url  : 'observe',
			date : '26 October 2012'
		},
		{
			title: 'Poster break',
			date : '2 November 2012'
		},
		{
			title: 'Observe and report',
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