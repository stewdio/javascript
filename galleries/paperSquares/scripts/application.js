

var students = [

	{
		name  : 'Hiye Shin',
		handle: 'hiyeShin',
		works : [{
			name  : 'Chaos and Order', 
			handle: 'chaosOrder'
		},{
			name  : 'Unfortunate', 
			handle: 'unfortunate'
		}]
	},
	{
		name  : 'Olya Mikhaliova',
		handle: 'olyaMikhaliova',
		works : [{
			name  : 'Fortunate and Unfortunate', 
			handle: 'fortunateUnfortunate'
		},{
			name  : 'Order and Chaos', 
			handle: 'orderChaos'
		}]
	},
	{
		name  : 'Hsiao-Wen (Tiffany) Chou',
		handle: 'hsiaoWenChou',
		works : [{
			name  : 'Fortunate &amp; Unfortunate',//  IMAGE MISSING
			handle: 'fortunateUnfortunate'
		},{
			name  : 'Order &amp; Chaos',//  IMAGE MISSING
			handle: 'orderChaos'
		}]
	},
	{
		name  : 'Mark Breneman',
		handle: 'markBreneman',
		works : [{
			name  : 'Included—Excluded', 
			handle: 'includedExcluded'
		},{
			name  : 'Robust—Fragile', 
			handle: 'robustFragile'
		}]
	},
	{
		name  : 'Robbie Tilton',
		handle: 'robbieTilton',
		works : [{
			name  : 'Include and Exclude', 
			handle: 'includeExclude'
		},{
			name  : 'Order and Chaos', 
			handle: 'orderChaos'
		}]
	},
	{
		name  : 'Inessah Selditz',
		handle: 'inessahSelditz',
		works : [{
			name  : 'Order Chaos', 
			handle: 'orderChaos'
		},{
			name  : 'Robust Fragile',
			handle: 'robustFragile'
		}]
	},
	{
		name  : 'Robin Reid',
		handle: 'robinReid',
		works : [{
			name  : 'Order Chaos', 
			handle: 'orderChaos'
		},{
			name  : 'Robust Fragile',//  IMAGE MISSING
			handle: 'robustFragile'
		}]
	},
	{
		name  : 'Joseph Lim',
		handle: 'josephLim',
		works : [{
			name  : 'Chaos / Order', 
			handle: 'chaosOrder'
		},{
			name  : 'Excluded / Included', 
			handle: 'excludedIncluded'
		}]
	},
	{
		name  : 'Blythe Sheldon',
		handle: 'blytheSheldon',
		works : [{
			name  : 'Inclusion and Exclusion', 
			handle: 'inclusionExclusion'
		},{
			name  : 'Robust Fragile', 
			handle: 'robustFragile'
		}]
	},
	{
		name  : 'Peter Darche',
		handle: 'peterDarche',
		works : [{
			name  : 'Chaos to Order', 
			handle: 'chaosOrder'
		},{
			name  : 'Fortunate to Unfortunate', 
			handle: 'fortunateUnfortunate'
		}]
	},
	{
		name  : 'Engin Ayaz',
		handle: 'enginAyaz',
		works : [{
			name  : 'Included to Excluded', 
			handle: 'includedExcluded'
		},{
			name  : 'Order to Chaos', 
			handle: 'orderChaos'
		}]
	},
	{
		name  : 'Patrick Muth',
		handle: 'patrickMuth',
		works : [{
			name  : 'Included / Excluded',
			handle: 'includedExcluded'
		},{
			name  : 'Order / Chaos',
			handle: 'orderChaos'
		}]
	},
	{
		name  : 'Lisa Lokshin',
		handle: 'lisaLokshin',
		works : [{
			name  : 'Included—Excluded',
			handle: 'includedExcluded'
		},{
			name  : 'Order—Chaos',
			handle: 'orderChaos'
		}]
	},
	{
		name  : 'Hanna Kang-Brown',
		handle: 'hannaKangBrown',
		works : [{
			name  : 'Inclusive to Exclusive',
			handle: 'inclusiveExclusive'
		},{
			name  : 'Order to Chaos',
			handle: 'orderChaos'
		}]
	},
	/*{
		name  : 'Joseph McCagherty',
		handle: 'josephMccagherty',
		works : [{
			name  : 'Untitled 1 of 2',
			handle: 'untitled1'
		},{
			name  : 'Untitled 2 of 2',
			handle: 'untitled2'
		}]
	},
	{ name: 'K (Kaitlin) Till-Landry' }*/
	//{ name: 'Laura (Luca) Shapiro' }
]
//students.shuffle()




$( document ).ready( function(){	
	
	var tiles  = $( '#tiles' )

	tiles.empty()
	students.forEach( function( student ){

		var i, tile, work

		for( i = 0; i < 2; i ++ ){

			tile = $( '<div>' ).addClass( 'tile' )
			if( student.works && student.works[ i ]){

				work = student.works[ i ]
				tile.append(
					$( '<a>' )
					.attr( 'href', 'students/'+ student.handle +'/'+ work.handle +'.html' )
					.attr( 'target', '_blank' )
					.append(
						$( '<img>' ).attr( 'src', 'students/'+ student.handle +'/'+ work.handle +'.jpg' )
					)
				).append(
					$( '<div>' ).addClass( 'pad' ).append(
						$( '<div>' ).addClass( 'title' ).html( work.name || 'Untitled' ),
						$( '<div>' ).addClass( 'author' ).html( student.name )
					)
				)
			}
			else {
				
				tile.append(
					$( '<img>' ).attr( 'src', 'media/workMissing.png' )
				).append(
					$( '<div>' ).addClass( 'pad' ).append(
						$( '<div>' ).addClass( 'title' ).html( 'Untitled '+ (i+1) +' of 2' ),
						$( '<div>' ).addClass( 'author' ).html( student.name )
					)
				)
			}
			tiles.append( tile )
		}
	})	
})



