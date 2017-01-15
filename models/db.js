var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/employeedb';


var dbURI = 'mongodb://Employee:emp_123@ds161008.mlab.com:61008/employeedata';


mongoose.connect(dbURI);


mongoose.connect(dbURI, function(err) {
	if (err) {
		console.log('connection error', err);
	} else {
		console.log('connection successful');
	}
});


var employeeSchema = new mongoose.Schema({
	Name : String,
	Email: String,
	Date_of_birth: Date,
	Department: String,
	Gender: String,
	Age: ({ $subtract: [ new Date(), "$Date_of_birth" ] })/(365*24*60*60*1000) 
});
mongoose.model("Employee",employeeSchema);
