const helloWord = require( './' );

test( 'It returns a string', () => {
    expect( helloWord() ).toEqual( 'Hello, World' );
} );
