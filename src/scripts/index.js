
// // reads in helper.js
// requirejs(["helper"], function(util) {
//   //This function is called when scripts/helper/util.js is loaded.
//   //If util.js calls define(), then this function is not fired until
//   //util's dependencies have loaded, and the util argument will hold
//   //the module value for "helper/util".
// });

// // Import the package main module
// const csv = require('csv')
// // Use the module
// csv
// // Generate 20 records
// .generate({
//   delimiter: '|',
//   length: 20
// })
// // Parse the records
// .pipe(csv.parse({
//   delimiter: '|'
// }))
// // Transform each value into uppercase
// .pipe(csv.transform(function(record){
//    return record.map(function(value){
//      return value.toUpperCase()
//    });
// }))
// // Convert the object into a stream
// .pipe(csv.stringify({
//   quoted: true
// }))
// // Print the CSV stream to stdout
// .pipe(process.stdout)

// // console.log(csv)

// console.log("testing")

// var csv = require('../data/project_data.csv');

// // var csv = require('csv');

// var generator = csv.generate({seed: 1, columns: 2, length: 20});
// var parser = csv.parse();
// var transformer = csv.transform(function(data){
//   return data.map(function(value){return value.toUpperCase()});
// });
// var stringifier = csv.stringify();

// generator.on('readable', function(){
//   while(data = generator.read()){
//     parser.write(data);
//   }
// });

// parser.on('readable', function(){
//   while(data = parser.read()){
//     transformer.write(data);
//   }
// });

// transformer.on('readable', function(){
//   while(data = transformer.read()){
//     stringifier.write(data);
//   }
// });

// stringifier.on('readable', function(){
//   while(data = stringifier.read()){
//     process.stdout.write(data);
//   }
// });


var data;

Papa.parse('../src/data/project_data.csv', {
  header: true,
  download: true,
  dynamicTyping: true,
  complete: function(results) {
    console.log(results.data);
    data = results.data;
  }
});

