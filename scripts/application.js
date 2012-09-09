A = {


	setup: function(){


		//  Create navigation link to Home.

		var 
		nav  = $( '<ul>' ),
		home = $( '<li>' ).append(

			$( '<a>' )
			.text( 'Home' )
			.attr( 'href', 'index.html' )
		),
		url = document.location.href.split( '/' ).pop()
		if( url === 'index.html' || url === '' ) home.addClass( 'active' )
		nav.append( home )
		nav.append( '<br />' )


		//  Append navigation based on our A.navigation{} object.

		A.navigation.forEach( function( lesson, lessonNumber ){

			lessonNumber = ( lessonNumber + 1 ).pad( 2 )
			nav.append( 

				$( '<li>' )
				.addClass( 'indent' )
				.append( lessonNumber +' &mdash; '+ lesson.title )
				.attr( 'title', lesson.date )
			)
			if( lesson.pages ){
				
				lesson.pages.forEach( function( page, pageNumber ){

					var 
					href = lessonNumber +'-'+ (pageNumber+1) + '-'+ page[1] + '.html',
					listItem = $( '<li>' ).append( 

						$( '<a>' )
						.text( page[0] )
						.attr( 'href', href )
					)
					if( document.location.href.split( '/' ).pop() === href ) listItem.addClass( 'active' )
					nav.append( listItem )
				})
				nav.append( '<br />' )
			}
		})
		$( 'nav' ).empty().append( nav )


		/*window.setTimeout( function(){

			$( 'nav' )
			.fadeTo( 1000, 0.3 )
			.mouseenter( function(){ $( this ).fadeTo(  200, 1.0 )})
			.mouseleave( function(){ $( this ).fadeTo( 1000, 0.3 )})			
			
		}, 500 )*/



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
	
	
	
	
	email: function( e ){
		
		var e = $( e )
		e.attr( 'href', 'mailto:' + e.attr( 'user' ) +'@'+ e.attr( 'host' ))
		return true
	},
	
	


	navigation: [	

		{
			title: 'Jump in',
			date:  '7 September 2012',
			pages: [
				[ 'JavaScript basics', 'javascript' ],
				[ 'Design as communication', 'design' ],
				[ 'Homework', 'homework' ]			
			]
		},
		{
			title: 'Random fish',
			date:  '14 September 2012'
		},
		{
			title: 'Text and image',
			date:  '21 September 2012'
		},
		{
			title: 'Voice and closure',
			date:  '28 September 2012'
		},
		{
			title: 'Code is data',
			date:  '5 October 2012'
		},
		{
			title: 'Variations',
			date:  '12 October 2012'
		},
		{
			title: 'Midterm critiques',
			date:  '19 October 2012'
		},
		{
			title: 'Observe and report',
			date:  '26 October 2012'
		},
		{
			title: 'Poster break',
			date:  '2 November 2012'
		},
		{
			title: 'Patterning',
			date:  '9 November 2012'
		},
		{
			title: 'TBD',
			date:  '16 November 2012'
		},
		{
			title: 'TBD',
			date:  '30 November 2012'
		},
		{
			title: 'Last chances',
			date:  '7 December 2012'
		},
		{
			title: 'Final critiques',
			date:  '14 December 2012'
		},
	]




}
$( document ).ready( A.setup )