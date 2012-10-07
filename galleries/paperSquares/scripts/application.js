

var works = [

	{
		title:  'Chaos and Order',
		author: 'Hiye Shin',
		image:  'hiyeShin-chaosOrder.jpg',
		handle: 'hiyeShin/chaosOrder/index.html'
	},
	{
		title:  'Fortunate',
		author: 'Hiye Shin',
		image:  'hiyeShin-fortunate.jpg',
		handle: 'hiyeShin/fortunate/index.html'
	},
	{
		title:  'Fortunate and Unfortunate',
		author: 'Olya Mikhaliova',
		image:  'olyaMikhaliova-fortunateUnfortunate.jpg',
		handle: 'olyaMikhaliova/fortunateUnfortunate/index.html'
	},
	{
		title:  'Order and Chaos',
		author: 'Olya Mikhaliova',
		image:  'olyaMikhaliova-orderChaos.jpg',
		handle: 'olyaMikhaliova/orderChaos/index.html'
	},
	{
		title:  'Fortunate &amp; Unfortunate',
		author: 'Hsiao-Wen (Tiffany) Chou',
		image:  'imageMissing.jpg',
		handle: 'hsiaoWenChou/fortunateUnfortunate/index.html'
	},
	{
		title:  'Included—Excluded',
		author: 'Mark Breneman',
		image:  'markBreneman-includedExcluded.jpg',
		handle: 'markBreneman/includedExcluded/index.html'
	},
	{
		title:  'Robust—Fragile',
		author: 'Mark Breneman',
		image:  'markBreneman-robustFragile.jpg',
		handle: 'markBreneman/robustFragile/index.html'
	},
	{
		title:  'Include and Exclude',
		author: 'Robbie Tilton',
		image:  'robbieTilton-includeExclude.jpg',
		handle: 'robbieTilton/includeExclude.html'
	},
	{
		title:  'Order and Chaos',
		author: 'Robbie Tilton',
		image:  'robbieTilton-orderChaos.jpg',
		handle: 'robbieTilton/orderChaos.html'
	},
	{
		title:  'Order Chaos',
		author: 'Inessah Selditz',
		image:  'inessahSelditz-orderChaos.jpg',
		handle: 'inessahSelditz/orderChaos/index.html'
	},
	{
		title:  'Robust Fragile',
		author: 'Inessah Selditz',
		image:  'inessahSelditz-robustFragile.jpg',
		handle: 'inessahSelditz/robustFragile/index.html'
	},
	{
		title:  'Order Chaos',
		author: 'Robin Reid',
		image:  'robinReid-orderChaos.jpg',
		handle: 'robinReid/orderChaos/index.html'
	},
	{
		title:  'Chaos / Order',
		author: 'Joseph Lim',
		image:  'josephLim-chaosOrder.jpg',
		handle: 'josephLim/chaosOrder.html'
	},
	{
		title:  'Excluded / Included',
		author: 'Joseph Lim',
		image:  'josephLim-excludedIncluded.jpg',
		handle: 'josephLim/excludedIncluded.html'
	},
	{
		title:  'Inclusion and Exclusion',
		author: 'Blythe Sheldon',
		image:  'blytheSheldon-inclusionExclusion.jpg',
		handle: 'blytheSheldon/inclusionExclusion.html'
	},
	{
		title:  'Robust Fragile',
		author: 'Blythe Sheldon',
		image:  'blytheSheldon-robustFragile.jpg',
		handle: 'blytheSheldon/robustFragile.html'
	},
	{
		title:  'Chaos to Order',
		author: 'Peter Darche',
		image:  'peterDarche-chaosOrder.jpg',
		handle: 'peterDarche/chaosOrder.html'
	},
	{
		title:  'Fortunate to Unfortunate',
		author: 'Peter Darche',
		image:  'peterDarche-fortunateUnfortunate.jpg',
		handle: 'peterDarche/fortunateUnfortunate.html'
	},
	{
		title:  'Included to Excluded',
		author: 'Engin Ayaz',
		image:  'enginAyaz-includedExcluded.jpg',
		handle: 'enginAyaz/includedExcluded.html'
	},
	{
		title:  'Order to Chaos',
		author: 'Engin Ayaz',
		image:  'enginAyaz-orderChaos.jpg',
		handle: 'enginAyaz/orderChaos.html'
	},


	//  Half shows

	{ 
		title:  'Animation 2',
		author: 'Hsiao-Wen (Tiffany) Chou'
	},
	{
		title:  'Animation 2',
		author: 'Robin Reid'
	},
	

	//  No shows

	{
		title:  'Animation 1',
		author: 'Hanna Kang-Brown'
	},
	{
		title:  'Animation 2',
		author: 'Hanna Kang-Brown'
	},
	{
		title:  'Animation 1',
		author: 'Engin Ayaz'
	},
	{
		title:  'Animation 2',
		author: 'Engin Ayaz'
	},
	{
		title:  'Animation 1',
		author: 'Joseph McCagherty'
	},
	{
		title:  'Animation 2',
		author: 'Joseph McCagherty'
	},
	{
		title:  'Animation 1',
		author: 'K (Kaitlin) Till-Landry'
	},
	{
		title:  'Animation 2',
		author: 'K (Kaitlin) Till-Landry'
	},
	/*{
		title:  'Animation 1',
		author: 'Laura (Luca) Shaprio'
	},
	{
		title:  'Animation 2',
		author: 'Laura (Luca) Shaprio'
	},*/
	{
		title:  'Animation 1',
		author: 'Patrick Muth'
	},
	{
		title:  'Animation 2',
		author: 'Patrick Muth'
	}
]




$( document ).ready( function(){	
	
	var 
	pageUrl = document.location.href.split( '/' ).pop(),
	workTiles  = $( '#works' )

	workTiles.empty()
	works.forEach( function( work, i ){

		var workTile = $( '<div>' ).addClass( 'work' )

		if( work.handle ){
			
			if( work.image ){
				workTile.append(
					$('<a>')
					.attr( 'href', 'works/'+ work.handle )
					.attr( 'target', '_blank' )
					.append(
						$( '<img>' ).attr( 'src', 'media/'+ work.image )
					)
				)
			}
			else {
				workTile.append( 
					$( '<img>' ).attr( 'src', 'media/imageMissing.jpg' )
				)			
			}
		}
		else {
			workTile.append( 
				$( '<img>' ).attr( 'src', 'media/workMissing.png' )
			)
		}
		workTile.append(
			$( '<div>' ).addClass( 'pad' ).append(
				$( '<div>' ).addClass( 'title' ).html( work.title || 'Untitled' ),
				$( '<div>' ).addClass( 'author' ).html( work.author )
			)
		)
		workTiles.append( workTile )
	})
})



