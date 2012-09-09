

//  Skip.js
//  
//  Make JavaScript a little warmer, a little fuzzier.
//  
//  Author:  Stewart Smith.
//  Website: http://stewd.io
//  GitHub:  http://github.com/stewdio
//  Twitter: http://twitter.com/stewd_io




//  Copyright (C) 2012, Stewart Smith.
//  
//  Permission is hereby granted, free of charge, to any person obtaining a	
//  copy of this software and associated documentation files (the "Software"), 
//  to deal in the Software without restriction, including without limitation 
//  the rights to use, copy, modify, merge, publish, distribute, sublicense, 
//  and/or sell copies of the Software, and to permit persons to whom the 
//  Software is furnished to do so, subject to the following conditions:
//  
//  The above copyright notice and this permission notice shall be included in 
//  all copies or substantial portions of the Software.
//  
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
//  THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING 
//  FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER 
//  DEALINGS IN THE SOFTWARE.




(function(){




	    ///////////////////
	   //               //
	  //   Constants   //
	 //               //
	///////////////////


	E       = Math.E
	PI      = Math.PI
	TAU     = Math.PI * 2
	SQRT2   = Math.SQRT2
	SQRT1_2 = Math.SQRT1_2
	LN      = Math.LN2
	LN10    = Math.LN10
	LOG2E   = Math.LOG2E
	LOG10E  = Math.LOG10E

	SECOND  = 1000
	MINUTE  = SECOND * 60
	HOUR    = MINUTE * 60
	DAY     = HOUR * 24
	WEEK    = DAY * 7
	MONTH   = DAY * 30.4368499
	YEAR    = DAY * 365.242199
	DECADE  = YEAR * 10
	CENTURY = YEAR * 100

	MIN = Number.MIN_VALUE
	MAX = Number.MAX_VALUE



	
	    /////////////////
	   //             //
	  //   Helpers   //
	 //             //
	/////////////////


	var SKIP_JS = 3.2,

	forceAugment = function( type, name, data ){
		type.prototype[ name ] = data
	},

	augment = function( type, name, data, assignable ){
		if( type.prototype[ name ] === undefined )
			forceAugment( type, name, data )
		//if( assignable )
		//	augment( type, name + '_', function(){ console.log(this[name]());this.valueOf = this[name]() })
		//  http://stackoverflow.com/questions/2430552/javascript-function-using-this-gives-invalid-left-hand-side-in-assignment
	},

	cascade = function( a, b ){
		var i, args = Array.prototype.slice.call( arguments )
		for( i = 0; i < args.length; i ++ )
			if( args[ i ] !== undefined ) return args[ i ]
		return false
	},

	coinFlip = function(){
		var i = Math.round( Math.random() )
		return i//  Use as a boolean
	}




	    ////////////////
	   //            //
	  //   Arrays   //
	 //            //
	////////////////


	augment( Array, 'distanceTo', function( target ){
		var i, sum = 0
		if( arguments.length > 1 ){
			target = Array.prototype.slice.call( arguments )
		}
		if( this.length === target.length ){
			for( i = 0; i < this.length; i ++ ){
				sum += Math.pow( target[i] - this[i], 2 )
			}
			return Math.pow( sum, 0.5 )
		}
		else {
			return null
		}
	})

	augment( Array, 'max', function(){
		return Math.max.apply( null, this )
	})

	augment( Array, 'min', function(){
		return Math.min.apply( null, this )
	})
	
	augment( Array, 'indexOf', function( obj, fromIndex ){
		var i, j
		if( fromIndex === null ){
			fromIndex = 0
		}
		else if( fromIndex < 0 ){
			fromIndex = Math.max( 0, this.length + fromIndex )
		}
		for( i = fromIndex, j = this.length; i < j; i++ ){
			if( this[i] === obj ) return i
		}
		return -1//  I'd rather return NaN, but this is more standard.
	})	
	
	augment( Array, 'remove', function( from, to ){
		var rest = this.slice(( to || from ) + 1 || this.length )
		this.length = from < 0 ? this.length + from : from
		return this.push.apply( this, rest )
	})

	augment( Array, 'shuffle', function(){
		var copy = this,
			i = this.length, 
			j,
			tempi,
			tempj
		if( i == 0 ) return false
		while( -- i ){
			j = Math.floor( Math.random() * ( i + 1 ))
			tempi = copy[ i ]
			tempj = copy[ j ]
			copy[ i ] = tempj
			copy[ j ] = tempi
		}
		return copy
	})

	augment( Array, 'toHtml', function(){
		var i, html = '<ul>'
		for( i = 0; i < this.length; i ++ ){
			if( this[ i ] instanceof Array )
				html += this[ i ].toHtml()
			else
				html += '<li>' + this[ i ] + '</li>'
		}
		html += '</ul>'
		return html
	})

	augment( Array, 'toText', function( depth ){
		var i, indent, text
		depth = cascade( depth, 0 )
		indent = '\n' + '\t'.multiply( depth )
		text = ''
		for( i = 0; i < this.length; i ++ ){
			if( this[ i ] instanceof Array )
				text += indent + this[ i ].toText( depth + 1 )
			else
				text += indent + this[ i ]
		}
		return text
	})




	    /////////////////
	   //             //
	  //   Numbers   //
	 //             //
	/////////////////


	augment( Number, 'abs', function(){
		return Math.abs( this )
	})

	augment( Number, 'acos', function(){
		return Math.acos( this )
	})
	
	augment( Number, 'asin', function(){
		return Math.asin( this )
	})
	
	augment( Number, 'atan', function(){
		return Math.atan( this )
	})

	augment( Number, 'ceil', function(){
		return Math.ceil( this )
	})

	augment( Number, 'constrain', function( a, b ){
		var higher, lower, c = this
		b = b || 0
		higher = [ a, b ].max()
		lower  = [ a, b ].min()
		c = [ c, higher ].min()
		c = [ c, lower  ].max()
		return c
	})
	
	augment( Number, 'cos', function(){
		return Math.cos( this )
	})

	augment( Number, 'degreesToDirection', function(){
		var d = this % 360,
		directions = [ 'N', 'NNE', 'NE', 'NEE', 'E', 'SEE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'SWW', 'W', 'NWW', 'NW', 'NNW', 'N' ]
		return directions[ this.map( 0, 360, 0, directions.length - 1 ).round() ]
	})

	augment( Number, 'degreesToRadians', function(){
		return this * Math.PI / 180
	})

	augment( Number, 'floor', function(){
		return Math.floor( this )
	})

	augment( Number, 'lerp', function( a, b ){
		return a + (b - a ) * this
	})

	augment( Number, 'log10', function(){
		// is this more pragmatic? ---> return ( '' + this.round() ).length;
		return Math.log( this ) / Math.log( 10 )
	})

	augment( Number, 'map', function( a0, a1, b0, b1 ){
		var phase = this.norm( a0, a1 )
		if( b0 == b1 ) return b1
		return b0 + phase * ( b1 - b0 )
	})

	augment( Number, 'max', function( n ){
		return Math.max( this, n )
	})

	augment( Number, 'min', function( n ){
		return Math.min( this, n )
	})

	augment( Number, 'norm', function( a, b ){
		if( a == b ) return 1.0
		return ( this - a ) / ( b - a )
	})

	augment( Number, 'pad', function( digits, decimals ){
		var i,
			stringed = '' + this
			padding  = ''
		digits   = digits   || 2
		decimals = decimals || 0
		for( i = stringed.length; i < digits; i ++ ){
			padding += '0'
		}
		return padding + stringed
		// so what about decimals? padding to right of decimal?
	})

	augment( Number, 'pow', function( exponent ){
		return Math.pow( this, exponent )
	})

	augment( Number, 'radiansToDegrees', function(){
		return this * 180 / Math.PI
	})


	augment( Number, 'rnd', function( n ){// beware, forces integer! but oh-so convenient.
		var min, max
		if( n !== undefined ){
			min = Math.min( this, n )
			max = Math.max( this, n )
			return min + Math.floor( Math.random() * ( max - min ))
		}
		return Math.floor( Math.random() * this )
	})
	
	augment( Number, 'random', function( n ){
		var min, max
		if( n !== undefined ){
			min = Math.min( this, n )
			max = Math.max( this, n )
			return min + Math.random() * ( max - min )
		}
		return Math.random() * this
	})

	augment( Number, 'round', function( decimals ){
		var n  = this
		decimals = decimals || 0
		n *= Math.pow( 10, decimals )
		n  = Math.round( n )
		n /= Math.pow( 10, decimals )
		return n
	})

	augment( Number, 'sin', function(){
		return Math.sin( this )
	})

	augment( Number, 'tan', function(){
		return Math.tan( this )
	})

	augment( Number, 'unixToYear', function(){
		return ( new Date( this * 1000 )).getUTCFullYear()
	})

	augment( Number, 'yearToUnix', function(){
		return ( new Date( this, 0, 0, 0, 0, 0, 0 )).valueOf() / 1000
	})




	augment( Number, 'seconds', function(){
		return this * SECOND
	}, true )

	augment( Number, 'minutes', function(){
		return this * MINUTE
	}, true )

	augment( Number, 'hours', function(){
		return this * HOUR
	}, true )

	augment( Number, 'days', function(){
		return this * DAY
	}, true )

	augment( Number, 'weeks', function(){
		return this * WEEK
	}, true )

	augment( Number, 'months', function(){
		return this * MONTH
	}, true )

	augment( Number, 'years', function(){
		return this * YEAR
	}, true )

	augment( Number, 'decades', function(){
		return this * DECADE
	}, true )

	augment( Number, 'centuries', function(){
		return this * CENTURY
	}, true )

	augment( Number, 'ago', function(){
		return +Date.now() - this
	}, true )
	
	augment( Number, 'toDate', function(){
		return new Date( this )
	}, true )
	



	    /////////////////
	   //             //
	  //   Strings   //
	 //             //
	/////////////////


	augment( String, 'capitalize', function(){
		return this.charAt( 0 ).toUpperCase() + this.slice( 1 ).toLowerCase()
	})

	augment( String, 'directionToDegrees', function(){
		var
		directions = [ 'N', 'NNE', 'NE', 'NEE', 'E', 'SEE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'SWW', 'W', 'NWW', 'NW', 'NNW', 'N' ],
		i = directions.indexOf( this.toUpperCase() )
		return i >= 0 ? i.map( 0, directions.length - 1, 0, 360 ) : Number.NaN
	})

	augment( String, 'downcase', function(){
		return this.toLowerCase()
	})

	augment( String, 'isEmpty', function(){
		return this.length === 0 ? true : false
	})

	augment( String, 'multiply', function( n ){
		var i, s = ''
		n = cascade( n, 2 )
		for( i = 0; i < n; i ++ ){
			s += this
		}
		return s
	})

	augment( String, 'size', function(){
		return this.length
	})

	augment( String, 'reverse', function(){
		var i, s = ''
		for( i = 0; i < this.length; i ++ ){
			s = this[ i ] + s
		}
		return s
	}, true )

	augment( String, 'upcase', function(){
		return this.toUpperCase()
	})

	augment( String, 'toNumber', function(){
		return parseFloat( this )
	})

	augment( String, 'toUnicode', function(){
		var i, u, unicode = ''
		for( i = 0; i < this.length; i ++ ){
			u = this.charCodeAt( i ).toString( 16 ).toUpperCase()
			while( u.length < 4 ){
				u = '0' + u
			}
			unicode += '\\u' + u
		}
		return unicode
	})

	augment( String, 'toEntities', function(){
		var i, entities = ''
		for( i = 0; i < this.length; i ++ ){
			entities += '&#' + this.charCodeAt( i ) + ';'
		}
		return entities
	})
	
	
	
	
/*

	FUTURE TASKS:
	
	Would be great if we could make an array of all the Functions to augment
	and on the fly create sibling Functions!() that destructively alter the 
	original Object a la Ruby. Perhaps we use an underscore suffix? Example:
	
	var a = 1, b = 2
	a.max( a, b )// output would be 2.
	a// but the value of a is still 1.
	
	a.max_( a, b )// output would be 2.
	a// and the value of a is now 2 as well!


*/
})()