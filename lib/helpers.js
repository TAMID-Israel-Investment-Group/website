var index = 0;

function setIndex() {
  index = 0;
}



module.exports = {
  ifEven: function( options ) {
    if ( !(this.index) ) {
      this.index = 0;
    }
    this.index++;
    return this.index;
    console.log(index);

    if ( index % 2 === 0 ) {
      console.log(options.fn( this ));
      return options.fn( this );
    } else {
      return options.inverse( this );
    }
    index++;
  }
}
